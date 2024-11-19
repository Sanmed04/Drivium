export default function AutoItem({
    image,
    nombre,
    categoria,
    precio,
    id
}) {
    return (
        <a href={`/auto/${id}`} className="card w-[300px] rounded-3xl p-4 drop-shadow-xl bg-white">
            <div className="card-body pt-5">
                <div className="h-[200px] flex justify-center items-center">
                    <img
                        className="h-fit object-cover w-auto hover:scale-105 transition-all duration-300"
                        src={image}
                        alt="Auto"
                    />
                </div>

                <h5 className="card-title text-2xl font-bold">{nombre}</h5>
                <p className="card-text text-sm">{categoria}</p>
                <p className="text-2xl font-bold mt-2"> ${precio}</p>
                <button className="py-2 text-white btn btn-primary w-full mt-2 bg-blue-500 hover:bg-blue-600 rounded-xl">
                    Ver mas
                </button>
                <button className="py-2 text-white btn btn-secondary w-full mt-2 bg-green-500 hover:bg-green-600 rounded-xl">
                    Rentar
                </button>
            </div>
        </a>
    );
}
