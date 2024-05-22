import { changeUserType } from "@/app/reduxtoolkit/userSlice"
import { useDispatch, useSelector } from "react-redux"

const Anylogin = () => {
    const { userType, isUserTypeClicked } = useSelector(state => state.user)
    const dispatch = useDispatch()


    return (
        <div>
            {isUserTypeClicked ?
                userType === 'contractor' ?
                    <p className='text-sm'><span>Here to hire contractor?</span>
                        <button className='text-green-600 ml-2' onClick={() => dispatch(changeUserType('client'))}> Join as a client</button></p>
                    :
                    <p className='text-sm'><span>Looking for contract?</span>
                        <button className='text-green-600 ml-2' onClick={() => dispatch(changeUserType('contractor'))}> Apply as a contractor</button></p>
                :
                ''}
        </div>
    )
}

export default Anylogin
