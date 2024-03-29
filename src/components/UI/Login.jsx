import React, {useState} from "react"
import {Link, NavLink, useNavigate} from "react-router-dom"
import useAuth from '../../hooks/useAuth'
import {useDispatch} from 'react-redux'
import {loginThunk} from "../../redux/slice/user"
import {auth} from "../../services/firebase"
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import AccountCircle from '@mui/icons-material/AccountCircle'

/**
 * Страница авторизации пользователя
 */
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const isAuth = useAuth().isAuth
    const dispatch = useDispatch()

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    /* аутентификация */
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginThunk({auth, email, password}))
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (e) => {
        e.preventDefault()
    }

    return !isAuth ? (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <p className="login__text">
                    Заполните форму ниже, чтобы войти в свою учетную запись.
                </p>
                <div className="login__input">
                    <OutlinedInput
                        id="outlined-size-small"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleEmailChange}
                        value={email}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle/>
                            </InputAdornment>
                        }
                        fullWidth
                        color='secondary'
                        sx={{
                            color: '#b252e1',
                            backgroundColor: '#FFFFFF'
                        }}
                    />
                </div>
                <div className="login__input">
                    <OutlinedInput
                        id="outlined-size-small"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePassChange}
                        placeholder="Password"
                        name="password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        fullWidth
                        color='secondary'
                        sx={{
                            color: '#b252e1',
                            backgroundColor: '#FFFFFF'
                        }}
                    />
                </div>
                <div className="login__btns">
                    <Button variant="contained" type="submit">Авторизоваться</Button>
                    <NavLink to={"/"}>
                        <Button variant="outlined">Выход</Button>
                    </NavLink>
                </div>
                <hr className="line"
                    style={{width: "100%", margin: "5px 0"}}
                />
                <p className="login__text">
                    У вас нет учетной записи? <Link to="/sign_up">Зарегистрироваться</Link>
                </p>
            </form>
        </div>
    ) : navigate(-1)
}

export default Login