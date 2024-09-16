import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import React, { useState } from 'react';
import Alt1 from '../../assets/Alt1.jpeg';
import Dialog from '@mui/material/Dialog';
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import ForgotPassword from "../ForgotPassword/ForgotPassword.jsx";

export default function TopBar() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const [view, setView] = React.useState('login');
    const handleRegisterClick = () => setView('register');
    const handleChangePasswordClick = () => setView('changePassword');
    const handleLoginClick = () => setView('login');

    return (
      <>
         <nav className="bg-gray-800 bg-opacity-70 text-white p-4 absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <img
                    className="w-10 h-10 rounded-full p-0 mr-3"
                    src={Alt1}
                    alt="Logo de MindMates"
                />
              <div>
                <h2 className="text-2xl font-bold leading-tight text-primary-500">MindMates</h2>
                <p className="text-sm text-gray-300">Salud Mental</p>
              </div>
            </div>
            <ul className="flex space-x-4 items-center">
              <li><Link to="/about" className="hover:text-gray-300">Sobre Nosotros</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contacto</Link></li>
              <li>
                <button 
                      onClick={handleClickOpen}
                      className="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Ingresar
                </button>
              </li>
            </ul>
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    width: '100%',
                    maxWidth: '500px',
                    maxHeight: "800px"
                },
            }}
          >
            {view === 'login' && (
                <Login
                    onRegisterClick={handleRegisterClick}
                    onChangePasswordClick={handleChangePasswordClick}
                />
            )}
            {view === 'register' && (
                <Register onLoginClick={handleLoginClick} />
            )}
            {view === 'changePassword' && (
                <ForgotPassword onLoginClick={handleLoginClick} />
            )}
          </Dialog> 
        </nav>
      </>
    )
}