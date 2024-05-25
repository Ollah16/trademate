import Link from "next/link"

const LoginFooter = () => {
    return (
        <div className="py-10 bg-black w-11/12 rounded-lg">
            <p className="text-xs text-center text-white">© {new Date().getFullYear()} ProExchange • <Link href={'/'}>Privacy Policy</Link></p>
        </div >
    )
}

export default LoginFooter
