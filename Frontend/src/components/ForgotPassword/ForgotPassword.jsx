import {Link} from "react-router-dom";

export default function ForgotPassword() {
    return (
        <div className="">
            <h1>
                Forgot Password
            </h1>
            <Link
                className="ml-2 font-medium text-primary-600 hover:underline"
                to="/login">
                Volver
            </Link>
        </div>
    )
}