import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
// import About from "./components/About";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
import Error from "./components/Error";

// making chunks or lazy load or code splitting for optimize bundling;

const About = lazy(() => import("./components/About"));

const App = () => {
   return (
      <>
         <Header />
         {/* auto matically replaced in outlet */}
         <Outlet />
         <Footer />
      </>
   )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRoutes = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <App />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [
         // show children component for routing
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: <Suspense fallback={<Error />}>
               <About />
            </Suspense>,
         },
         {
            path: "/contact",
            element: <Contact />,
         }
         ,
         {
            path: "/resturantMenu/:restId",
            element: <ResturantMenu />,
         }
      ],
   },
])
root.render(<RouterProvider router={appRoutes} />);