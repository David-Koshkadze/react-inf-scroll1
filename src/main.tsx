import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import UsersProviderComponent from "./context/usersHistory";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UsersProviderComponent>
      <App />
    </UsersProviderComponent>
  </React.StrictMode>
);
