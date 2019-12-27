
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './Style.css';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div />
      <Menu
        theme="black"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Schedule</Menu.Item>
        <Menu.Item key="2">Day 1</Menu.Item>
        <Menu.Item key="3">Day 2</Menu.Item>
        <Menu.Item key="4">Day 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Your choice</Breadcrumb.Item>
        <Breadcrumb.Item>Trip-Details</Breadcrumb.Item>
      </Breadcrumb>
      <div>
      <Layout>
      <Sider >Map</Sider>
      <Layout>
        <Header><h2>Day1 Plan </h2>
</Header>
        <Content>
          <h4>09:00 - 09:30 Take Uber to the Metro</h4>
          <h4>09:45 - 12:00 Visit Metro</h4>
          <h4>Lunch time 🍱</h4>
          <h4>14:30 - 17:30 Shopping at Fifth Ave 🛍️</h4>
          <h4>17:30 - 18:00 Back to hotel by Uber</h4>
        </Content>
        <Content>
          <h4>21:30 - 23:30 Night Clubs</h4>
        </Content>
      </Layout>
    </Layout>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Flag Camp Short-Trip planner ©2019 </Footer>
  </Layout>,
  document.getElementById('container'),
);
          
