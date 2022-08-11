import React, { Component, useState,useEffect } from "react";
import { Layout, Menu, Button, DatePicker, Space, Input } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined
} from "@ant-design/icons";
import classNames from "classnames";
import { Routes, Route, NavLink, useNavigate,useLocation,generatePath } from "react-router-dom";
import ContentBody from './ContentBody';
import Btn from '../components/Btn';
import Link from '../components/Link';
import Li from '../components/Li';
import LayoutHeader from "./Header";
// import hookable  from 'react-class-hookable';
// import {CacheRoute,CacheSwitch} from 'react-router-cache-route'
const { Header, Footer, Sider, Content } = Layout;

const { RangePicker } = DatePicker;
class LayOut extends Component {
  constructor(props) {
    super(props);
    this.state = { div_1: true, collapsed: false, defaultValue: "" };
    this.onClickTest = this.onClickTest.bind(this);
    this.setCollapsed = this.setCollapsed.bind(this);
    
  }
  componentDidMount() {
   console.log('componentDidMount');
   
  }
  // menuRef = React.createRef()
  // location = useLocation();
  onClickTest() {
    // alert("Click Test!");
    this.setState({
      div_1: !this.state.div_1,
      defaultValue: !this.state.div_1,
    });
  }
  setCollapsed() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  history() {
    // const history = useHistory()

  }
  render() {
    //绑定 class styleW
    // style={{background: 'red'}}
    //className= [] classNames
    // console.log(this);
    
    return (
      <Layout
        id="components-layout-demo-custom-trigger"
        style={{ height: "100%" }}
      >
        <Sider
          collapsible
          // collapsedWidth='0'
          collapsed={this.state.collapsed}
          onCollapse={(collapsed) => this.setCollapsed(collapsed)}
           >
          <div className="logo" title="hello world!">
            Hello World!
          </div>
          <Menu
            theme="dark"
            mode="inline"
            onClick={({ key, keyPath, domEvent }) => {
              
              // console.log(key);console.log(keyPath);
              // useNavigate()
            }}
            // onClick={({ key, keyPath, domEvent }) => {generatePath(key)}}
            // onClick={(item) => {console.log(item);}}
            defaultSelectedKeys={["/btn"]}
            items={[
              {
                key: "/btn",
                icon: <UserOutlined />,
                // label: 'Btn',
                label: <NavLink to="/btn">Btn</NavLink>,
                // label: ,

              },
              {
                key: "/link",
                icon: <VideoCameraOutlined />,
                // label: 'Link',
                label: <NavLink to="/link">Link</NavLink>,
              },
              {
                key: "/link2",
                icon: <UploadOutlined />,
                // label: 'Link2',
                label: <NavLink to="/link2">Link2</NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <LayoutHeader collapsed={this.state.collapsed} click={() => this.setCollapsed(!this.state.collapsed)}>

            洒洒水
          </LayoutHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: "8px",
              padding: "8px",
              minHeight: 280,
            }}
          >
              <Routes>
                 <Route path="/" element={<ContentBody/>}>
                    <Route path="btn" element={<Btn/>}/>
                    <Route path="link" element={<Link/>}/>
                 </Route>
                 <Route path="link2" element={<Li/>}/>
              </Routes>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default (LayOut);


// {/*            
//             <div className={classNames("div_2", { div_1: this.state.div_1 })}>
//             Content
//               <h1 align="center">LayOut布局组件 {this.state.div_1 + ""}</h1>
//               <Space direction="vertical" size={12}>
//                 <DatePicker showTime onChange={() => {}} onOk={() => {}} />
//                 <RangePicker />
//               </Space>
//               <Button type="primary" onClick={this.onClickTest}>
//                 primary button
//               </Button>
//               <Input
//                 allowClear={true}
//                 defaultValue={this.state.defaultValue}
//                 placeholder="请输入..."
//                 showCount={true}
//                 value={this.state.defaultValue}
//                 onChange={(e) => {
//                   console.log(e);
//                   this.setState({ defaultValue: e.target.value });
//                 }}
//               />
//               <div style={{margin: '16px'}}>
//                  {this.state.defaultValue}

//                  <DoubleLeftOutlined />    --------------------------------------------------   <DoubleRightOutlined />
//               </div>
              
//               {/* <div style={{ backgroundColor: "red", color: "white" }}>
//                 你好呀 English  {this.state.language  === "English" ? this.state.language : "English"}  
//               </div> */}
//             {/* </div> */}