type Props = {
    children: React.ReactNode
}

export default function Container({ children }: Props) {
    return <div className="min-h-screen bg-gradient-to-br from-[#062a2e] to-[#031b1e] flex items-center justify-center px-4">
        <div className="w-full max-w-md">{children}</div>
    </div> 
}