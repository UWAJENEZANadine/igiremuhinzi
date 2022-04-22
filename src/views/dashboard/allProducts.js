import React, { useState, useEffect } from "react";
import { Space, Table, Skeleton, notification } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import "./allProducts.css";
// import allAvailableProducts from "../../assets/constants/product.json"
import agricultureProductApis from "../../services/agricultureProductApis";
import { Spin, Drawer, Button, Card, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Form, Input, Select, DatePicker, Upload } from "antd";
import { Popconfirm, message } from "antd";

const AllProduct = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const [user, setUser] = useState({});

  const [getAllProducts, setGetAllProducts] = useState([]);

  useEffect(() => {
    agricultureProductApis.getAllProducts().then((res) => {
      console.log(res);
      setGetAllProducts(res.data.data);
    });
  }, []);

  function confirm(e) {
    console.log(e);
    agricultureProductApis.deleteProduct(e._id).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 200) {
        message.success("product deleted");
        window.location.reload();
      } else {
        return notification.error({
          message: !res.data.error ? res.data.message : res.data.error,
        });
      }
    });
  }

    function confirmm(e) {
      console.log(e);
      agricultureProductApis.updateProduct(e._id).then((res) => {
        if (!res) {
          return notification.error({ message: "server is down" });
        }
        if (res.status === 200) {
          message.success("product updated");
          window.location.reload();
        } else {
          return notification.error({
            message: !res.data.error ? res.data.message : res.data.error,
          });
        }
      });
    }
  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

  const columns = [
    {
      title: "PRODUCT NAME",
      dataIndex: "ProductName",
      key: "ProductName",
    },
    {
      title: "AVAILABLE QUANTITY",
      dataIndex: "available_quantity",
      key: "available_quantity",
    },
    {
      title: "POSTED DATE",
      dataIndex: "posted_date",
      key: "posted_date",
    },
    {
      title: "EXPIRATION DATE",
      dataIndex: "expired_date",
      key: "expired_date",
    },
    // {

    //     title: "Phone",
    //     dataIndex: "seller_phone",
    //     key: "seller_phone",
    // },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Actions",
      key: " actions",
      fixed: "right",
      width: 100,
      render: (text, record) => (
        <Space size="middle">
          <a
            href="#"
            style={{ color: "green" }}
            onClick={() => {
              setUser(record);
              setIsDrawerVisible(true);
              
            }}
          >
        
            <EyeOutlined />{" "}
          </a>

          <a href="">
            <Popconfirm
              title="Are you sure to delete this product?"
              onConfirm={() => confirm(record)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <a href="#" style={{ color: "red" }}>
                <DeleteOutlined />
              </a>
            </Popconfirm>
          </a>

          <a
            href="#"
            onClick={() => {
              setUser(record);
              setVisible(true);
              
            }}
          >
           <EditOutlined />
           
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      {getAllProducts.length == 0 ? (
        <div style={{ marginLeft: "50%", paddingTop: "10%" }}>
          <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <Table
          // className="bg-dark"
          columns={columns}
          dataSource={getAllProducts}
        />
      )}

      <Drawer
        className="drawer-container"
        placement="top"
        onClose={() => setIsDrawerVisible(false)}
        visible={isDrawerVisible}
        height="top"
        width="500"
      >
        <Card className="bg-info ">
          <Space>
            <h2 className="head-sty">Title:{user?.ProductName}</h2>{" "}
          </Space> <br />
          <img src={user?.image} style={{width:"230px", height:"40vh", marginLeft:"400px"}} />
          <Space className="col1">
            <h4>Description</h4>
            {user?.description}{" "}
          </Space>
          <br />
          <Space className="col1">
            <h4>Avaiable Quantity:</h4>
            {user?.available_quantity}{" "}
          </Space>{" "}
          <br />
          <Space className="col1">
            <h4>Posted date:</h4>
            {user?.posted_date}{" "}
          </Space>
          <br />
          <Space className="col1">
            <h4>Expired date:</h4>
            {user?.expired_date}
          </Space>{" "}
          <br />
          <Space className="col1">
            <h4>Price:</h4>
            {user?.price}
          </Space>
          <br />
        </Card>
      </Drawer>

      <Modal
        visible={visible}
        width="50%"
        onOk={() => setVisible(true)}
        onCancel={() => setVisible(false)}
        closable="true"
      >
        <Form
          name="normal_register"
          initialValues={{ remember: true }}
        >
          <h1 style={{ fontStyle: "oblique", fontFamily: "serif", height:"15vh" }}>
            you can edit your product
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
            <Input placeholder= {user?.ProductName}/>
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
            <Input placeholder={user?.description} />
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
            <Input placeholder={user?.available_quantity} />
          </Form.Item>

          <Form.Item name="image" label="Image:">
            <Upload
              name="logo"
              action="/upload.do"
              listType="picture"
              status="uploading"
            >
              <Button
                style={{ width: "250px", borderRadius: "10px" }}
                icon={<UploadOutlined />}
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
            <Input placeholder={user?.posted_date} />
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
            <Input placeholder= {user?.expired_date} />
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
            <Input placeholder={user?.price} />
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
            <Input placeholder={user?.seller_phone}/>
          </Form.Item>

          <Button
            style={{ marginTop: "2%" }}
            className="register-form-button"
            htmlType="submit"
            onClick={() => {}}
          >
            edit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AllProduct;
