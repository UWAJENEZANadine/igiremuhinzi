
import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Spin } from "antd";
import agricultureProductApis from "../../services/agricultureProductApis";


const column = [
  {
    title: "Full Ame",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    
  },
  
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Adress",
    dataIndex: "address",
    key: " address",
  },

  {
        title: "status",
        key: " actions",
        fixed:"right",
        width: 100,

        render:(text,record)=>(
            <Space size="middle">
                <a href="#">accept </a>
                <a href="#" style={{color:"green"}}>decline </a>
                <a href="#" style={{color:"red"}}>cancel </a>

            </Space>
        )
    }


];


const AllOrder = () =>{
    const[allUsersData,setAllUsersData]=useState([]);
    useEffect(()=>{agricultureProductApis.getAllUsers().then((res)=>{
        console.log(res);
        setAllUsersData(res.data.data);
    })},[]);


    return (
    <>
     {allUsersData.length == 0 ? (
       <div style={{marginLeft:"50%", paddingTop:"10%"}}>
         <Space size="middle" >
           <Spin size="small" />
           <Spin />
           <Spin size="large" />
         </Space>
         </div>
         
      ) : (

      <Table className="bg-dark" columns={column} dataSource={allUsersData} />
      )}
    </>
  
  

  )
};

export default AllOrder;
