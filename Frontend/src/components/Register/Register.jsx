import {Link} from "react-router-dom";
import {IconButton, InputAdornment, OutlinedInput, TextField} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useState} from "react";

const registerSchema = yup.object().shape({
    name:yup.string()
        .matches(/^[A-Za-z ]*$/, 'Debe tener caracteres alphanuméricos')
        .max(40)
        .required("Complete el nombre"),
    email:yup.string()
        .email("Formato incorrecto de email")
        .required("Complete el email"),
    password: yup.string()
        .required('Complete la contraseña')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Debe tener un mínimo de 8 caracteres y contener al menos una letra mayúscula, una minúscula, un número y un carácter especial."
        ),
    confirmPassword: yup.string()
        .required('Complete de nuevo la contraseña')
        .oneOf([yup.ref('password')], 'Ambas contraseñas deben coincidir')
});

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(registerSchema),
        }
    );
    const onSubmitHandler = (formData)=>{

        //TODO: Call api
        console.log(formData);

        reset();
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            {/*Form Container*/}
            <div className="w-full rounded-lg shadow">
                <div className="p-6 space-y-4 md:space-y-6">
                    <h1 className="text-xl text-left font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Registra tu cuenta
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
                        <div>
                            <label htmlFor="name"
                                   className="block mb-2 text-sm font-medium text-gray-900 text-left">
                                Nombre Completo:
                            </label>
                            <OutlinedInput
                                name="name"
                                id="name"
                                type="text"
                                variant="outlined"
                                placeholder="Bill Gates"
                                fullWidth
                                hiddenLabel
                                color="primary"
                                required
                                {...register("name")}
                                size="small"
                            />
                            <p className="mt-2 text-sm text-red-600">{errors.name?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 text-left">
                                Email:
                            </label>
                            <OutlinedInput
                                name="email"
                                id="email"
                                type="email"
                                variant="outlined"
                                placeholder="name@company.com"
                                fullWidth
                                hiddenLabel
                                color="primary"
                                required
                                {...register("email")}
                                size="small"
                            />
                            <p className="mt-2 text-sm text-red-600">{errors.email?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900">
                                Contraseña:
                            </label>
                            <OutlinedInput
                                name="password"
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                placeholder="••••••••"
                                fullWidth
                                hiddenLabel
                                color="primary"
                                required
                                {...register("password")}
                                size="small"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                            aria-label="toggle password visibility"
                                        >
                                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <p className="mt-2 text-sm text-red-600">{errors.password?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword"
                                   className="block mb-2 text-sm font-medium text-gray-900">
                                Repite contraseña:
                            </label>
                            <OutlinedInput
                                id="confirmPassword"
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                placeholder="••••••••"
                                fullWidth
                                hiddenLabel
                                color="primary"
                                required
                                {...register("confirmPassword")}
                                size="small"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                            aria-label="toggle password visibility"
                                        >
                                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <p className="mt-2 text-sm text-red-600">{errors.confirmPassword?.message}</p>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0">
                            <button type="button"
                                    className="w-full lg:w-1/2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center">
                                <svg
                                    aria-hidden="true"
                                    className="native svg-icon iconGoogle mr-2"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        fill="#4285F4"
                                        d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.8 4.8 0 0 1 4.48-3.3"
                                    />
                                </svg>
                                Registrarse con Google
                            </button>
                            <button type="submit"
                                    className="w-full lg:w-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Registrar
                            </button>
                        </div>
                        <Link
                            className="ml-2 font-medium text-primary-600 hover:underline"
                            to="/login">
                            Volver
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}