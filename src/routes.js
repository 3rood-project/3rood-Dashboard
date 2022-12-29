import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import ShopsRequest from "./views/ShopsRequest.js";
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
    component: ShopsRequest,
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
