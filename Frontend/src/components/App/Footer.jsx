
export default function Footer(){
    return (
        <footer className="bg-gray-600 text-white py-4 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm mb-2 sm:mb-0">© 2024 MindMates. Todos los derechos reservados.</p>
                <div className="flex space-x-4">
                <a href="#" className="text-sm text-gray-300 hover:text-white">Política de Privacidad</a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">Términos de Servicio</a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">Contacto</a>
                </div>
            </div>
            <p className="text-sm mt-2 text-center sm:text-left">MindMates: Tu espacio seguro para el bienestar emocional.</p>
            </div>
        </footer>
    )
}