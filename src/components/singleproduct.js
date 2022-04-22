import { useState } from "react";
import "./singleproduct.css";
import ReactDOM from 'react-dom';
import agricultureProductApis from "../../src/services/agricultureProductApis";
import HomeLayout from "../components/homeLayout";
import {
 
  notification
  
} from "antd";

const SingleProduct = ()=> {
  const onFinish = (values) => {
    console.log("received values", values);
    agricultureProductApis.createOrders(values).then((res) => {
      if (!res) {
        return notification.error({ message: "server is down" });
      }
      if (res.status === 200) {
        return notification.success({
          message: "order successfully",
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
   <div className="container1">
      <div className="form">
    <form>
      <div className="form-container">
        <p>we are happy to serve you any choice of your product</p>
      <label>Enter Quantity:
        <input
          type="text" 
          
        />
      </label>
      <button className="button2"style={{marginLeft:"50%",marginTop:"12%"}}><a href= "/order">Send</a></button>
      </div>
    </form>
    </div>
    </div>
    </HomeLayout>
   
  )

};


export default SingleProduct;