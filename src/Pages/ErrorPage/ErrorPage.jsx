import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    //useRouter Error
    const error = useRouteError()


    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <div className="space-y-5 text-center">
                <h1 className="text-2xl font-bold">Oops!</h1>
                <p className="font-semibold">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i className="text-red-500">{error.statusText || error.message}</i>
                </p>

                <Link to={"/"} className="btn btn-outline mx-auto btn-secondary">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;