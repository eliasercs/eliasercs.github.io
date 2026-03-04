import Construction from "../components/Construction"
import ProgressCard from "../components/ProgressCard"

export default function UnderConstructionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#062a2e] to-[#031b1e] flex flex-col items-center justify-center px-4 text-center">

            <Construction />

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-10">
                Página en Construcción
            </h1>

            <p className="text-gray-400 mt-4 max-w-xl">
                Estamos trabajando en algo increíble para mostrarte mis mejores
                proyectos y habilidades. ¡Vuelve pronto!
            </p>

            <div className="mt-10 w-full max-w-xl">
                <ProgressCard progress={75} />
            </div>

            <div className="mt-10 flex gap-4 flex-wrap justify-center">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition">
                    ← Volver al Inicio
                </button>

                <button className="bg-[#1c2f35] hover:bg-[#243f46] text-white px-6 py-3 rounded-lg transition border border-gray-600">
                    ✉ Notificarme cuando esté listo
                </button>
            </div>
        </div>
    )
}