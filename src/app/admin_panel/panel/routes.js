/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.jsx";
import UserProfile from "./views/UserProfile.jsx";
import Typography from "./views/Typography.jsx";
import Icons from "./views/Icons.jsx";
import Notifications from "./views/Notifications.jsx";
import Main from "./views/Main";
import UsersControl from "./views/UsersControl";
import RolesBoard from "./views/RolesBoard";

const dashboardRoutes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    layout: "/admin",
    icon: "pe-7s-monitor",
    routeProps: {
      exact: true
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/user-panel",
    name: "User panel",
    icon: "pe-7s-users",
    component: UsersControl,
    layout: "/admin"
  },
  {
    path: "/roles",
    name: "Roles panel",
    icon: "pe-7s-note2",
    component: RolesBoard,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  }
];

export default dashboardRoutes;
