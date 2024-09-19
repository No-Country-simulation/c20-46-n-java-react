import MenuIcon from '@mui/icons-material/Menu';
import {Link, useLocation, useNavigate} from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import BookIcon from '@mui/icons-material/Book';
import { Button, Fade, Paper, Popper, Typography } from '@mui/material';
import { useState } from 'react';
import { AccountCircle, AccountCircleOutlined} from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from '../../hooks/AuthProvider';
/**
 *
 * Project: Frontend
 * Author: djorges
 * Date: 10/9/2024
 */

const navItems = [
    { to: '/chat', label: 'Chat', icon: <ChatIcon /> },
    { to: '/blog', label: 'Blog', icon: <BookIcon /> },
    { to: '/scheduler', label: 'Eventos', icon: <EventIcon /> }
];

export default function SideBar() {
    const { setToken, user, setUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleLogout = () => {
        setToken(null);
        setUser(null);
        
        navigate("/");
    };
    return (
        <div>
            <Popper
                sx={{ zIndex: 1200 }}
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
            >
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper >
                    <div className="flex flex-col space-y-2 p-2">
                            <button
                                className="flex items-center p-1 w-full justify-start"
                            >
                                <SettingsIcon className="mr-2" />
                                <span>Configuración</span>
                            </button>
                            <button
                                className="flex items-center p-1 w-full justify-start"
                            >
                                <AccountCircleOutlined className="mr-2" />
                                <span>Perfil</span>
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center w-full p-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                <ExitToAppIcon className="mr-2" />
                                <span>Cerrar Sesión</span>
                            </button>
                        </div>
                    </Paper>
                </Fade>
                )}
            </Popper>
            <aside id="default-sidebar"
                   className="fixed top-0 left-0 z-40 w-16 h-screen"
                   aria-label="Sidebar">
                <div className="h-full px-2 pt-4 pb-2 overflow-y-auto bg-gray-50 flex flex-col">
                    <ul className="space-y-2 font-medium">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    className={`flex flex-col items-center px-5 py-2 rounded-lg ${
                                        location.pathname === item.to
                                            ? 'bg-gray-700 text-white'
                                            : 'hover:bg-gray-600'
                                    }`}
                                >
                                    <div className={`mb-1 ${location.pathname === item.to ? 'bg-gray-700' : ''}`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-xs">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto">
                        <button 
                            onClick={handleClick('right')} 
                            className="flex flex-col items-center px-2 py-2 rounded-lg bg-white hover:bg-gray-600">
                            <AccountCircleIcon className="mb-2" />
                            <span className="text-xs">
                                {user.nombre.length > 6 ? user.nombre.slice(0, 6) : user.nombre}
                            </span>
                        </button>
                    </div>
                </div>
            </aside>
            {/* */}
        </div>
    )
}