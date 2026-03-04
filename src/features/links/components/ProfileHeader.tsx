import profileImage from "../../../assets/img/base.png"

export default function ProfileHeader() {
    return <div className="text-center mb-8">
        <div className="relative inline-block">
            <img 
                src={profileImage}
                alt="Profile Image"
                className="w-28 h-28 rounded-full border-4 border-cyan-400"
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#062a2e]" />
        </div>
        <h1 className="text-2xl font-bold mt-4 text-white">
            Eliaser Concha
        </h1>
        <p className="text-cyan-400 text-sm mt-1">
            Ingeniero Civil en Informática | Desarrollador Full-Stack
        </p>
    </div>
}