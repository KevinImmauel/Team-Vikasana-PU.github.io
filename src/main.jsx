import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AboutPage from "./pages/AboutPage.jsx";
import MembersPage from "./pages/MembersPage.jsx";
import Events from "./pages/Events.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/events",
        element: <Events />,
    },
    {
        path: "/",
        element: <App />,
    },
    {
        path: "about",
        element: <AboutPage />,
    },
	{
		path: "members",
		element: <MembersPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
