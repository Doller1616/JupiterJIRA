import React from 'react';
import PropTypes from 'prop-types'
import { Breadcrumb, Typography } from 'antd';
import { Box } from '@Widgets/Bases';
import { HomeOutlined } from '@ant-design/icons';
const { Title } = Typography;

const defaultProps = {
    items: [
        // { path: '/', title: 'Dashoards'}
    ]
}

function BreadcrumbComponent(props) {
    const { items=[] } = props || {};

    const CombineTitleAndIcon = () => (
        <Box py={5} spacing={5}>
            <HomeOutlined style={{ fontSize: '18px', color: '#999999' }} />
            <Title level={5} style={{ margin: 0, fontWeight: '300px' }}>Dashoards</Title>
        </Box>
    );

    const defaultItems = [
        { href: '/lead', title: <CombineTitleAndIcon />}
    ]


    const collectBreadcrumbs = items?.reduce((acc, v) => {
        return [...acc, v]
    }, defaultItems)

    return (
        <Breadcrumb style={{ margin: '20px 15px' }} items={collectBreadcrumbs}/>
    )
}

BreadcrumbComponent.defaultProps = defaultProps;
BreadcrumbComponent.propTypes = {
    items: PropTypes.array
}
export default BreadcrumbComponent