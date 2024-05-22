import { useSelector } from "react-redux";
import ThirdParty from "./thirdpartyauth";
import AuthInputs from "./authinputs";

const AuthForm = () => {

    const { userType, isUserTypeClicked } = useSelector(state => state.user);

    const signupIntro = userType === 'client' ? 'Sign up to hire a contractor' : 'Sign up to secure contracts'

    return (
        <div className={`flex-col gap-5 items-center md:w-8/12 lg:w-6/12 xl:w-5/12 w-full sm:w-10/12 px-4 mx-auto my-10 justify-center ${isUserTypeClicked ? 'flex' : 'hidden'}`}>
            <h4 className="font-semibold text-3xl text-center my-3">{signupIntro}</h4>

            <ThirdParty />

            <span className={`flex items-center justify-center gap-2 w-full px-3
            before:inline-block before:content-[''] before:w-6/12 before:bg-black/20 before:h-[.5px] 
            after:inline-block after:content-[''] after:w-6/12 after:bg-black/20 after:h-[.5px]`}>or</span>
            <AuthInputs />
        </div>
    )
}

export default AuthForm
