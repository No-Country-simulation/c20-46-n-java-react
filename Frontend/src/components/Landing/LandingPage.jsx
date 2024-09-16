import myImage from '../../assets/Alt3.jpeg';
import { YouTube, Instagram, Twitter, Facebook } from '@mui/icons-material';

export const LandingPage = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-center">
            <div className="absolute inset-0 z-0">
                <img
                    src={myImage}
                    alt="Fondo abstracto con personas y naturaleza"/>
            </div>
            <div className="relative z-10 text-white max-w-2xl px-6 py-8 bg-black bg-opacity-50 rounded-lg ml-8 mr-8 md:ml-16 lg:ml-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Bienvenido a Nuestro Mundo</h2>
                <p className="mb-6 text-lg md:text-xl">Explora la belleza interconectada de la humanidad y la naturaleza.</p>
                <div className="flex justify-between items-center mt-6">
                    <div className="flex space-x-4">
                        <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300">
                            <YouTube fontSize="small" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
                            <Instagram fontSize="small" />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300">
                            <Twitter fontSize="small" />
                        </a>
                        <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300">
                            <Facebook fontSize="small" />
                        </a>
                    </div>
                    <button className="bg-primary-500 text-white rounded-lg p-3 hover:bg-primary-400">
                        Saber Más
                    </button>
                </div>
            </div>
        </div>
    )
}