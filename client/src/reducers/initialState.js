import image from "assets/img/faces/zhou.png";

export default {
  dashboard: {
    image: image,
    color: "purple",
    hasImage: true,
    fixedClasses: "dropdown show",
    mobileOpen: false
  },
  player: {
    connection: null,
    videoId: "https://www.twitch.tv/overwatchleague",
    videoSeek: null,
    videoState: "pause",
  }
};