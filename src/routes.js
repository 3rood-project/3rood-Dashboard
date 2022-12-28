/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Posts from "views/Posts.js";
import Allposts from "views/Allposts.js";

import Comments from "views/Comments.js";
import News from "views/News.js";

import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import AllExpectation from "views/Expectation";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/table",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/shops",
    name: "All Shops",
    icon: "nc-icon nc-paper-2",
    component: Allposts,
    layout: "/admin",
  },

  {
    path: "/shopsRequest",
    name: "Shops Request",
    icon: "nc-icon nc-send",
    component: Posts,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-chat-round",
    component: Comments,
    layout: "/admin",
  },
  {
    path: "/contact",
    name: "Contact Messages",
    icon: "nc-icon nc-single-copy-04",
    component: News,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Orders",
    icon: "nc-icon nc-alien-33",
    component: AllExpectation,
    layout: "/admin",
  },
];

export default dashboardRoutes;
