import { ArrowsAltOutlined, FundFilled, PlusCircleFilled } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"

const Container = styled.div`
        display: flex; 
        justify-content: flex-end;
        gap: 10px;
        font-size: 35px; 
        width: 100%;
        cursor: pointer;
        & span {
          font-size: 20px;
          color: ${props => props.primary ? '#33ccff' : '#00708E'};
        };
`;


function TaskDashHeader() {

  const navigate = useNavigate();

  const navigateTask = () => {
    // 👇️ navigate to /
    navigate('/task');
  

  };

  const navigateChart = () => {
    // 👇️ navigate to /
    navigate('/taskchart')

  };

  return (
    <Container primary>
      <FundFilled onClick={navigateChart} />
      <PlusCircleFilled />
      <ArrowsAltOutlined onClick={navigateTask}/>
    </Container>
  )
}
export default TaskDashHeader;
