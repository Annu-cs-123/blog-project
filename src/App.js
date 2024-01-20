import { Fragment } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import "./style.scss";
import Single from './pages/Single';
import Write from './pages/Write';
import Home from './pages/home components/Home';
import Login from './pages/login components/Login';
import Register from './pages/register  components/Register';
import Navbar from './components/navbar components/Navbar';
import Footer from './components/footer components/Footer';


const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment >
  )
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      , {
        path: "/single",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
  , {
    path: "/register",
    element: <Register />
  }

])

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
