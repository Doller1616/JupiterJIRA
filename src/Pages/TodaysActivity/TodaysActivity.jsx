import { Row, Col } from 'antd'
import React from 'react'

export default function TodaysActivity() {

  const timeStamp = [
    {
      id: '1',
      time: '09:30AM',
    },
    {
      id: '2',
      time: '10:30AM',
    },
    {
      id: '3',
      time: '11:30AM',
    },
    {
      id: '4',
      time: '12:30PM',
    },
    {
      id: '5',
      time: '01:30PM',
    },
    {
      id: '6',
      time: '02:30PM',
    },
    {
      id: '7',
      time: '03:30PM',
    },
    {
      id: '8',
      time: '04:30PM',
    },
    {
      id: '9',
      time: '05:30PM',
    },    {
      id: '10',
      time: '06:30PM',
    },    {
      id: '11',
      time: '07:30PM',
    },    {
      id: '12',
      time: '08:30PM',
    },    {
      id: '13',
      time: '09:30PM',
    },

  ]

  return (<div style={{ height: '100vh' }}>
    <Row style={{ flexWrap: 'nowrap', height: '100%' }}>
      {
        timeStamp?.map(({ time, id }) => (
          <Col key={id} style={{ padding: '10px', borderLeft: '2px dashed lightgray', textAlign: 'center' }}>
            <div style={{ position: 'sticky', top: '0.8rem'}}>{time}</div>
          </Col>
        ))
      }
    </Row>
  </div>
  )
}
