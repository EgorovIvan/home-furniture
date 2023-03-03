import React, {useEffect, useState} from "react"
import {Link, Navigate, NavLink} from "react-router-dom"
import {auth} from "../../services/firebase"
import useAuth from '../../hooks/useAuth'
import {useDispatch} from "react-redux"
import {createUserThunk, createProfileThunk} from "../../redux/slice/user"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import AccountCircle from "@mui/icons-material/AccountCircle"
import IconButton from "@mui/material/IconButton"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import Visibility from "@mui/icons-material/Visibility"
import Button from "@mui/material/Button"

/**
 * Страница регистрации пользователя
 */
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const isAuth = useAuth().isAuth
    const profileId = useAuth().id
    const profileEmail = useAuth().email
    const dispatch = useDispatch()

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    /* регистрация */
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(createUserThunk({auth, email, password}))
    }

    /* создание профиля */
    useEffect(() => {
        const profileData = {
            id: profileId,
            email: profileEmail,
        }
        dispatch(createProfileThunk({profileData}))
    }, [profileId])

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

    return !isAuth ? (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <p className="login__text">Заполните форму ниже, чтобы зарегистрировать новую учетную запись.</p>
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
                    <Button variant="contained" type="submit">Регистрация</Button>
                    <NavLink to={"/"}>
                        <Button variant="outlined">Выход</Button>
                    </NavLink>
                </div>
                <hr className="line"
                    style={{width: "100%", margin: "5px 0"}}
                />
                <p className="login__text">
                    У вас уже есть учетная запись? <Link to="/login">Авторизоваться</Link>
                </p>
            </form>
        </div>
    ) : <Navigate to='/'/>
}

export default SignUp

