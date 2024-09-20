import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material"
import SideBar from "../App/SideBar"
import CommentIcon from '@mui/icons-material/Comment';
import Footer from "../App/Footer";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../api/api";
import { useAuth } from "../../hooks/AuthProvider";
import { Navigate } from "react-router-dom";

const categories = ['Ansiedad', 'Depresión', 'Apoyo Emocional', 'Terapias', 'Autoestima','Salud Mental',
    'Bienestar', 'Superación Personal', 'Resiliencia','Sociabilizar', 'Motivación']
const posts = [
    {
        title: 'Cómo lidiar con la ansiedad en tiempos de estrés',
        description: 'Descubre estrategias efectivas para manejar la ansiedad durante situaciones estresantes.',
        comments: 5
    },
    {
        title: 'Consejos para mantener el equilibrio emocional',
        description: 'Aprende cómo mantener un equilibrio emocional saludable en tu vida diaria.',
        comments: 8
    },
    {
        title: 'Estrategias para mejorar tu salud mental',
        description: 'Explora técnicas y recursos para fortalecer tu bienestar mental.',
        comments: 3
    }
]
const articulos = [
    {
      title: 'Manejo de la Ansiedad',
      description: 'Consejos prácticos para manejar la ansiedad en situaciones estresantes.',
      image: '/Blog 1.jpg',
      rating: 4,
    },
    {
      title: 'Meditación para el Estrés',
      description: 'Descubre cómo la meditación puede ayudarte a reducir el estrés diario.',
      image: '/Blog 2.jpg',
      rating: 3,
    },
    {
      title: 'Diario de Gratitud',
      description: 'Cómo mantener un diario de gratitud puede mejorar tu bienestar emocional.',
      image: '/Blog 3.jpg',
      rating: 5,
    },
  ]

export default function Blog(){
    const { token} = useAuth();
    /* const [message, setMessage] = useState('');

    useEffect(() => {
        // Realiza la solicitud GET al backend
        const fetchHelloWorld = async () => {
            try {
                const response = await api.get('/api/home/hello');
                setMessage(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setMessage('Error al obtener el mensaje');
            }
        };

        fetchHelloWorld();
    }, []); */

    if (!token) {
        return <Navigate to="/" replace/>;
    }
    
    return(
        <>
            <SideBar/>
            <main className="min-h-screen container px-3 py-8" style={{ marginLeft: '4rem' }}>
                {/* <h1>{message}</h1> */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Categorías</h2>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                        <span key={category} className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm">
                            {category}
                        </span>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4">Recursos Recomendados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-col justify-between h-full p-4">
                                    <div>
                                        <Typography variant="h6" component="h3" className="font-bold mb-3">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="mb-4">
                                            {post.description}
                                        </Typography>
                                    </div>
                                    <div className="flex items-end justify-end p-2">
                                        <CommentIcon className="mr-1" fontSize="small"/>
                                        <Typography variant="caption" color="text.secondary">
                                            Comentarios: {post.comments}
                                        </Typography>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-4">Artículos Recientes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articulos.map((article, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                                <CardMedia
                                    className="px-2 pt-2 lg:h-[140px] h-auto"
                                    component="img"
                                    image={article.image}
                                    alt={article.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.description}
                                    </Typography>
                                    <Rating value={article.rating} readOnly className="mt-2" />
                                </CardContent>
                                <CardActions>
                                    <button className="bg-orange-400 text-white rounded-lg hover:bg-orange-500 p-2">
                                        Leer más
                                    </button>
                                </CardActions>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}