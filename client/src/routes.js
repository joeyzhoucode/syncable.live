// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";

// core components/views for Home layout
import DashboardPage from "containers/Dashboard.jsx";
import UserProfile from "containers/UserProfile.jsx";
import TableList from "containers/TableList.jsx";
import Player from "containers/Player.jsx";
import NotificationsPage from "containers/Notifications.jsx";

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
