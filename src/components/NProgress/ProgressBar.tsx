import NProgress from "nprogress";
import "nprogress/nprogress.css";
import './ProgressBar.css'

export const Progress = (isFetching: boolean) => {
  if (isFetching) {
    NProgress.start();
  } else {
    NProgress.done();
  }
};
