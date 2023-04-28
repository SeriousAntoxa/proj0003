import { newsAPI } from "../api/api"

const SET_NEWS = "proj0003/auth/SET-NEW"
const SET_NEW_STORY = "proj0003/auth/SET-NEW-STORY"
const SET_CLEAR_NEWS_DATA = "proj0003/auth/SET-CLEAR-NEWS-DATA"

export type StoryType = {
    by: string
    descendants: number
    id: number
    kids?: Array<number>
    score: number
    time: number
    title: string
    type: string
    url: string
}

type InitialStateType = {
    maxItem: number
    newStories: Array<number>
    news: Array<StoryType>
    countLastNews: number
}

let initialState: InitialStateType = {
    maxItem: 0,
    newStories: [],
    news: [],
    countLastNews: 20
}

const newsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...state.news, action.newsData],
            }
        case SET_NEW_STORY:
            return {
                ...state,
                newStories: action.newStories,
            }
        case SET_CLEAR_NEWS_DATA:
            return {
                ...state,
                news: [],
            }
        default: {
            return { ...state }
        }
    }
}

export default newsReducer

type SetNewsDataType = {
    type: typeof SET_NEWS
    newsData: StoryType
}

export let setNewsData = (newsData: StoryType): SetNewsDataType => {
    return {
        type: SET_NEWS,
        newsData
    }
}

type SetNewStoriesDataType = {
    type: typeof SET_NEW_STORY
    newStories: Array<number>
}

export let setNewStoriesData = (newStories: Array<number>): SetNewStoriesDataType => {
    return {
        type: SET_NEW_STORY,
        newStories
    }
}

type SetClearNewsDataType = {
    type: typeof SET_CLEAR_NEWS_DATA
}

export let setClearNewsData = (): SetClearNewsDataType => {
    return {
        type: SET_CLEAR_NEWS_DATA,
    }
}

export const getNewsData = (id: number) => {
    return async (dispatch: any) => {
        let response = await newsAPI.getItem(id)
        dispatch(setNewsData(response))
    }
}

export const getClearNewsData = () => {
    return (dispatch: any) => {
        dispatch(setClearNewsData())
    }
}

export const getNewStoriesData = () => {
    return async (dispatch: any) => {
        let newStories = await newsAPI.getNewStories()
        let d = newStories.splice(0, initialState.countLastNews)
        dispatch(setClearNewsData())
        dispatch(setNewStoriesData(d))

        /*d.forEach((newId: number) => {
            dispatch(getNewsData(newId))
        })*/
    }
}