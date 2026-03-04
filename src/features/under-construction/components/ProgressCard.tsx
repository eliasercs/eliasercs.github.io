type Props = {
    progress: number
}

export default function ProgressCard({ progress }: Props) {
    return (
        <div className="bg-[#0f2a33] rounded-xl p-6 text-left shadow-md border border-[#123a40]">

            <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-300 tracking-wide">
                    ESTADO DEL PROYECTO
                </span>

                <span className="text-cyan-400 font-semibold">
                    {progress}% Completado
                </span>
            </div>

            <div className="w-full bg-[#1b3942] rounded-full h-2">
                <div
                    className="bg-cyan-500 h-2 rounded-full transition-all duration-700"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <p className="text-gray-400 text-sm mt-4">
                📅 Lanzamiento estimado: Próximas semanas
            </p>
        </div>
    )
}