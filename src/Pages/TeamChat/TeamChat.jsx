import { useState, useRef, useEffect } from 'react';
import { Input } from 'antd';
import { SendOutlined , FileOutlined, UploadOutlined} from '@ant-design/icons';
import { Col, Row, Upload,Image, Button } from 'antd';
import io from 'socket.io-client';
import Sn from './SideChatNav';
import {inputStyle, messageBoxStyle, chatStyle, mainRow, timeStyle,msgBox, avatarStyle} from "./TeamChatStyle";
const socket = io('http://localhost:3001');
import "./TeamChat.css"

const TeamChat = (expand) => {
  console.log(expand.expand )
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userID, setUserId] = useState(null);
  const inputRef = useRef(null);
  const chatRef = useRef(null);
  const chatBox = useRef(null);
  const [isSend, setSend] = useState(true)
  const [loading, setLoading] = useState(true);
  const [loginMsg, setMsg]=useState("Please login to see the chat")
  const [isLogin, setLogin]=useState(false);
  const [isExpand, setExpand]= useState(false)
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [fileData, setFileData] = useState('');
  let prevSender = null;
 
  useEffect(() => {
    // // Move the chat box scrollbar to the bottom when a new message is received
    if(isLogin){

    chatRef.current.scrollTop = chatRef.current.scrollHeight;
    console.log(chatRef.current, "crf")
console.log(chatRef.current.scrollTop," heightttt")
    }
  }, [messages]);
  // useEffect to auth for login to see chat , another useEffect because state upating take time if in same useEffect
  useEffect(()=>{
// Get the screen width
const screenWidth = chatBox.current.offsetWidth;
if(screenWidth>800){
setExpand(true)
}
else{
  setExpand(false)
}
    // alert("fu")
    const cookieName = 'user';
    // Get the value of the cookie by name
    const user = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cookieName}=`))
      ?.split('=')[1];
      if(user){
        // alert("user exist")
        setMsg("Authenticating ....") 
        fetch('http://localhost:5100/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               user:user
            })
          })
       
            .then(response => {
              if (response.ok) {
                console.log("authhhhhhh")
                // dispatch(postActions.setLoginStatus(true));
                
                setLogin(true)
              }
              else{
                setMsg("login authentication failed , try again")
              }
            })
        
            .catch(error => {
              console.error('Error:', error);
            });
      }
      else{
        // alert("no auth useer")
        
      }

     
  },[])
  useEffect(() => {
    const cookieName = 'user';
    // Get the value of the cookie by name
    let user = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cookieName}=`))
      ?.split('=')[1];
      let userName = user ? user.substring(0, user.indexOf('@')) : '';
    if (!user) {

      socket.emit("get id")
      socket.on('user id', (id) => {

        user = id;
        localStorage.setItem('userId', userName);
        // alert(localStorage.getItem('userId'), " is set ")
        setUserId(userName);
      });
      // Store user ID in local storage
    } else {
 
      setUserId(userName)
      socket.emit('send user id', (userName));
    }
    if(isLogin){
    // Load previous messages when the component mounts
    fetch('http://localhost:5100/chat')
      .then((response) => response.json())
      .then((data) => {

        setMessages(data);
        setLoading(false);
        console.log(data)
      }
      )
    }
    else{
      console.log("login to load chat")
    }
  
  }, [isLogin])
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  let sendcount=0
let countUpload=0
  
  const handleFileChange = (event) => {
    countUpload++
    if(fileData){
      console.log("file is ", fileData)
    }
    
  const len=event.fileList.length-1;
  const file = event.fileList[len].originFileObj;
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onloadend = () => {
    setFileData(reader.result);
    const data = reader.result;
    const filename = file.name;
    const filesize = file.size;
    console.log(filename ," is sending" , fileData, " is saved");
    if(countUpload==1 ){
      console.log(countUpload," cup")
    socket.emit("file-upload", { data, filename, filesize, userID });
    }
  };

  if (event.file.status !== "done") {
    reader.readAsDataURL(file);
  }
};

    

  socket.on('chat message', (data) => {
    console.log("new message ", data)
    setMessages([...messages, data]);
  });

  const handleMessageSubmit = () => {
    if (message.trim()) {
      socket.emit('chat message', { msg: message, user: userID });
      setMessage('');
    }
  };

  return (
    <div style={{  display:isExpand?"flex":"block", height:isExpand?"95vh":'85%'}}>

      {
       
        isExpand? <Sn isLogin={isLogin} sender={userID} />:""
      }
   
    <Row ref={chatBox} style={{...mainRow}} >
      {isLogin ? (
        <>
          <Col  ref={chatRef}  id="cht"  flex="1" style={{ ...chatStyle, borderBottom: '1px solid #f0f0f0' , backgroundColor:"white" }}>
            {loading ? (
              <div style={{ textAlign: 'center', marginTop: '50px' }}><br />Loading chats...</div>
            ) : (
              messages?.map((message, index) => {
                const isSender = message.sender === userID;
                const showAvatar = message.sender !== prevSender;
                // console.log(showAvatar)
                prevSender = message.sender;
                return (
                  <Row key={index} justify={isSender ? 'end' : 'start'}>
                  <div style={msgBox(isSender)}>
                    <Col flex="none" style={{ marginRight: isSender ? "10px" : "0px" }}>
                      {message.text? <p style={messageBoxStyle(isSender)}>{message.text}</p>:""}
                      {message.image && <img src={"http://localhost:5100/uploads/"+message.image} alt={message.sender} style={{ height:"100px",width:"100px" }} />}
                      <p style={timeStyle(isSender)}>{message.time}</p>
                    </Col>
                    <Col>
                      <h5 style={{color:"black"}}>{message.sender}</h5>
                      <img src={message.avatar} alt={message.sender} style={avatarStyle} />
                    </Col>
                  </div>
                </Row>
                
                );
              })
            )}
          </Col>
          <Col
            flex="none"
            style={{ height: '50px', display: 'flex', alignItems: 'center', borderTop: '' }}
          >
<Input
  placeholder="Enter text here ..."
  style={inputStyle}
  suffix={
    <>
       <Upload
        name="image"
        // action="http://localhost:5100/upload"
        showUploadList={false}
        onChange={handleFileChange}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      
      <SendOutlined onClick={handleMessageSubmit} style={{ fontSize: '18px' }} />
    </>
  }
  value={message}
  onChange={handleMessageChange}
  onPressEnter={handleMessageSubmit}
/> 

          </Col>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '100px' , fontWeight:"bolder", }}>{loginMsg}</div>
      )}
    </Row>
    
    </div>
  );
  
};

export default TeamChat;