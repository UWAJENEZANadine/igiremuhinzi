import React, {useState} from "react";
import HomeLayout from "../components/homeLayout";
import "antd/dist/antd.css";
import "../css/signin.css";
import agricultureProductApis from "../services/agricultureProductApis";
import { Form, Input, Button, Checkbox, Modal, notification } from "antd";
import {
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const onFinish = (values) => {


    
    console.log(values)
    agricultureProductApis.signinAccount(values).then((res)=>{
      if(!res){
        return notification.error({
          message:"You need to have account before login",
        });
      }
      if(res.status===200){
        console.log(res.data.data);
        if(res.data.data.role==="admin"){
          localStorage.setItem("userLogedIn", true);
          localStorage.setItem("x-auth-token", res.data.token);
          navigate("/dash/admin");
        }
        else if(res.data.data.role==="seller"){

    localStorage.setItem("userLogedIn", true);
    localStorage.setItem("x-auth-token", res.data.token);
    navigate("/dash");
        } 
        
        if(res.data.data.role==="buyer"){

          localStorage.setItem("userLogedIn", true);
          localStorage.setItem("x-auth-token", res.data.token);
      
          navigate("/singleproduct");
              }  
      }

      
    }

    )

  };
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  return (
    <HomeLayout>
      <div className="signUp-page">
       <Modal
        className="register-model-form"
        visible={visible}
        width="50%"
        onOk={() => setVisible(true)}
        onCancel={() => setVisible(false)}
        closable="true"
      >
      <div className="signin-container">
        <h1>Log in here please!</h1>
        <Form name="normal_login" className="login-form"  initialValues={{remember: true,}} onFinish={onFinish} >
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
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Button htmlType="submit"  className="button2" onClick={() => {}}>
           Login
          </Button>
          Or <a href="/SignUp">register now!</a>
        </Form>
       
      </div>
      </Modal>
      </div>
    </HomeLayout>
  );
};

export default Signin;
