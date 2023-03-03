import { useSelector, shallowEqual } from "react-redux"
import getUser from '../redux/store/user/selectors'

/**
 * Хук по аутентификации
 * @returns {{isAuth: boolean, id, email, token}}
 */
const useAuth = () => {
    const {email,token,id} = useSelector(getUser, shallowEqual)

    return (
        {
            /* проверка аутентификации по email */
            isAuth: email ? true : false,
            email,
            token,
            id
        }
    )
}

export default useAuth