import "./loading.style.scss";
const Loading = () => {
    return (
        <div className="loader flex justify-center">
        <div>
            <div className="spinner-grow text-primary m-auto" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-primary m-auto" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-primary m-auto" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        </div>
    )
}

export default Loading;