import Link from "next/link"

const LoginAlt = () => {
    return (
        <p>Already have an account? <Link href={'/login'}
            className="underline text-green-600 hover:text-green-600/90 transition-colors duration-200 ease-in-out">Log in</Link></p>
    )
}

export default LoginAlt
