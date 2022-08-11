import React from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
function Header(props) {
  //hooks program
  let { click, collapsed } = props;
  return (
    <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => click(),
      })}
      {props.children}



    </Layout.Header>
  );
}



export default Header;
