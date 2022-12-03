import { createSlice } from "@reduxjs/toolkit";
import { Roles, userInfo } from "../../models";
import { clearLocalStorageUser, persistLocalStorageUserState } from "../../utilities";

export const EmptyUserState: userInfo = {
    id: '',
    name: '',
    last_name: '',
    email: '',
    image: '',
    rol: Roles.EMPTY
}

export const UserKey = 'user';

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem(UserKey) ? JSON.parse(localStorage.getItem(UserKey) as string) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorageUserState<userInfo>(UserKey, action.payload)
            return action.payload
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload }
            persistLocalStorageUserState<userInfo>(UserKey, result)
            return result
        },
        resetUser: () => {
            clearLocalStorageUser(UserKey)
            return EmptyUserState
        }
    }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer