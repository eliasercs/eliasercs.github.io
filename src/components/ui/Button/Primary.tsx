type Props = {
    children: React.ReactNode,
}

export default function PrimaryButton({ children }: Props) {
    return <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-full transition-all">
        {children}
    </button>
}