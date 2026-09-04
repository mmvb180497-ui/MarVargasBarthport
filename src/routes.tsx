import { createBrowserRouter } from "react-router";
import Portfolio from "./Portfolio";

import CaseStudyDetail from "./pages/CaseStudyDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/case-study/:id",
    Component: CaseStudyDetail,
  },
]);
