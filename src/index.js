import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Offer from './home/Offer';
import StudyRooms from './home/StudyRooms';
import Reviews from './home/Reviews';
import Cta from './login_register/Cta';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Offer></Offer>
    <StudyRooms></StudyRooms>
    <Reviews></Reviews>
    <Cta></Cta>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
