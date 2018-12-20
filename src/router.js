import Vue from "vue";
import Router from "vue-router";
import DesktopForegroundRouter from "./DesktopForegroundRouter";
import DesktopBackgroundRouter from "./DesktopBackgroundRouter";
import MobileForegroundRouter from "./MobileForegroundRouter";
import MobileBackgroundRouter from "./MobileBackgroundRouter";
import device from 'current-device';

Vue.use(Router);

var IsForeground = function() {  //Replace this function to your own to judge whether it is Foreground
  return true;
};

var currentRouter;

if (device.type === "desktop") {
  if (IsForeground()) {
    currentRouter = DesktopForegroundRouter;
  }
  else {
    currentRouter = DesktopBackgroundRouter;
  }
} else if (device.type === "mobile") {
  if (IsForeground()) {
    currentRouter = MobileForegroundRouter;
  }
  else {
    currentRouter = MobileBackgroundRouter;
  }
}

export default new Router({
  routes: currentRouter
});

