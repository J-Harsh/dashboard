import React, { Suspense } from "react";
import {Navigate, useLocation, useRoutes } from "react-router-dom"
// import LogIn from "./Pages/LogIn/LogIn"
// import Dashboard from "./Pages/Dashboard/Dashboard"
import "./app.css"
import AuthConsumer from "./util/authContext"
import CustomLoader from "./Components/CustomLoader/CustomLoader";

const LogIn = React.lazy(() => import('./Pages/LogIn/LogIn'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));

function App() {
  const routes = useRoutes([{ path: '', element: <Navigate to="/login" /> },
    {

      path:"/login",
      element: <LogIn />
    },
    {
      path:"/dashboard",
      element:<RequireAuth><Dashboard /></RequireAuth>
    }
  ])

  return <Suspense fallback={<CustomLoader/>}>{routes}</Suspense>;
}

export default App


function RequireAuth({ children }) {
  const [authed] = AuthConsumer()
  const location = useLocation()
  return authed.auth === true ? (
    children
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }}></Navigate>
  );
}


