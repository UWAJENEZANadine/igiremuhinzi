import React, { useState } from "react";
import HomeLayout from "../components/homeLayout";
import "antd/dist/antd.css";
import "../css/SignUp.css";
import {
  Form,
  Input,
  Button,
  notification,
  Select,
} from "antd";
import agricultureProductApis from "../services/agricultureProductApis";

import { UserOutlined, PhoneOutlined, InboxOutlined,LockOutlined,EnvironmentOutlined   } from "@ant-design/icons";
const SignUp = () => {
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("received values", values);
    agricultureProductApis.createAccount(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 200) {
        return notification.success({
          message: "your account has been created",
          
        });
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
  };

  return (
    <HomeLayout>
      <div className="signUp-page"style={{padding:"50px"}}> 
        <div className="signUp-container" >
          <h1>CREATE ACCOUNT</h1><br/><br/>
          <Form
            name="normal_register"
            className="register-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your first Name!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="firstName"
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your last Name!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="lastName"
              />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please  valid phone!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                placeholder="phone"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<InboxOutlined  className="site-form-item-icon" />}
                placeholder="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder=" password"
              />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<EnvironmentOutlined className="site-form-item-icon" />}
                placeholder="address"
              />
            </Form.Item>
            <Form.Item
              name=" gender"
              // label="Gender"
              rules={[{ required: true }]}
            >
              <Select placeholder="select your gender">
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
                <Option value="not-say">not-say</Option>
              </Select>
            </Form.Item>
            <Form.Item name="role" rules={[{ required: true }]}>
              <Select placeholder="select your role">
                {/* <Option value="admin">admin</Option> */}
                <Option value="buyer">buyer</Option>
                <Option value="seller">seller</Option>
              </Select>
            </Form.Item>

            <Button className="register-form-button" htmlType="submit"  onClick={() => localStorage.removeItem("userLogedIn")} >
              createAccount
              
            </Button>
          </Form>
          </div>
      </div>
    </HomeLayout>
  );
};


export default SignUp;

