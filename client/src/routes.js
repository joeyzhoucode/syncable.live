// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";

// core components/views for Home layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Player from "views/Player/Player.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: Home,
    component: DashboardPage,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
  },
  {
    path: "/playlist",
    name: "Playlist",
    icon: "content_paste",
    component: TableList,
  },
  {
    path: "/player",
    name: "Player",
    icon: BubbleChart,
    component: Player,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
  }
];

export default dashboardRoutes;
