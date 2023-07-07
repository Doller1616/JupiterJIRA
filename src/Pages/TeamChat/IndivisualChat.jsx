import { useState, useRef, useEffect } from 'react';
import { Input } from 'antd';
import { SendOutlined , FileOutlined, UploadOutlined} from '@ant-design/icons';
import { Col, Row, Upload,Image, Button } from 'antd';
import io from 'socket.io-client';
import Sn from './SideChatNav';
import {inputStyle, messageBoxStyle, chatStyle, mainRow, timeStyle,msgBox, avatarStyle} from "./TeamChatStyle";
const socket = io('http://localhost:3001');
import "./TeamChat.css"
import { configConsumerProps } from 'antd/es/config-provider';

const IndivisualChat = (expand) => {
//   console.log(expand.expand )
      const params = new URLSearchParams(window.location.search);
const reciever = params.get("user");
const sender = params.get("me").substring(0, params.get("me").indexOf('@'))

// const [chats, setCha/ts]=useState([])
// const [reciever, setReciver]=useState(userName)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userID, setUserId] = useState(sender);
  const inputRef = useRef(null);
  const chatRef = useRef(null);
  const chatBox = useRef(null);
  const [isSend, setSend] = useState(true)
  const [loading, setLoading] = useState(false);
  const [loginMsg, setMsg]=useState("Please login to see the chat")
  const [isLogin, setLogin]=useState(false);
  const [isExpand, setExpand]= useState(false)
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [fileData, setFileData] = useState('');
  let prevSender = null;
  const getScrollPosition = () => {
    if (chatRef.current?.scrollHeight > chatRef.current?.clientHeight) {
      return chatRef.current.scrollTop;
    } else {
      return 0;
    }
  };
  useEffect(() => {
    // // Move the chat box scrollbar to the bottom when a new message is received
    if(isLogin){

    chatRef.current.scrollTop = 500;
console.log(chatRef.current.scrollTop," heightttt")
    }
  }, [messages]);
  useEffect(() => {

      socket.emit('sender', (sender));
    socket.emit("load chat indivisual",(sender, reciever))
    socket.on("chat history indivisual", (chat) => {
        console.log(reciever,"rcvr")
        // const receiver = "receiver"; // replace with the actual receiver
        const filteredChat = chat.filter((message) => message.to === reciever);
        setMessages(filteredChat);
        console.log("Filtered chat:", filteredChat);
      });
  }, [isLogin])
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
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
    socket.emit("file-upload-indivisual", { data, filename, filesize, userID , to:reciever});
    }
  };

  if (event.file.status !== "done") {
    reader.readAsDataURL(file);
  }
};
  socket.on('indivisual chat message', (data) => {
    setMessages([...messages, data]);
    console.log(messages, "00000000000000")
  });

  const handleMessageSubmit = () => {
    if (message.trim()) {
      socket.emit('indivisual chat message', { msg: message, user: sender , to:reciever});
      setMessage('');
    }
  };

  return (
    <div style={{display:"flex"}}>

     <Sn isLogin={true}/>
   
    <Row ref={chatBox} style={{...mainRow, height:"95vh"}} >
      {true ? (
        <>
          <Col ref={chatRef} id="cht"  flex="1" style={{ ...chatStyle, borderBottom: '1px solid #f0f0f0' , backgroundColor:"white" }}>
            {loading ? (
              <div style={{ textAlign: 'center', marginTop: '50px' }}><br />Loading chats...</div>
            ) : (
              messages?.map((message, index) => {
                const toMsg= message.to==reciever
                console.log("to", reciever , toMsg)
                const isSender = message.user === sender;
                const showAvatar = message.user !== prevSender;
                // console.log(showAvatar)
                prevSender = message.sender;
                return (
                  
                  <Row key={index} justify={isSender ? 'end' : 'start'}>
                   
                        <div style={msgBox(isSender)}>
                        <Col flex="none" style={{ marginRight: isSender ? "10px" : "0px" }}>
                          {message.msg? <p style={messageBoxStyle(isSender)}>{message.msg}</p>:""}
                          {message.image && <img src={"http://localhost:5100/uploads/"+message.image} alt={message.sender} style={{ height:"100px",width:"100px" }} />}
                          {
                            // console.log("reachrd22", messages)
                        }
                          <p style={timeStyle(isSender)}>{message.time}</p>
                        </Col>
                        <Col>
                          <h5 style={{color:"black"}}>{message.user}</h5>
                          <img src={message.avatar} alt={message.sender} style={avatarStyle} />
                        </Col>
                      </div>
                   
                
                </Row>
                
                );
              })
              
            )}
            <p>No Chats yet</p>
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

export default IndivisualChat;