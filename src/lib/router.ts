import { createBrowserRouter } from "react-router-dom";
import { Agent } from "../components/Agent/Agent";
import Agents from "../components/Agents/Agents";
import { Join } from "../components/Join/Join";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Agents,
  },
  {
    path: "/join",
    Component: Join,
  },
  {
    path: "/agents/:id",
    Component: Agent,
  },
]);
