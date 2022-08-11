import "./app.less";
// import 'antd/dist/antd.min.css';
import "./less.less";
import "antd/dist/antd.less";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter,BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";//获取antd 中文语言配置
import moment from 'moment';//格式化时间
import 'moment/locale/zh-cn';
// import { useState } from 'react';
import {Provider} from "react-redux";
import store from "./redux/index"
moment.locale('zh-cn');//设置中文语言
// zhCN.DatePicker.lang.now = "点击获取当前时间"
// console.log(JSON.stringify(zhCN, null, 4) );
// console.log(JSON.stringify(zhCN));
 // pre 用于格式化输出
const root = ReactDOM.createRoot(document.getElementById("root"));
//react DOM
root.render(
  <HashRouter>
    {/* 配置中文 */}
    <ConfigProvider locale = { zhCN }>
    <Provider store={store}>
      <App />
    </Provider>
    </ConfigProvider>
  </HashRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// react-native good very good

/**
 * 你好呀 English
 *
 * */
