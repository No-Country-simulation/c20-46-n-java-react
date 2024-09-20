import { useEffect } from "react";
import api from "../../api/api";
import { useState } from "react";

const Home = () => {
    const [message, setMessage] = useState('');

    const fetchMessage = async () => {
        try {
            const response = await api.get('/api/home/hello');
            setMessage(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    useEffect(() => {

        fetchMessage();
    }, []);

    return (
        <div>
            <h1>{message || 'Cargando...'}</h1>
        </div>
    );
};

export default Home;