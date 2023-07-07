import { Table, Popconfirm, Row, Col, Skeleton, Button, Card, Input, Space } from "antd";
import { CloseCircleOutlined, DownOutlined, RightCircleOutlined, SettingOutlined } from '@ant-design/icons'
import { useCallback, useEffect, useState } from "react";
import { getTimesheetList } from "./services/services";
import { useDispatch, useSelector } from 'react-redux';
import { timesheetActions } from './redux/reducer';
import PropTypes from 'prop-types';
import { IF } from "@Components/Widgets/Operators";
import BreadcrumbComponent from "@Components/Breadcrumb/Breadcrumb";
const { Search } = Input
const dataSource = [
  {
    key: "1",
    name: "Shashank",
    task: 32,
    Time: "10 Downing Streetfghgljhgcghhojhv  gff  vghjgfdgf hfdtf vhtfghbfg  hgf",
  },
  {
    key: '2',
    name: 'Deepak',
    task: 42,
    Time: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Rahul',
    task: 42,
    Time: '10 Downing Street',
  },

];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Task",
    dataIndex: "task",
    key: "task",
  },
  {
    title: "Time",
    dataIndex: "Time",
    key: "Time",
  },
  {
    title: "Action",
    key: "action",
    align: "center",
    render: (text, record) => (
      <Row gutter={12}>
        <Col lg={12} md={12} sm={12} xs={24}>
          <Popconfirm title="Sure to Accept?">
            {/* <RightCircleOutlined style={{ fontSize: '20px', color: '#01a9b4' }} title="Approve"/> */}
            <Button type="primary" size="small" title="Approve">Approve</Button>
          </Popconfirm>
        </Col>
        <Col span={3} lg={12} md={12} sm={12} xs={24}>
          <Popconfirm title="Sure to Reject?">
            {/* <CloseCircleOutlined  style={{ fontSize: '20px', color: '#ad3346' }} title="Reject" />  */}
            <Button type="primary" danger size="small" title="Reject">Reject</Button>
          </Popconfirm>
        </Col>
      </Row>
    ),
  },
];

const defaultProps = {
  scroll: { y: '200' },
  dashView: true,
  TableHeader: true,
  tableCard: true,
}


const Timesheet = (props) => {
  const { dashView } = props || {};
  const dispatch = useDispatch();
  const { data = [], loading, error } = useSelector((state) => state?.timesheet || {});
  useEffect(() => {
    dispatch(timesheetActions.fetchTimesheet({ pageno: 1, perPage: 10 }))
  }, [])

  return (
    <>
      <IF condition={dashView}>
        <BreadcrumbComponent items={[{ href: '', title: 'Timesheet' }]} />
        <h1 style={{ color: 'red' }}> Timesheet</h1>
        {/* Filters */}
        <Card style={{ height: '80px' }}>
          <Space style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button type="primary" >filter1 <DownOutlined /> </Button>
            <Button type="primary" > filter1 <DownOutlined /></Button>
            <Button type="primary" >filter1<DownOutlined /></Button>
            <Button type="primary"  >filter1<DownOutlined /></Button>
            <Search
              placeholder="input search text"
              // onSearch={onSearch}
              style={{
                width: 200,
              }}
            />

            <Button type="primary" >save</Button>
            <Button type="primary" title="setting" > <SettingOutlined />
              setting</Button>
          </Space>
        </Card>
        {/* Card Views */}
        <Row gutter={20}>
          <Col span={8}>
            <Card>
              Attendence status

              <Card  >

                <Row>
                  <Col span={8}>userProfile</Col>
                  <Col span={8}>avg houre per day</Col>
                  <Col span={8}>ontime</Col>

                </Row>
              </Card>

            </Card>

          </Col>
          <Col span={8}>
            <Card title='Card Title' bordered={false}>
              card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Card Title' bordered={false} >
              card content
            </Card>
          </Col>
        </Row>
      </IF>
    
    {/* TImesheet Table */}
      <Table
        size="small"
        bordered
        dataSource={dataSource}
        columns={columns}
        // showHeader="false"
        responsive={true}
        expandable
        scroll={props?.scroll}
        rowSelection={props.dashView ? 'checkbox' : ''}
      />


    </>
  );
};

Timesheet.defaultProps = defaultProps
Timesheet.propTypes = {
  scroll: PropTypes.object,
  dashView: PropTypes.bool
}
export default Timesheet;
