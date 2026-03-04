import type { ReactNode } from "react"

type Props = {
    icon: ReactNode,
    title: string,
    href?: string,
    highlighted?: boolean
}

export default function LinkCard({ icon, title, href, highlighted }: Props) {

    const baseStyle = "flex items-center justify-between p-4 rounded-x1 transition-all duration-300"

    const styles = highlighted 
        ? "bg-cyan-500 text-white shadow-lg"
        : "bg-[#0f2f34] text-gray-200 hover:bg-[#123a40]"

    return <a href={href} className={`${baseStyle} ${styles}`}>
        <div className="flex items-center gap-3">
            {icon}
            <span className="font-medium">{title}</span>
        </div>
    </a> 
}