import MenuIcon from '@mui/icons-material/Menu';
import {Link, useLocation} from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import BookIcon from '@mui/icons-material/Book';

/**
 *
 *
 *
 * */

const navItems = [
    { to: '/', label: 'Chat', icon: <ChatIcon /> },
    { to: '/scheduler', label: 'Eventos', icon: <EventIcon /> },
    { to: '/blog', label: 'Blog', icon: <BookIcon /> }
];

export default function Navbar() {
    const location = useLocation();

    return (
        <div>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar" type="button"
                    className="inline-flex items-center p-2 my-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open sidebar</span>
                <MenuIcon/>
            </button>
            <aside id="default-sidebar"
                   className="fixed top-0 left-0 z-40 w-16 h-screen"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    {/*TODO:
                    {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center p-2 rounded-lg ${
            location.pathname === item.to
              ? 'bg-gray-700 text-white'
              : 'hover:bg-gray-600'
          }`}
        >
          <div className={`mb-1 ${location.pathname === item.to ? 'text-yellow-400' : ''}`}>
            {item.icon}
          </div>
          <span>{item.label}</span>
        </Link>
      ))}*/}
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                className="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100"
                                to="/">
                                <ChatIcon className="mb-1"/>
                                <span>Chat</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100"
                                to="/scheduler">
                                <EventIcon className="mb-1"/>
                                <span>Eventos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100"
                                to="/blog">
                                <BookIcon className="mb-1"/>
                                <span>Blog</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            {/* */}
        </div>
    )
}