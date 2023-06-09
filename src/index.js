import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Attractions from './pages/Attractions';
import FoodPlaces from './pages/FoodPlaces';
import PlaceInfo from './components/PlaceInfo';
import ImageContext from './context/ImageContext';
import Contacts from './pages/Contacts';
import Hotels from './pages/Hotels';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/travelkz-r',
    element: <Home/>
  },
  {
    path: '/attractions',
    element:<Attractions/>
  },
  {
    path: '/food',
    element:<FoodPlaces/>
  },
  {
    path:'/places/:id',
    element:<PlaceInfo/>
  },
  {
    path:'/contacts',
    element:<Contacts/>
  },
  {
    path:'/hotels',
    element: <Hotels/>
  }
])
root.render(
  <React.StrictMode>
    <ImageContext>
      <RouterProvider router={router}>
      <App />
      </RouterProvider>
    </ImageContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
