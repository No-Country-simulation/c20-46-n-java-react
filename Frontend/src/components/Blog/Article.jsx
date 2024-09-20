import { useParams } from 'react-router-dom';
import articulos from "../../api/articulos";
import SideBar from '../App/SideBar';
import Footer from '../App/Footer';
import { Rating } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const Article = () => {
    const { id } = useParams();
    const article = articulos.find(article => article.id == id);

    if (!article) {
        return <div>Artículo no encontrado</div>;
    }

    return (
        <>
            <SideBar/>
            <main className="min-h-screen container px-3 py-8" style={{ marginLeft: '4rem' }}>
                <div className="w-full mx-auto py-2 sm:px-2 lg:px-4">
                    <div className="">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-3xl font-medium text-gray-900">
                                {article.title}
                            </h2>
                            <button 
                                className="flex items-center bg-primary-500 text-white rounded-lg px-3 py-2 hover:bg-primary-500 transition duration-200"
                            >
                                <ShareIcon className="mr-2" />
                                Compartir
                            </button>
                        </div>
                        <div className="mb-8">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="rounded-lg shadow-lg w-full lg:h-[350px] h-auto"
                            />
                        </div>
                        <p className="mb-4">{article.description}</p>
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/4">
                                <h3 className="text-lg font-semibold mb-2">Rating:</h3>
                                <Rating value={article.rating} readOnly className="mt-2" />
                            </div>
                            <div className="w-full lg:w-3/4 lg:pr-4">
                                <h3 className="text-lg font-semibold mb-2">Comentarios:</h3>
                                <div className="space-y-2">
                                    {article.comentarios.map((comentario, index) => (
                                        <div key={index} className="p-2 border border-gray-300 rounded-md bg-gray-50">
                                            <p className="font-semibold">{comentario.nombre}</p>
                                            <p className="text-gray-700">{comentario.mensaje}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Article;