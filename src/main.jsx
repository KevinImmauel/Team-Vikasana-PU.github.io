import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx';
import './index.css'
import Achievements from './Achievements.jsx'
import AboutCard from '../components/AboutCard.jsx'
import EventCard from '../components/EventCard.jsx'
import AchievementCard from '../components/AchievementCard.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)