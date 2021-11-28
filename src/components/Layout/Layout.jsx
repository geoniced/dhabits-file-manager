import React from 'react'
import {Layout} from "antd";
import styled from 'styled-components';
const {Header, Content} = Layout;

const StyledHeading = styled.h1`
  color: #fff;
`;

const LayoutComponent = ({children}) => {
  return (
    <Layout>
      <Header>
        <StyledHeading>Тестовое задание на Обучение JavаScript dev "Цифровые привычки"</StyledHeading>
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  );
};

export default LayoutComponent;
