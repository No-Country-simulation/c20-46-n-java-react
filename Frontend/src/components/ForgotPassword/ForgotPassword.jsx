import {Link} from "react-router-dom";
import {OutlinedInput} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const forgotPasswordSchema = yup.object().shape({
    email:yup.string()
        .email("Formato incorrecto de email")
        .required("Complete el email")
});
export default function ForgotPassword({onLoginClick}) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(forgotPasswordSchema),
        }
    );
    const onSubmitHandler = (formData)=>{

        //Call api
        console.log(formData);

        reset();
    };
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <div className="w-full">
                <div className="p-6 space-y-4 md:space-y-6">
                    <h1 className="text-xl text-left font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Recuperación de contraseña
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
                        <p className="">
                            Te enviaremos un correo con un link para que puedas recuperar tu contraseña.
                        </p>
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
                                {...register("email")}
                                size="small"
                            />
                            <p className="mt-2 text-sm text-red-600">{errors.email?.message}</p>
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="ml-2 font-medium text-primary-600 hover:underline"
                                onClick={onLoginClick}>
                                Volver
                            </button>
                            <button
                                type="submit"
                                className="flex items-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5"
                            >
                                <SendIcon className="mr-2" fontSize="small" />
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}