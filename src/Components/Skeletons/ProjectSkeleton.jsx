import { Card, Col, Row, Skeleton } from "antd";


export default function ProjectSkeleton ({isLoading, children}) {
  return (
      isLoading ? <SkeletonView /> : children
  );
};

const SkeletonView = () => ( <Card>
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{alignItems:'center'}}>
    <Col lg={20}  md={18} sm={24} xs={24}>
    <Skeleton.Input active paragraph={{rows: 1}} size="large" style={{width: '250%', maxWidth: '300%'}} />
    </Col>
    <Col lg={4} md={6} sm={24} xs={24}>
  <Skeleton.Avatar active size={64} shape='circle' />
  </Col>
  </Row>
  
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ alignItems: 'center' }}>
  <Col  xs={24} md={18} lg={20}>
  <Skeleton paragraph={{ rows: 4 }}/>
  </Col>
  </Row>

</Card>)
