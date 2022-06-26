import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import TemperatureConversion from './pages/TemperatureConversion';

import './App.css';

const { Header, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout style={{ height: '100vh' }}>
        <Header className="header" />
        <Content style={{ padding: '50px' }}>
          <TemperatureConversion />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
