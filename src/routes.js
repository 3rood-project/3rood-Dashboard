import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import ShopsRequest from "./views/ShopsRequest.js";
import Allposts from "views/Allposts.js";

import Products from "views/Products.js";
import Contact from "views/Contact.js";

import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Orders from "views/Orders";

const dashboardRoutes = [
  {
    path: "/Icons",
    name: "Icons",
    icon: "nc-icon nc-chart-pie-35",
    component: UserProfile,
    layout: "/admin",
  },
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
    icon: "nc-icon nc-tag-content",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/contact",
    name: "Contact Messages",
    icon: "nc-icon nc-chat-round",
    component: Contact,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Orders",
    icon: "nc-icon nc nc-cart-simple",
    component: Orders,
    layout: "/admin",
  },
];

export default dashboardRoutes;
