import React, { useEffect, useState } from 'react';
import { EditOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Row, Col, Switch, Tooltip, Button, Select, Input, theme, Typography } from 'antd';
import { toggleTheme } from '@Layout/theme'
import styled from 'styled-components';
const { useToken } = theme;
const { Text } = Typography;

const RowContainer = styled(Row)`
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; 
        background-color: ${props => props?.color};
        border-radius: 10px;
        padding: 0.8rem;
        margin: 0 10px 0.5rem 10px;
        & .right-side-actions {
           display: flex;
           justify-content: space-between;
           & span {
            font-size: 22px;
            color: rgb(153, 153, 153);
           }
        }
`;

import { postActions } from '@Pages/Test/redux/reducer';



const Header = () => {

  const [values, setValue] = useState({
    email: "",
    password: ""
  })
  const [isLogin, setLogin] = useState(false)
  const [userName, setName] = useState("")
  const [isSelected, setSel] = useState(false)
  const [loginMsg, setLM] = useState("LOGIN")
  const dispatch = useDispatch();
  const { token } = useToken();


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLM("LOGGINGG......")
    const response = await fetch('http://localhost:5100/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password
      })
    });

    if (response.ok) {

      const data = await response.json()
      // console.log(data)
      // Setting a cookie in the client-side JavaScript code
      document.cookie = `user=${data.user}; SameSite=Lax; path=/`;
      window.location.href = "/"
    }

    else {
      // handle failed login
      alert("invalid login info")
      setLM("LOGIN")
    }
  }
  // handle select email = 
  const handleSelect = (event) => {
    console.log(values)
    setValue({ ...values, email: event.target.value })
    setSel(true)
  };

  const handlePassword = (event) => {
    setValue({ ...values, password: event.target.value })
    console.log(values)
  };
  const loginForm = <form>

    {/* <Select
      defaultValue="Select a Email To Login"
      style={{ width: 220}}
      onChange={handleSelect}
      options={[
        { value: 'deepak@kloudrac.com', label: 'deepak@kloudrac.com' },
     
        { value: 'parag@kloudrac.com', label: 'parag@kloudrac.com' },
        { value: 'abhishek@kloudrac.com', label: 'Abhishek@kloudrac.com' },
     
      ]}
    /> */}
    <select onChange={handleSelect} style={{
      backgroundColor: "white", color: "black",
      height: "40px", width: "220px"
    }}>
      <option value="deepak@kloudrac.com">Deepak@kloudrac.com</option>
      <option value="parag@kloudrac.com">Parag@kloudrac.com</option>
      <option value="rahul@kloudrac.com">Rahul@kloudrac.com</option>
      <option value="sanju@kloudrac.com">Sanju@kloudrac.com</option>
      <option value="abhishek@kloudrac.com">Abhishek@kloudrac.com</option>
    </select>
    <Input onChange={handlePassword} style={{ width: 220, display: isSelected ? "block" : "none" }} placeholder="Password" value={values.password} />
    <Button style={{ width: 220 }} type="primary" onClick={handleSubmit}>{loginMsg}</Button>
  </form>;
  //    const theme = useSelector(({theme}) => );
  const onChange = () => {
    dispatch(toggleTheme());
  }
  // check first time if user logged in 
  useEffect(() => {
    const cookieName = 'user';
    // Get the value of the cookie by name
    const user = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cookieName}=`))
      ?.split('=')[1];
    let userName = user ? user.substring(0, user.indexOf('@')) : '';

    fetch('http://localhost:5100/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    })
      .then(response => {
        if (response.ok) {
          console.log("authhhhhhh")
          setLogin(true)
          setName(userName)
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])

  return (
    <RowContainer justify='space-between' align='middle' color={token.colorBgContainer} >
      <Col lg={3} md={4} sm={6} xs={8}>
        <img src="/images/logo-img.jpg" height={35} width={35} alt='logo' />
      </Col>
      <Col lg={3} md={4} sm={6} xs={8}>
        <div className='right-side-actions' >
          <Switch defaultChecked size='small' onChange={onChange} title='Theme' />
          <EditOutlined />
          <BellOutlined />
          
          {
            isLogin ? <Text>{userName}</Text> :
              <Tooltip placement="bottom" title={loginForm}>
                <UserOutlined title='login'/>
              </Tooltip>
          }
        </div>
      </Col>

    </RowContainer>
  );
}
export default Header;

