import Layout from "@/components/Layout";
import GreenChallenge from "@/pages/ecoService/GreenChallenge";
import GreenMileage from "@/pages/ecoService/GreenMi";
import Home from "@/pages/home/Home";
import Landing from "@/pages/Landing/Landing";
import Login from "@/pages/login/Login";
import ResetPassword from "@/pages/login/ResetPassword";
import LaborMatch from "@/pages/revitalizationService/LabortMatch";
import LocalPromotionMatch from "@/pages/revitalizationService/LocalPromotionMatch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "login", element: <Login /> },
        { path: "home", element: <Home /> },
        { path: "resetPassword", element: <ResetPassword /> },
        { path: "greenMileage", element: <GreenMileage /> },
        { path: "greenChallenge", element: <GreenChallenge /> },
        { path: "laborMatch", element: <LaborMatch /> },
        { path: "localPromotionMatch", element: <LocalPromotionMatch /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
