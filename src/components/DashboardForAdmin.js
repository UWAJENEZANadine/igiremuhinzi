import React, {useState, useEffect} from "react"
import "./DashboardForAdmin.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Layout, Menu, Table} from 'antd';
import agricultureProductApis from "../../src/services/agricultureProductApis";
import { BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


const { SubMenu } = Menu;


const { Header, Content, Footer } = Layout;
const Dashbord = () => {

  const data = [
    {
      "name": "jan-feb",
      "Seller": 4000,
      "Buyer": 2400
    },
    {
      "name": "march-aply",
      "Seller": 3000,
      "Buyer": 1398
    },
    {
      "name": "may-june",
      "Seller": 2000,
      "Buyer": 9800
    },
    {
      "name": "july-augst",
      "Seller": 2780,
      "Buyer": 3908
    },
    {
      "name": "sep-oct",
      "Seller": 1890,
      "Buyer": 4800
    },
    {
      "name": "nov",
      "Seller": 2390,
      "Buyer": 3800
    },
    {
      "name": "dec",
      "Seller": 3490,
      "Buyer": 4300
    }
  ]
  const column = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      
    }
  ];
  const [allUsersData, setAllUsersData] = useState([]);

  useEffect(() => {
    agricultureProductApis.getAllUsers().then((res) => {
      console.log(res);
      setAllUsersData(res.data.data);
    });
  }, []);

  return (

    <>
      <div className="topbar">
        <div className="topbar1">
          <div className="dashLeft">
            <span className="title">AdminDashboard</span>
          </div>
          <div className="dashright">
            <div className="TopbariconsContainer">
              <NotificationsNone />
              <span className="iconsContainer">2</span>
            </div>
            <div className="TopbariconsContainer">
              <Language />
              <span className="iconsContainer">2</span>
            </div>
           
            <Link style={{ textDecoration: "none" }} to="/home">
              Logout
            </Link>
          </div>

        </div>
      </div>




      <Layout>

        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

          <div className="site-layout-background" style={{ padding: 24, minHeight: 500}}>

            <div className="buyer">
              <BarChart width={730} height={290} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Seller" fill="black" />
                <Bar dataKey="Buyer" fill="rgba(141, 66, 16, 0.849)" />
              </BarChart>
            </div>
            <div className="members">
  <h1>New Members</h1>
  
  <Table className="bg-dark" columns={column} dataSource={allUsersData} />
</div>
            </div>
     
        </Content>
       
        <Footer style={{ textAlign: 'center' }}>@Software chasers</Footer>
      </Layout>,

    </>

  );
}
export default Dashbord;

