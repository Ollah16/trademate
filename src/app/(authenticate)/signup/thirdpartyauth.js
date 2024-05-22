
import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const ThirdParty = () => {
    return (
        <div className="flex gap-5 w-full md:flex-row flex-col">
            <button className="rounded-3xl border border-black/70 h-fit md:w-6/12 w-full flex justify-between items-center gap-5 bg-white/20 hover:bg-gray-600/20 duration-150 ease-in-out transition-colors">
                <span className="rounded-full bg-white block p-1"> <SiApple className="text-2xl" /></span>
                <span className="text-sm">Continue with Apple</span>
                <span></span>
            </button>

            <button className="rounded-3xl border h-fit md:w-6/12 w-full flex justify-between items-center gap-5 bg-blue-500 hover:bg-blue-600 duration-150 ease-in-out transition-colors">
                <span className="rounded-full bg-white block p-1"><FcGoogle className="text-2xl" /></span>
                <span className="text-sm text-white">Continue with Google</span>
                <span></span>
            </button>
        </div>
    )
}

export default ThirdParty
