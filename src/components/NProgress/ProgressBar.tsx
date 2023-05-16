import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./ProgressBar.css";

export const ProgressBar = (isFetching: boolean) => {
  if (isFetching) {
    NProgress.start();
  } else {
    NProgress.done();
  }
};
