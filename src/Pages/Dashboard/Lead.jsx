import React from 'react';
import ProjectInfo from '@Pages/ProjectInfo/ProjectInfo';
import TeamChat from "@Pages/TeamChat/TeamChat"
import Tasks from "@Pages/Tasks/Tasks";
import TaskDashHeader from "@Pages/Tasks/Helpers/TaskDashHeader";
import TodaysActivity from '@Pages/TodaysActivity/TodaysActivity';
import { ArrowsAltOutlined, HomeOutlined } from '@ant-design/icons';
import Timesheet from '@Pages/Timesheet/Timesheet';
import ProjectStatus from '@Pages/ProjectStatus/ProjectStatus'; 
import { NavLink } from 'react-router-dom';
import BreadcrumbComponent from '@Components/Breadcrumb/Breadcrumb';
import Dynaminboard from '@Components/Cardboard/Dynamicboard/Dynaminboard';

export default function Lead() {

    const cardList = [
        {
            title: "Today's Activity",
            headRightHTML: <ArrowsAltOutlined style={{ fontSize: '20px' }} />,
            cardStyle: {},
            component: <TodaysActivity />
        },
        {
            title: "Team Chat",
            headRightHTML: <NavLink to="chat"><ArrowsAltOutlined style={{ fontSize: '20px', cursor: "pointer" }} /></NavLink>,
            cardStyle: {},
            component: <TeamChat />
        },
        {
            title: "Timesheet",
            headRightHTML: <NavLink to="timesheet"><ArrowsAltOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
            </NavLink>,
            cardStyle: { padding: "16px 8px" },
            component: <Timesheet scroll={{ y: '100%' }} dashView={false} TableHeader={false} tableCard={false} />
        },

        {
            title: "Tasks",
            headRightHTML: <NavLink to="task"><TaskDashHeader /></NavLink>,
            //cardStyle: {},
            //  <ArrowsAltOutlined style={{ fontSize: '20px' }} />
            component: <Tasks />


        },
        {
            title: "Project Status",
            headRightHTML: <ArrowsAltOutlined style={{ fontSize: '20px' }} />,
            // cardStyle: {},
            component: <center> <ProjectStatus /> </center>
        },


    ]


    return (<>
        <BreadcrumbComponent />
        <ProjectInfo dashView />
        <Dynaminboard cardList={cardList} />
    </>)
}
