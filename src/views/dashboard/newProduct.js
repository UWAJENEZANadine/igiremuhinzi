import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  notification,
  Select,
  DatePicker,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import agricultureProductApis from "../../services/agricultureProductApis";
import "./newProduct.css";
const NewProductPost = () => {
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("received values", values);
    agricultureProductApis.postProduct(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 201) {
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
    <Form
      name="normal_register"
      className="register-form-product"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1 style={{ fontStyle: "oblique", fontFamily: "serif" }}>
        please fill this form to post your product
        
      </h1>
      <Form.Item
        name="ProductName"
        label="Product Name:"
        rules={[
          {
            // required: true,
            message: "Please input ProductName!",
          },
        ]}
      >
        <Input placeholder="ProductName" />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            // required: true,
            message: "Please input description!",
          },
        ]}
      >
        <Input placeholder="description" />
      </Form.Item>
      <Form.Item
        name="available_quantity"
        label="available quantity"
        rules={[
          {
            // required: true,
            message: "Please  valid available_quantity!",
          },
        ]}
      >
      
        <Input placeholder="available_quantity" />
      </Form.Item>

      <Form.Item name="image" label="Image:">
       
        <Upload
          name="logo"
          action="/upload.do"
          listType="picture"
          status="uploading"
        >
          <Button
            style={{ width: "650px", borderRadius: "10px"}}
            
            icon={<UploadOutlined  />}
          >
            Click to upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="posted_date"
        label="Posted date:"
        rules={[
          {
            // required: true,
            message: "Please input your posted_date",
          },
        ]}
      >
      
      <Input placeholder="posted_date" />
      </Form.Item>
      <Form.Item
        name="expired_date"
        label="Expired date:"
        rules={[
          {
            // required: true,
            message: "Please input your expired_date",
          },
        ]}
      >
        
        <Input placeholder="expired_date" />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            // required: true,
            message: "Please input your  price",
          },
        ]}
      >
        
        <Input placeholder="price" />
      </Form.Item>
      <Form.Item
        name="seller_phone"
        label="seller Phone"
        rules={[
          {
            // required: true,
            message: "Please input your seller_phone",
          },
        ]}
      >

        <Input placeholder="seller_phone" />
      </Form.Item>

      <Button
        style={{ marginTop: "2%" }}
        className="register-form-button"
        htmlType="submit"
        onClick={() => {}}
      >
        post product
      </Button>
    </Form>
  );
};

export default NewProductPost;

// ProductName: String,
//     description: String,
//     available_quantity: String,
//     // image: [
//     //   {
//     //     type: String,
//     //   },
//     // ],
//     posted_date: String,
//     expired_date: String,
//     price: String,
//     seller_phone: String,
