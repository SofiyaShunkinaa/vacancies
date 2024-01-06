import {
    ADD_JOB_TO_FAVORITE,
    REMOVE_JOB_FROM_FAVORITE,
} from "../constants/actionTypes";
import { getLocalStorage } from "../../utils/localStorage";

const initialState = getLocalStorage("store");

const favoriteReducer = (state = initialState, action: {type: string, payload: any})=> {
    switch (action.type) {
        case ADD_JOB_TO_FAVORITE:
            return {
                ...state,
                ...action.payload,
            };
        case REMOVE_JOB_FROM_FAVORITE:
            const { [action.payload]: obj, ...rest } = state;
            return {
                ...rest,
            };
        default:
            return state;
    }
};

export default favoriteReducer;
