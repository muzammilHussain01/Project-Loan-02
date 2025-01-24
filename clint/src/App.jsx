import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import AboutMe from "./components/about-me/AboutMe";
import ErrorPage from "./components/errorPage/ErrorPage";
import LoanWithUs from "./components/loanWithUs/LoanWithUs";
import HomeLoan from "./components/homeLoan/HomeLoan";
import PersonalLoan from "./components/personalLoan/PersonalLoan";
import GoldLoan from "./components/goldLoan/GoldLoan";
import Carloan from "./components/carLoan/Carloan";
import EducationLoan from "./components/educationLoan/EducationLoan";
import OurServices from "./components/ourServices/OurServices";
import PLoan from "./components/ourServices/pLoan/PLoan";
import ConnectUs from "./components/connectUs/ConnectUs";
import Bussloan from "./components/ourServices/bussLoan/BussLoan";
import VehicleLoan from "./components/ourServices/vehicle/VehicleLoan";
import ApplicationForm from "./components/applicationForm/ApplicationForm";
import InstantLoan from "./components/instantLoan/InstantLoan";
import WeddingLoan from "./components/ourServices/weddingLoan/WeddingLoan";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import TermCondetion from "./components/termCondetion/TermCondetion";
import MedicalLoan from "./components/medical-loan/MedicalLoan";
import TravelLoan from "./components/travelLoan/TravelLoan";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectdeRoute";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

// Create a browser router with standalone routes
const router = createBrowserRouter([
  {
    path: "/", // Root route
    element: <Root />, // Root component
    errorElement: <ErrorPage />, // Error page component
    children: [
      {
        index: true, // Default child route for the root path
        element: <Home />, // Render Home component for "/"
      },
      {
        path: "dashboard", // Path for Dashboard
        element: <ProtectedRoute element={Dashboard} />, // Protect Dashboard route
      },
      {
        path: "about-me", // Path for About Me
        element: <AboutMe />, // Render About Me component
      },
      {
        path: "ourservices",
        element: <OurServices />,
      },
      {
        path: "connect-us",
        element: <ConnectUs />,
      },
      {
        path: "loanWithUs", // Standalone route for Loan With Us
        element: <LoanWithUs />, // Render Loan With Us
      },
      {
        path: "homeloan", // Standalone route for Home Loan
        element: <HomeLoan />, // Render Home Loan
      },
      {
        path: "personalloan", // Standalone route for Home Loan
        element: <PersonalLoan />, // Render Home Loan
      },
      {
        path: "goldloan", // Standalone route for Home Loan
        element: <GoldLoan />, // Render Home Loan
      },
      {
        path: "carloan", // Standalone route for Home Loan
        element: <Carloan />, // Render Home Loan
      },
      {
        path: "education-loan", // Standalone route for Home Loan
        element: <EducationLoan />, // Render Home Loan
      },
      {
        path: "medical-loan", // Standalone route for Home Loan
        element: <MedicalLoan />, // Render Home Loan
      },

      {
        path: "p-loan", // Standalone route for Home Loan
        element: <PLoan />, // Render Home Loan
      },

      {
        path: "business-loan", // Standalone route for Home Loan
        element: <Bussloan />, // Render Home Loan
      },
      {
        path: "vehicle-loan", // Standalone route for Home Loan
        element: <VehicleLoan />, // Render Home Loan
      },
      {
        path: "application-form", // Standalone route for Home Loan
        element: <ApplicationForm />, // Render Home Loan
      },
      {
        path: "instant-loan", // Standalone route for Home Loan
        element: <InstantLoan />, // Render Home Loan
      },
      {
        path: "wedding-loan", // Standalone route for Home Loan
        element: <WeddingLoan />, // Render Home Loan
      },
      {
        path: "privacy-policy", // Standalone route for Home Loan
        element: <PrivacyPolicy />, // Render Home Loan
      },
      {
        path: "term-condetion", // Standalone route for Home Loan
        element: <TermCondetion />, // Render Home Loan
      },
      {
        path: "travel-loan", // Standalone route for Home Loan
        element: <TravelLoan />, // Render Home Loan
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} /> {/* Provide the router */}
      </Provider>
    </div>
  );
}

export default App;
