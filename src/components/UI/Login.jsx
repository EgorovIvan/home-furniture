import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './scss/style.scss';
import axios from "axios"


const Login = (props) => {
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const [isLoading] = useState(false)

    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('Введите данные')
        }
        const obj = {
            roomId,
            userName
        }
        await axios.post('/rooms', obj)
        props.onLogin(obj)
        props.handleClose()

    }
    return (
        <div className="login">
            <div className="leftside-menu__block">
                <button className="leftside-menu__close" onClick={props.handleClose}>
                    <img src="../images/close.svg" alt={"close"}/>
                </button>
            </div>
            <div className="login__list">
                <div className="login__list-item">
                    <TextField
                        id="outlined-basic"
                        label="Room ID"
                        variant="outlined"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}/>
                </div>
                <div className="login__list-item">
                    <TextField
                        className="login__list"
                        id="outlined-basic"
                        label="User name"
                        variant="outlined"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="login__list-item">
                    <Button disabled={isLoading} className="login__list" variant="contained" onClick={onEnter} >Войти></Button>
                </div>
            </div>
        </div>
    )
}

export default Login;