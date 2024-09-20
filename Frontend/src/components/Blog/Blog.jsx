import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material"
import SideBar from "../App/SideBar"
import CommentIcon from '@mui/icons-material/Comment';
import Footer from "../App/Footer";
import { useState, useEffect } from "react";
import articulos from "../../api/articulos";
import categories from "../../api/categories";
import posts from "../../api/posts";
import { useAuth } from "../../hooks/AuthProvider";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Blog(){
    const { token} = useAuth();
    const navigate = useNavigate();

    if (!token) {
        return <Navigate to="/" replace/>;
    }
    
    return(
        <>
            <SideBar/>
            <main className="min-h-screen container px-3 py-8" style={{ marginLeft: '4rem' }}>
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
                                    <Typography 
                                        variant="body2" 
                                        color="text.secondary" 
                                        style={{
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            maxWidth: '100%',
                                        }}
                                    >
                                        {article.description}
                                    </Typography>
                                    <Rating value={article.rating} readOnly className="mt-2" />
                                </CardContent>
                                <CardActions>
                                    <button 
                                         onClick={() => navigate(`/blog/${article.id}`)} 
                                        className="bg-orange-400 text-white rounded-lg hover:bg-orange-500 p-2">
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