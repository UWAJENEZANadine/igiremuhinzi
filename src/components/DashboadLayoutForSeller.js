import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./DashboadLayoutForSeller.css";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  StarOutlined,
  UploadOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  BellOutlined, 
  SearchOutlined,
} from "@ant-design/icons";

import { Input } from "antd";

const { Header, Sider, Content } = Layout;

const DashLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
      className="s-container"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: "100vh", backgroundColor:"rgb(75, 39, 3)" }}
      >
        {/* <div className="logo" /> */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEC7KOCi__hsFKdu0R1GrjfjsEDFxHfagEw&usqp=CAU"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "30px",
            margin: "30px 10px 30px 15px",
          }}
        />
        <Menu  style={{backgroundColor:"rgb(75, 39, 3)", color:"white" }} mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<StarOutlined />}  style={{backgroundColor:"rgb(75, 39, 0.77)"}}>
            <Link style={{ textDecoration: "none",  color:"white" }} to="/dash/Overview">
              Overview
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} style={{backgroundColor:"rgb(75, 39, 0.77)"}}>
            <Link style={{ textDecoration: "none", color:"white" }} to="/dash/newProduct">
              create a product
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<StarOutlined />} style={{backgroundColor:"rgb(75, 39, 0.77)"}} >
            <Link style={{ textDecoration: "none", color:"white" }} to="/dash/allProducts">
              Manage your allProducts
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ShoppingCartOutlined />} style={{backgroundColor:"rgb(75, 39, 0.77)"}} >
            <Link style={{ textDecoration: "none" , color:"white"}} to="/dash/allorder">
              {" "}
              Orders
            </Link>
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<UploadOutlined />}
            onClick={() => localStorage.removeItem("userLogedIn")} style={{backgroundColor:"rgb(75, 39, 0.77)"}} 
          >
            <Link style={{ textDecoration: "none", color:"white" }} to="/home">
              Logout
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            height: "25vh",
            backgroundColor: "rgb(75, 39, 3)",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,

            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <h1 style={{color: "white"}}>Dashboard</h1>


        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            backgroundColor: "",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashLayout;
