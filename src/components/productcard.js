import React, { useState } from "react";
import { Drawer, Space } from "antd";
import "antd/dist/antd.css";
import "./productCard.css";
import SingleProduct from "./singleproduct";



const ProductCard = ({ data }) => {
  const [drawerVisible,setDrawerVisible] = useState(false);
  const handleclickDrawerVisible = () =>{
      setDrawerVisible(true);

  }
  const closeDrawerVisible = ()=> {
      setDrawerVisible(false);
  }

  console.log (data.image[0])
  return (
    <>


      
    <Drawer  title="We've got precisely the thing for you, Delivery is completely free." placement="left" visible={drawerVisible} width={600} height={300}  onClose={() =>closeDrawerVisible()}>
<SingleProduct data={data}/>
        </Drawer>
      
      <div className="card-container">
          <div className="image" >
      <img src={data.image[0]} />
      </div>
      <div className="other" >
          <h1>{data.title}</h1>
          <p> {data.description}<br/><br/>
         
          <Space> <label> Available Quantity: </label> {data.available_quantity}<br/> </Space><br/>
          <Space> <label> Posted On: </label> {data.posted_date}<br/> </Space><br/>
          <Space> <label> Expire Date: </label> {data.expired_date}<br/> </Space><br/>
          <Space> <label> Price: </label> {data.price}<br/> </Space><br/>
          <Space> <label> Seller Names: </label> {data.seller_name}<br/> </Space><br/>
          <Space> <label> Seller Phone: </label> {data.seller_phone}<br/> </Space><br/>
         </p>
          <div className="read" >
          <a href="/signin"> <button>Order Now</button></a>
          </div>
          </div>


      </div>
    </>
  );
};
export default ProductCard;
