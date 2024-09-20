import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import {OutlinedInput} from "@mui/material";
import { useAuth } from '../../hooks/AuthProvider';
import {Navigate, useNavigate} from "react-router-dom";
import SideBar from '../App/SideBar'; 
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useEffect, useState} from 'react';
import api from '../../api/api';

/**
 *
 *
 * */


export default function Chat(){ 
    const [client, setClient] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState(''); 
    const { token, user} = useAuth();

    useEffect(() => {
        const sock = new SockJS(import.meta.env.VITE_BACKEND_API+'/ws-endpoint');
        const stompClient = new Client({
            webSocketFactory: () => sock,
            onConnect: () => {
            console.log('Connected to WebSocket');
            stompClient.subscribe('/topic/reply', (message) => {
                const messageBody = JSON.parse(message.body);
                setMessages((prevMessages) => [...prevMessages, messageBody]);
            });
            },
            onDisconnect: () => {
                console.log('Disconnected from WebSocket');
            },
            debug: (str) => {
                console.log(str);
            },
        });

        setClient(stompClient);
        stompClient.activate();

    return () => {
        stompClient.deactivate();
    };
    }, []);

    const sendMessage = () => {
        if (client && inputMessage) {
          client.publish({
            destination: '/app/broadcast',
            body: JSON.stringify({ username: user.nombre, content: inputMessage, type: 'CHAT' }),
          });
          setInputMessage('');
        }
    };

    if (!token) {
        return <Navigate to="/" replace/>;
    } 

    return (
        <>
            <SideBar/>
            <div className="flex h-screen" style={{ marginLeft: '4rem' }}>
                {/*Chat Conversation*/}
                <div className="flex-1 flex flex-col">
                    {/*Title*/}
                    <div className="flex items-center justify-between h-16 px-4 border-b">
                        <div className="flex items-center space-x-2">
                            <PersonIcon/>
                            <div>
                                <h3 className="text-lg font-semibold text-center">Kate Lampert</h3>
                                <p className="text-green-400">online</p>
                            </div>
                        </div>
                        <MoreHorizIcon className="w-6 h-6"/>
                    </div>
                    {/*Messages*/}
                    {/* <div className="flex-1 p-4 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <div className="self-start p-2 bg-gray-200 rounded-lg">
                                <p className="text-sm font-medium">Pre-chat survey</p>
                                <p className="text-sm">Your name: Kate Lampert</p>
                                <p className="text-sm">E-mail: kate.lampert@company.com</p>
                            </div>
                            <div className="self-end p-2 bg-blue-500 text-white rounded-lg text-end">
                                <p className="text-sm font-bold">Me</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm">Hello! How may I help you?</p>
                                    <DoneIcon/>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <ul>
                        {messages.map((msg, index) => (
                            <li key={index}>
                            <strong>{msg.username}:</strong> {msg.content}
                            </li>
                        ))}
                    </ul>

                    {/**/}
                    <div className="flex items-center p-4 border-t">
                        <OutlinedInput
                            id="message"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            type="text"
                            variant="outlined"
                            placeholder="Type a message..."
                            fullWidth
                            hiddenLabel
                            color="primary"
                            size="small"
                            className="flex-1"
                        />
                        <button onClick={sendMessage}
                                className="ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}