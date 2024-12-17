export default function PopupBorrar({ onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-lg">
                <p className="text-lg font-bold text-center" >¿Estás seguro?</p>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onCancel}
                        className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}
