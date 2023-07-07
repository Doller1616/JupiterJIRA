import React from 'react'
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
   background-color: ${props => props?.bgColor};
   padding: 5px 2px
`;

export default function Layout({ children }) {
    const { isDark, dark, light } = useSelector((state) => state.theme);
    const theme = isDark ? dark : light
    return (
        <ConfigProvider theme={theme}>
            <Container bgColor={theme.rootBgColor} >
                {children}
            </Container>
        </ConfigProvider>
    )
}
