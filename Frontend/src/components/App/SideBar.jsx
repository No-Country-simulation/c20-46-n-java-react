import MenuIcon from '@mui/icons-material/Menu';
import {Link, useLocation} from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import BookIcon from '@mui/icons-material/Book';

/**
 *
 * Project: Frontend
 * Author: djorges
 * Date: 10/9/2024
 */

const navItems = [
    { to: '/', label: 'Chat', icon: <ChatIcon /> },
    { to: '/scheduler', label: 'Eventos', icon: <EventIcon /> },
    { to: '/blog', label: 'Blog', icon: <BookIcon /> }
];

export default function SideBar() {
    const location = useLocation();

    return (
        <div>
            <aside id="default-sidebar"
                   className="fixed top-0 left-0 z-40 w-16 h-screen"
                   aria-label="Sidebar">
                <div className="h-full px-2 py-4 overflow-y-auto bg-gray-50">
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
                </div>
            </aside>
            {/* */}
        </div>
    )
}