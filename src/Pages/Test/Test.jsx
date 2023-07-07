import { Button, Card } from 'antd';
import React from 'react'

export default function Test(props) {
  const handleClick = () => {
    console.log('Click')
    props?.fetchPosts();  // API Hit
  }
  return (
      <Button onClick={handleClick} type='primary'> Fetch APIs </Button>
  )
}



