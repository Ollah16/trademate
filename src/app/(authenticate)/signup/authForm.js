import { useSelector } from "react-redux";
import ThirdParty from "./thirdpartyauth";
import AuthInputs from "./authinputs";
import PseudoOr from "./pseudoOr";

const AuthForm = () => {

    const { userType, isUserTypeClicked } = useSelector(state => state.user);

    const signupIntro = userType === 'client' ? 'Sign up to hire a contractor' : 'Sign up to secure contracts'

    return (
        <div className={`flex-col gap-5 items-center md:w-8/12 lg:w-6/12 xl:w-5/12 w-full sm:w-10/12 px-4 mx-auto my-10 justify-center ${isUserTypeClicked ? 'flex' : 'hidden'}`}>
            <h4 className="font-semibold md:text-3xl text-2xl text-center my-3">{signupIntro}</h4>

            <ThirdParty />

            <PseudoOr />
            <AuthInputs />
        </div>
    )
}

export default AuthForm
