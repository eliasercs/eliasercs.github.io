export default function Construction() {
    return (
        <div className="w-full max-w-4xl h-64 rounded-2xl bg-gradient-to-r from-[#102c35] to-[#0c2430] flex items-center justify-center shadow-lg relative">

            <div className="w-24 h-24 rounded-full bg-[#0f2f34] border border-cyan-500 flex items-center justify-center text-cyan-400 text-4xl">
                🛠
            </div>

            <div className="absolute bottom-6 flex gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                <span className="w-2 h-2 bg-cyan-500 rounded-full opacity-60" />
                <span className="w-2 h-2 bg-cyan-500 rounded-full opacity-30" />
            </div>

        </div>
    )
}