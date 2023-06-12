import type { FC } from "react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "../../lib/router";

const App: FC = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
