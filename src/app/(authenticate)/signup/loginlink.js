import Link from 'next/link'

const LoginLink = () => {

    return (
        <Link href={'/login'}
            className="md:underline md:text-base text-sm text-green-600 hover:text-green-600/90 transition-colors duration-200 ease-in-out">Log in</Link>
    )
}

export default LoginLink
