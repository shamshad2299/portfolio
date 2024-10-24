import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App';
import Home from '../componenet/Home';
import About from '../componenet/about'
import SignUp from '../componenet/SignUp';
import Login from '../componenet/Login';
import Projects from '../componenet/Projects';
import Learnings from '../componenet/Learnings';
import Institutions from '../componenet/Institutions';
import Contact from '../componenet/Contact';
import TodoApp from "../Projects/TodoApp";
import FoodApp from '../Projects/FoodApp';
import TextUtils from '../Projects/TextUtils';
import Calculator from '../Projects/Calculator';
import InoteBook from '../Projects/InoteBook';
import SocialMedia from '../Projects/SocialMeadia';
import SocialMedia2 from '../projects/SocialMeadia2';
import UrlShortner from '../Projects/UrlShortner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />, children: [

          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/signup", element: <SignUp />
          },
          {
            path: "/signin", element: <Login />
          },
   
          {
            path: "/learning", element: <Learnings />
          },
          {
            path: "/institutes", element: <Institutions />
          },
          {
            path: "/contact", element: <Contact />
          },



          {
            path: "/projects", element: <Projects />,

            children : [

              {
                path: "/projects/todo", element: <TodoApp/>
              },
              {
                path: "/projects/calculator", element: <Calculator />
              },
              {
                path: "/projects/foodApp", element: <FoodApp />
              },
              {
                path: "/projects/inotebook", element: <InoteBook />
              },
              {
                path: "/projects/socialmedia", element: <SocialMedia />
              },
              {
                path: "/projects/textutils", element: <TextUtils />
              },
              {
                path: "/projects/urlshortner", element: <UrlShortner />
              },
              {
                path: "/projects/socialmedia2", element: <SocialMedia2 />
              },

            ]

          },
     
        ]
      }

    ],
  },
]);

const RouterWrapper = () => {
  return (

    <RouterProvider router={router} />
  );
};

export default RouterWrapper;
