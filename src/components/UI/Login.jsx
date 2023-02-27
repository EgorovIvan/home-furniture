import React, {useEffect, useState} from "react";
import './scss/style.scss';
import axios from 'axios';


const Login = (props) => {

    const [state, setState] = useState({})
    const [test, setTest] = useState('101')
    const [test2, setTest2] = useState('202')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Обязательное поле')
    const [passwordError, setPasswordError] = useState('Обязательное поле')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Пожалуйста, введите корректный email-адрес')
        } else {
            setEmailError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                // break
            case 'password':
                setPasswordDirty(true)
                // break
            default:

        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 || e.target.value.length > 30) {
            setPasswordError('Длина пароля должна быть от 8 до 30 символов')
            if (!e.target.value) {
                setPasswordError('Обязательное поле')
            }
        } else {
            setPasswordError('')
        }
    }

    useEffect(() => {
        setState({
            name: test,
            email: test2,
        })
        axios.post("http://jsonplaceholder.typicode.com/posts", {state}).then(res => {
            console.log(res.data)
        })
    }, [])

    const sendFormReg = async () => {
        setState({
            name: test,
            email: test2,
        })
        axios.post("http://localhost:3000/data.json", {state}).then(res => {
            console.log(res.data)
        })
    }

    return (
        <div className="login">
            <div className="leftside-menu__block">
                <button className="leftside-menu__close" onClick={props.closeFormReg}>
                    <img src="../images/close.svg" alt={"close"}/>
                </button>
            </div>
            <div className="login__list">
                <div className="login__list-item">
                    {/*<form className="reg__form" action="#">*/}
                        <label className="reg__form-title" htmlFor="email">Регистрация</label><br/>
                        <input onChange={e => emailHandler(e)}
                               onBlur={e => blurHandler(e)}
                               className="reg__form-input"
                               name='email'
                               type="email"
                               required
                               placeholder="Enter your email..."/>
                        <p className="reg__form-text">
                            {(emailDirty && emailError) && <span>{emailError}</span>}
                        </p>
                        <input onChange={e => passwordHandler(e)}
                               onBlur={e => blurHandler(e)}
                               className="reg__form-input"
                               name='password'
                               type="password"
                               required
                               placeholder="Enter your password..."/>
                        <p className="reg__form-text">
                            {(passwordDirty && passwordError) && <span>{passwordError}</span>}
                        </p>
                        <button className="reg__form-btn btn-reg"
                                disabled={!formValid}
                                type='click'
                                onClick={sendFormReg}>
                            Зарегистрироваться
                        </button>
                    {/*<button className="reg__form-btn btn-reg"*/}
                    {/*        type='click'*/}
                    {/*        onClick={sendFormReg}>*/}
                    {/*    Зарегистрироваться*/}
                    {/*</button>*/}
                    {/*</form>*/}
                </div>
            </div>
        </div>
    )
}

export default Login;