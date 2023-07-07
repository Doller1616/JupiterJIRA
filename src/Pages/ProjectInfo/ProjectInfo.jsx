import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, theme } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
const { Panel } = Collapse;
import ProjectPrimaryDetails from './Helpers/ProjectPrimaryDetails';
import ReportTab from './Helpers/ReportTab/ReportTab';
import SettingTab from './Helpers/SettingTab/SettingTab';
import SummaryTab from './Helpers/SummaryTab/SummaryTab';
import ProjectSkeleton from '@Components/Skeletons/ProjectSkeleton';
import constants from '@Utils/constants';
const { REPORT, SUMMARY, SETTING } = constants;
import styled from 'styled-components';
import BreadcrumbComponent from '@Components/Breadcrumb/Breadcrumb';
import { IF } from '@Components/Widgets/Operators';
import { projectInfoActions } from './redux/reducer';
const { useToken } = theme;

const Conatiner = styled.div`
    padding: 0 10px;
    & .ant-collapse, .ant-collapse-item {
      border: 0
    }
`;

const defaultProps = {
  dashView: false,
}

function ProjectInfo(props) {
  const { dashView } = props || {}
  const { token } = useToken();
  // const [loading, setLoading] = useState(false);
  const [tabName, setTabName] = useState(REPORT);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.projectinfo || {});

  // handleReport = () => () => {}
  const handleReport = (tab) =>{
      const foo2 = (e) => {
        console.log('@@@@@@', tab, e);
        // setTabName(this)
        // e.stopPropagation();
      }
      return foo2;
  } 

  useEffect(() => {
    dispatch(projectInfoActions.fetchAllProjects({ pageno: 1, perPage: 10 }));
  }, []);
  

  // setTimeout(() => {
  //   setLoading(false);
  // }, 2000);

  // const handleChange=(e)=>{
  //   setActiveKey(e);
  // }

  const tabInventory = {
    [REPORT]: <ReportTab />,
    [SUMMARY]: <SummaryTab />,
    [SETTING]: <SettingTab />
  };

  return (<>
    <IF condition={!dashView}>
      <BreadcrumbComponent items={[{ href: '', title: 'Project Informarion' }]} />
    </IF>
    <Conatiner bgColor={token.colorBgContainer}>
      <ProjectSkeleton isLoading={loading}>
        <Collapse defaultActiveKey={['1']} collapsible='disabled'>
          <Panel
            key="1"
            showArrow={false}
            style={{ backgroundColor: token.colorBgContainer, borderRadius: '8px' }}
            header={<ProjectPrimaryDetails onClickEvent={handleReport} dashView={dashView} />} >
            {/* ----------------------------------------- */}
            {tabInventory[tabName]}
            {/* ----------------------------------------- */}
          </Panel>
        </Collapse>
      </ProjectSkeleton>
    </Conatiner>
  </>
  )
}

ProjectInfo.defaultProps = defaultProps;
ProjectInfo.propsTypes = {
  dashView: PropTypes.bool
}
export default ProjectInfo

