import React, { lazy } from 'react';
const Dashboard = lazy(() => import('@Pages/Dashboard/Dashboard'));
const Lead =  lazy(() => import('@Pages/Dashboard/Lead'));
const Timesheet = lazy(() => import('@Pages/Timesheet/Timesheet'));
const Chat = lazy(() => import('@Pages/TeamChat/TeamChat'));
const IndivisualChat = lazy(() => import('@Pages/TeamChat/IndivisualChat'));
const ProjectInfo = lazy(() => import('@Pages/ProjectInfo/ProjectInfo'));
const Tasks = lazy(() => import('@Pages/Tasks/Tasks'));
export default [
 { path: '/', element: <Dashboard />, children: [
     { path: '', element: <Lead/>},
     { path: 'timesheet', element: <Timesheet/>},
     { path: 'chat', element: <Chat /> },
     { path: "indivisualChat", element :<IndivisualChat />},
     { path: "project", element :<ProjectInfo />},
     { path: "task", element :<Tasks />},
 ] },
];