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
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
