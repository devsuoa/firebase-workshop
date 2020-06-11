import Entrance from "../../entrance/entrance";
import Home from "../../home/home";
import Create from "../../create/create";

const routes = [
  {
    exact: true,
    path: "/",
    component: Entrance,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/create",
    component: Create,
  },
];

export default routes;
