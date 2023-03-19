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
import Matching from './Study-Group/Matching';
import { BrowserRouter, Routes , Route, Navigate} from 'react-router-dom';
import About from './About-us/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <Routes>
          <Route path='/' element={
            <>
              <Offer></Offer>
              <StudyRooms></StudyRooms>
              <Reviews></Reviews>
            </>
          }></Route>

          <Route path='studygroups' element={
            <Matching></Matching>
          }></Route>

          <Route path='about' element={
            <About></About>
          }></Route>

          

        </Routes>
      <Cta></Cta>
      <Footer></Footer>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
