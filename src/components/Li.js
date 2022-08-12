import React, { Component, useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, Button, DatePicker, Space, Input } from "antd";

// function Li() {
//   // const navigate = useNavigate();
//   // useEffect(() => {
//   //   console.log("我每次都执行");
//   // });

//   // useEffect(() => {
//   //   return () => {
//   //     console.log("xiezai");
//   //   };
//   // });

//   return (
    // <div>
    //   <li>welcom to Li</li>
    //   <Button type="primary" onClick={() => navigate("/btn")}>
    //     primary
    //   </Button>
    // </div>
//   );
// }


class Li extends React.Component {
  constructor(props) { 
    super(props)
  }

  render() {
    return　(
      <div>
      <li>welcom to Li</li>
      <Button type="primary" onClick={() => alert(1)}>
        primary
      </Button>
    </div>
    );
  }


}
export default Li;
