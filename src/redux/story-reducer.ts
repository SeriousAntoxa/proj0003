import { newsAPI } from "../api/api"
import { StoryType } from "./news-reducer"

const SET_STORY = "proj0003/auth/SET-STORY"
const SET_COMMENTS = "proj0003/auth/SET-COMMENT"
//const SET_COMMENTS_DATA = "proj0003/auth/SET-COMMENT-DATA"

type InitialStateType = {
    story: null | StoryType
    //commentsData: any
    comments: Array<number>
}

let initialState: InitialStateType = {
    story: null,
    //commentsData: [],
    comments: []
}

const storyReducer = (state = initialState, action: any): InitialStateType => {
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
        /*case SET_COMMENTS_DATA:
            return {
                ...state,
                commentsData: [...state.commentsData, action.comment]
            }*/
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
/*
type SetCommentDataType = {
    type: typeof SET_COMMENTS_DATA
    comment: any
}

export let setCommentData = (comment: any): SetCommentDataType => {
    return {
        type: SET_COMMENTS_DATA,
        comment
    }
}

export const getCommentData = (id: number) => {
    return async (dispatch: any) => {
        let response = await newsAPI.getItem(id)
        dispatch(setCommentData(response))
    }
}*/

export const getStoryData = (id: number) => {
    return async (dispatch: any) => {
        let response = await newsAPI.getItem(id)
        dispatch(setStoryData(response))
        if (!!response.kids) {
            dispatch(setCommentsData(response.kids))
        }
    }
}