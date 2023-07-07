import React from 'react'
import { Col, Row } from 'antd'
// import user_image from ''; 
import { PhoneTwoTone, ContactsTwoTone, MailTwoTone } from '@ant-design/icons'

export const About = () => {
  return (
    <div style={{ overflowWrap: 'anywhere' }}>
      <Row>
        <Col >

          <img src='./images/user_image.jpg' alt="No image found" width={80} />

        </Col>

        <Col style={{ marginLeft: 20 }}>
          <b>Radio Mirchi</b><br />
          <span style={{ color: "#7f8c8d" }}>Ryan Ogden</span>
        </Col>
      </Row>

      <Row>
        <p style={{ color: "#7f8c8d" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto eius ipsum quaerat natus delectus ad sit. Dolores magni sequi optio corrupti illum, necessitatibus molestiae maxime laboriosam unde ducimus fugiat! Minus!</p>
      </Row>

      <Row >
        <Col lg={6} md={12} sm={12} xs={24} style={{ display: 'flex'}}>
          <PhoneTwoTone rotate={90} style={{ fontSize: '2rem' }} />
          <p style={{ marginLeft: 10 }}> +91 975-0174-232</p>
        </Col>

        <Col lg={6} md={12} sm={12} xs={24} style={{ display: 'flex' }}>
          <ContactsTwoTone style={{ fontSize: '2rem' }} />
          <p style={{ marginLeft: 20 }}> +91 975-0174-232</p>
        </Col>


        <Col lg={6} md={12} sm={12} xs={24} style={{ display: 'flex' }}>
          <MailTwoTone style={{ fontSize: '2rem' }} />
          <p style={{ marginLeft: 20, marginTop:15 }}> ryanogden@gmail.com</p>
        </Col>

        <Col lg={6} md={12} sm={12} xs={24} style={{ display: 'flex' }}>
          <MailTwoTone style={{ fontSize: '2rem'}} />
          <p style={{ marginLeft: 20, marginTop: 15 }}>West Fork Street,EASTON 02334</p>
        </Col>

      </Row >

    </div>
  )
}


export const Contact = () => {
  return (
    <div>
      <p>My Contact no is ........</p>
    </div>
  )
};


export const Services = () => {
  return (
    <div>
      <p>We offered these Services</p>
    </div>
  )
}