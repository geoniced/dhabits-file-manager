import React from 'react'
import {Layout} from "antd";
const {Header, Content} = Layout;

const LayoutComponent = ({children}) => {
  return (
    <Layout>
      <Header>
        <h1>Тестовое задание на Обучение JavаScript dev "Цифровые привычки"</h1>
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  );
};

export default LayoutComponent;
