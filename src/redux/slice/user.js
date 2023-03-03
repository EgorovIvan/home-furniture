import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {ref, set} from "firebase/database"
import {db} from "../../services/firebase"

/**
 * Асинхронные запросы по пользователю
 * @type {AsyncThunk<unknown, void, {}>}
 */

/* функция регистрации/создания пользователя */
export const createUserThunk = createAsyncThunk(
    'addUserThunk',
    async ({auth, email, password}) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const userData = {
                email: res.user.email,
                id: res.user.uid,
                token: res.user.accessToken
            }
            return userData
        } catch (e) {
            console.log(e.code, e.message)
        }
    }
)

/*функция добавления/создания профиля в базе данных */
export const createProfileThunk = createAsyncThunk(
    'createProfileThunk',
    async ({profileData}) => {
        try {
            const res = await set(ref(db, 'profiles/' + profileData.id + '/userData'), {
                    name: "",
                    email: profileData.email,
                    phoneNumber: "",
                }
            )
            return res
        } catch (e) {
            console.log(e.code, e.message, profileData)
        }
    }
)

/* функция входа в личный кабинет */
export const loginThunk = createAsyncThunk(
    'loginThunk',
    async ({auth, email, password}) => {
        try {
            const userCredit = await signInWithEmailAndPassword(auth, email, password)
            const userData = {
                email: userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.user.accessToken
            }
            return userData
        } catch (e) {
            console.log(e.code, e.message)
        }
    }
)

/* функция выхода из системы */
export const logoutThunk = createAsyncThunk(
    'logoutThunk',
    async () => {
        try {
            const userData = {
                email: null,
                id: null,
                token: null
            }
            return userData
        } catch (e) {
            console.log(e)
        }
    }
)

/**
 * Slice по данным пользователя
 * @type {Slice<{id: null, email: null, token: null}, {removeUser: reducers.removeUser, addUser: (function(*, *): any)}, string>}
 */
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        id: null,
        token: null,
    },
    reducers: {
        addUser: (state, action) => {
            return state = action.payload
        },
        removeUser: (state) => {
            state.email = null
            state.id = null
            state.token = null
        }
    },
    extraReducers: {
        [createUserThunk.fulfilled]: (state, action) => {
            return state = action.payload
        },
        [createProfileThunk.fulfilled]: (state, action) => {
            return state = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            return state = action.payload
        },
		[logoutThunk.fulfilled]: (state, action) => {
			return state = action.payload
		}
    }
})

export const {addUser, removeUser} = userSlice.actions
export const userReducers = userSlice.reducer