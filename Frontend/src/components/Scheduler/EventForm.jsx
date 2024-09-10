import {OutlinedInput} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const eventSchema = yup.object().shape({
    name:yup.string()
        .matches(/^[A-Za-z ]*$/, 'Debe tener caracteres alphanuméricos')
        .max(40)
        .required("Complete el nombre"),
});

export default function EventForm(){
    const { register, handleSubmit, formState: { errors }, reset } = useForm(
        {
            resolver: yupResolver(eventSchema),
        }
    );
    const onSubmitHandler = (formData)=>{

        //TODO: Call api
        console.log(formData);

        reset();
    };
    return(
        <div className="grid gap-4 py-4">
            <div className="grid gap-2">
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>

                    <label htmlFor="event-name"
                           className="block mb-2 text-sm font-medium text-gray-900 text-left">
                        Nombre:
                    </label>
                    <OutlinedInput
                        name="event-name"
                        id="event-name"
                        type="text"
                        variant="outlined"
                        placeholder="Nombre del Evento"
                        fullWidth
                        hiddenLabel
                        color="primary"
                        {...register("name")}
                        size="small"
                    />
                    <p className="mt-2 text-sm text-red-600">{errors.name?.message}</p>
                </form>
            </div>
            <div className="grid gap-2">
                <label htmlFor="event-description"
                       className="block mb-2 text-sm font-medium text-gray-900 text-left">
                    Descripción:
                </label>

            </div>
        </div>
    )
}