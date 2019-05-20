// @material-ui/icons
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import NotificationsIcon from "@material-ui/icons/Notifications";

// core components/views for Home layout
import Home from "containers/Home.jsx";
import Profile from "containers/Profile.jsx";
import TableList from "containers/TableList.jsx";
import Player from "containers/Player.jsx";
import NotificationsPage from "containers/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: HomeIcon,
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: PersonIcon,
    component: Profile,
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
    icon: BubbleChartIcon,
    component: Player,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: NotificationsIcon,
    component: NotificationsPage,
  }
];

export default dashboardRoutes;
