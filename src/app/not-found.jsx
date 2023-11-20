import Link from "next/link";

import "./not-found.scss";
const NotFound = () => {
    return (
        <div className="error-404 py-20 bg-cover flex items-center bg-black">
            <div className="container">
                <h2 className="mb-4 text-green">Lost in Space</h2>
                <p className="max-w-lg text-white">Seems like this page has taken an unexpected vacation. Perhaps try checking our homepage</p>
                <Link className="button inline-block mt-8" href="/">Back To Home</Link>
            </div>
        </div>
    )
}

export default NotFound;