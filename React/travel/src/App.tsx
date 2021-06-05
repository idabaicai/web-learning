import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header>
          <img src={logo} alt="" />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
