import {Link} from "react-router-dom";
import * as yup from "yup";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const loginSchema = yup.object().shape({
    email:yup.string()
        .email("Formato incorrecto de email")
        .required("Complete el email"),
    password: yup.string()
        .required('Complete la contraseña')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Debe tener un mínimo de 8 caracteres y contener al menos una letra mayúscula, una minúscula, un número y un carácter especial."
        )
});
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { login, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(loginSchema),
        }
    );
    const onSubmitHandler = (formData)=>{

        //Call api
        console.log(formData);

        reset();
    };
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            {/*Form Container*/}
            <div className="w-full rounded-lg shadow">
                <div className="p-6 space-y-4 md:space-y-6">
                    <h1 className="text-xl text-left font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Ingresa a tu cuenta
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 text-left">
                                Email:
                            </label>
                            <input type="email"
                                   name="email"
                                   id="email"
                                   className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block"
                                   placeholder="name@company.com"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900">
                                Contraseña:
                            </label>
                            <input type="password"
                                   name="password"
                                   id="password"
                                   placeholder="••••••••"
                                   className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                                   required/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember"
                                           aria-describedby="remember"
                                           type="checkbox"
                                           className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                           required/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="remember"
                                        className="text-gray-500">
                                        Recordarme
                                    </label>
                                </div>
                            </div>
                            <Link
                                className="ml-2 font-medium text-primary-600 hover:underline"
                                to="/forgotpass">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <button type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Ingresar
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            ¿No tenés cuenta todavía?
                            <Link
                                className="ml-2 font-medium text-primary-600 hover:underline"
                                to="/register">
                                Registrate
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}