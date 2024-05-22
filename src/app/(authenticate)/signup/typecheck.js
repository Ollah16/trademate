import { changeUserType } from "@/app/reduxtoolkit/userSlice"
import { useDispatch, useSelector } from "react-redux"

const TypeCheck = () => {

    const dispatch = useDispatch()
    const userType = useSelector(state => state.user.userType)

    const userTypes = [
        { title: 'contractor', description: `I'm a contractor, looking for contracts` },
        { title: 'client', description: `I'm a client, hiring for a project` }
    ]

    return (
        <div className="flex justify-between gap-5 w-10/12">
            {userTypes.map((user, index) => (
                <button key={index} onClick={() => dispatch(changeUserType(user.title))}
                    className={`active:scale-95 transition-transform duration-150 ease-in-out
                bg-gray-100/30 border-2 ${userType === user.title && 'border-green-600'} rounded-md w-6/12 flex flex-col gap-5 h-40 py-4 pr-3 pl-5
                 border-black/20 hover:border-green-600 transition-colors duration-150`}>
                    <div className="flex justify-between w-full">
                        <span>
                            icon
                        </span>

                        <span className={`${userType === user.title && 'bg-green-500'} rounded-full border-2 border-black/10 w-6 h-6 flex justify-center items-center`}>
                            <span className={`rounded-full border w-3 h-3 block transition-colors duration-75 ease-in-out ${userType === user.title ? 'border-white' : 'border-transparent'}`}>

                            </span>
                        </span>
                    </div>

                    <div className="w-full flex justify-end">
                        <span className="text-xl font-semibold text-start">{user.description}</span>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default TypeCheck
