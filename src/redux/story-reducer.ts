import { ThunkAction } from "redux-thunk"
import { newsAPI } from "../api/api"
import { StoryType } from "./news-reducer"
import { AppStateType } from "./store"

const SET_STORY = "proj0003/auth/SET-STORY"
const SET_COMMENTS = "proj0003/auth/SET-COMMENT"

type InitialStateType = {
    story: null | StoryType
    comments: Array<number>
}

let initialState: InitialStateType = {
    story: null,
    comments: []
}

export type CommentDataType = {
    by: string
    id: number
    parent: number
    kids: Array<number>
    text: string
    time: number
    type: string
    dead?: boolean
    deleted?: boolean
}

type ActionsTypes = SetStoryDataType | SetCommentsDataType

const storyReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_STORY:
            return {
                ...state,
                story: action.story,
            }
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        default: {
            return { ...state }
        }
    }
}

export default storyReducer

type SetStoryDataType = {
    type: typeof SET_STORY
    story: StoryType
}

export let setStoryData = (story: StoryType): SetStoryDataType => {
    return {
        type: SET_STORY,
        story
    }
}

type SetCommentsDataType = {
    type: typeof SET_COMMENTS
    comments: Array<number>
}

export let setCommentsData = (comments: Array<number>): SetCommentsDataType => {
    return {
        type: SET_COMMENTS,
        comments
    }
}

type ThunkActionType = ThunkAction<Promise<any>, AppStateType, unknown, ActionsTypes>

export const getStoryData = (id: number): ThunkActionType => {
    return async (dispatch) => {
        let response = await newsAPI.getItem(id)
        dispatch(setStoryData(response))
        if (!!response.kids) {
            dispatch(setCommentsData(response.kids))
        }
    }
}