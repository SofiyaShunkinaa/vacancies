import {
    ADD_JOB_TO_FAVORITE,
    REMOVE_JOB_FROM_FAVORITE,
} from "../constants/actionTypes";

export const setPersonToFavorite = (job: any) => ({
    type: ADD_JOB_TO_FAVORITE,
    payload: job,
});

export const removePersonFromFavorite = (jobId: string) => ({
    type: REMOVE_JOB_FROM_FAVORITE,
    payload: jobId,
});
