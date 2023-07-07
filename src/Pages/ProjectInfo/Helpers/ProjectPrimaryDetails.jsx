import {
  PlusCircleFilled,
  PushpinFilled,
  ReconciliationFilled,
  SettingOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";
import { Col, Progress, Row, Select, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import apis from "@RootService/apis";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import constants from "@Utils/constants";
import {IF} from "@Components/Widgets/Operators";
import { useSelector } from 'react-redux';
const { Title, Text } = Typography;
const { REPORT, SUMMARY, SETTING } = constants;

const ProjectBasicInfo = styled(Row)`
      background-color: #01a9b4;
      border-radius: 10px;
      padding: 10px;
      & h5 {
        margin: 1px!important;
        color: #fff;
      };
      & .ant-select-selector {
        background-color: #01a9b4!important;
        border: 0!important;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      };
      & .ant-select-selection-placeholder {
        color: #fff
      }
`;

const TagsButtonsCol = styled(Col)`
    text-align: center;
    border-radius: 20px;
    margin-top: 10px;
    & .icon-column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

`

const IconWrap = styled.div`
      background-color: #01A9B4;
      border-radius: 10px;
      padding: 10px;
      border: 0;
      & span {
        font-size: 2rem;
        color: rgb(255, 255, 255)
      }
`;

function ProjectPrimaryDetails({ onClickEvent, dashView }) {
  const [project, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [projectId, setProjectId] = useState(null);
  const projectInfo = useSelector((state) => state.projectinfo);
  const navigate = useNavigate();
  const getProjectById = async () => {
    try {
      console.log("FE PROJ ID", projectId);
      const api = await fetch(`http://localhost:5100/getproject/${projectId}`);
      const data = await api.json();
      // console.log("Selected Project Data",data)
      setSelectedProject(data);
    } catch (err) {
      console.log("Error while fetching the data", err);
    }
  };

  // const getAllProjects = async () => {
  //   try {
  //     const api = await fetch("http://localhost:5100/getproject");
  //     // console.log("@@@@@@@@@", api)
  //     const data = await api.json();
  //     // console.log("Project Data",data)
  //     setProjects(data);
  //   } catch (err) {
  //     console.log("Error", err);
  //   }
  // };

  useEffect(() => {
    // getAllProjects();
  }, []);

  // useEffect(() => {
  //   getProjectById();
  // }, [projectId]);

  function handleChange(value) {
    project.forEach((pr) => {
      if (value === pr.project_name) {
        setProjectId(pr.project_id);
        // console.log("######", projectId)
      }
    });
  }

  const handleExpand = () => {
    // 👇️ navigate to /
    navigate("project");
  };
  console.log("DDDDDDD", projectInfo)
  return (
    <>
      <Row align="middle" style={{position: 'relative'}}>
        <IF condition={dashView}>
        <ArrowsAltOutlined
          style={{ fontSize: "18px", position:'absolute', top: 0, right: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            handleExpand();
          }}
        />
        </IF>
        {/* Project Details */}
        <Col lg={15} md={15} sm={18} xs={18}>
          <ProjectBasicInfo>
            <Col md={11} sm={11}>
              <Select style={{ width: '100%' }} placeholder="Projects" onChange={handleChange}
                onClick={(e) => e.stopPropagation()}
              >
                {project.map((proj) => (
                  <>
                    <Select.Option
                      key={proj.project_id}
                      value={proj.project_name}
                    >
                      {proj.project_name}
                    </Select.Option>
                  </>
                ))}
              </Select>
              <Title level={5}> Team Size: {selectedProject.team_size} </Title>
              <Title level={5}> Contact No: {selectedProject.client_Contact} </Title>
            </Col>
            {/* <Divider type="vertical" style={{ height: '5.9em', backgroundColor: 'lightgray' }} /> */}
            <Col md={12} sm={12} offset={1}>
              <Title level={5}> Email: {selectedProject.client_email} </Title>
              <Title level={5}> Started: {selectedProject.pro_start_date} </Title>
              <Title level={5}> Ended: {selectedProject.pro_end_date} </Title>
            </Col>
          </ProjectBasicInfo>
        </Col>

        {/* Progress Bar */}
        <Col lg={3} md={3} sm={6} xs={6} style={{ textAlign: "center" }}>
          <Progress type="circle" strokeColor="#01A9B4" percent={50} size={90} />
        </Col>
        {/* Report, Summary, Settings */}
        <TagsButtonsCol lg={6} md={6} sm={24} xs={24}>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8} className="icon-column">
              <IconWrap onClick={onClickEvent(REPORT)}>
                <ReconciliationFilled />
              </IconWrap>
              <Text type="secondary">Report</Text>
            </Col>

            <Col lg={8} md={8} sm={8} xs={8} className="icon-column">
              <IconWrap onClick={onClickEvent(SUMMARY)}>
                <PushpinFilled />
              </IconWrap>
              <Text type="secondary">Summary</Text>
            </Col>

            <Col lg={8} md={8} sm={8} xs={8} className="icon-column">
              <IconWrap onClick={onClickEvent(SETTING)}>
                <SettingOutlined />
              </IconWrap>
              <Text type="secondary">Setting</Text>
            </Col>
          </Row>
        </TagsButtonsCol>

        {/* <Col lg={3} md={3} sm={8} hidden xs={8} style={{ textAlign: "right" }}>
          <PlusCircleFilled
            style={{ fontSize: "40px", color: "#01A9B4" }}
            onClick={onClickReport}
          />
        </Col> */}
      </Row>
    </>
  );
};

export default React.memo(ProjectPrimaryDetails)
