import logo from "./logo.svg";
import "./App.css";
// import Switch from 'react-router'
import React, { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import loadable from "loadable-components";
import Li from "./components/Li";
import Link from "./components/Link";
import Btn from "./components/Btn";
import LayOut from "./layout/LayOut";
import Pardon from "./components/Pardon";

function App() {
  // alert(1);
  // const routes = [
  // 	{
  // 		path:'link',
  // 		component: lazy(()=>import('./components/Link'))
  // 	},
  // 	{
  // 		path:'btn',
  // 		component: lazy(()=> import('./components/Btn'))
  // 	}
  // ]
  const routesS = [
    {
      path: "/",
      // component: lazy(()=>import('./components/Li')),
      component: "/Li",
      exact: "exact",
      data: { buttons: { button_save: true } },
      children: [
        {
          path: "link",
          // component: lazy(()=>import('./components/Link')),
          component: "/Link",
          data: { buttons: { button_save: true } },
        },
        {
          path: "btn",
          // component: lazy(()=> import('./components/Btn')),
          component: "/Btn",
          data: { buttons: { button_save: true } },
        },
      ],
    },
  ];

  function getComponents(rsa) {
    return rsa.map((item) => {
      var component = item.component;
      if (item.children) {
        item.children = getComponents(item.children);
        item.component = loadable(() => import(`@/components${component}.js`));
        return item;
      }
      item.component = loadable(() => import(`@/components${component}.js`));
      return item;
    });
  }

  function renderRs(rs = []) {
    return rs.map((item) => {
      if (item.children) {
        return (
          <Route
            key={item.path}
            path={item.path}
            element={
              <Suspense fallback={<Pardon />}>
                <item.component />
              </Suspense>
            }
          >
            {renderRs(item.children)}
          </Route>
        );
      }

      return (
        <Route
          key={item.path}
          path={item.path}
          element={
            <Suspense fallback={<Pardon />}>
              <item.component />
            </Suspense>
          }
        ></Route>
      );
    });
  }

  return (
    // <div className="App">
    // <header className="App-header">
        // <NavLink to="/btn">访问btn组件</NavLink>
        // <NavLink to="/link">访问Li组件</NavLink>
        <LayOut />
    


    // 	<Routes>
    // 	   {renderRs(getComponents(routesS))}
    // 	</Routes>
    //   </header>
    // </div>
  );
}
export default App;
