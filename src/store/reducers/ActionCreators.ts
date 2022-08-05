import { AppDispatch } from "../store";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());
        const request = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
        dispatch(userSlice.actions.usersFetchingSuccess(request.data));
    } catch(e) {
        dispatch(userSlice.actions.usersFetchingError("Ошибка загрузки"));
    }
}