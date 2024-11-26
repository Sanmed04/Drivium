export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70.8vh]">
            <h1 className="text-7xl font-bold text-center mb-4 font-[Poppins]">Error 404</h1>
            <div className="w-full flex justify-center items-center">
                <img src="/images/errorImage.png" className="grayscale w-[500px]" alt="error 404" />
            </div>
        </div>
    )
}

