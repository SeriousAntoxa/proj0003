import React, { FC, useEffect, useState } from "react"
import New from "./New/New"
import {
    getClearNewsData,
    getNewsData,
    getNewStoriesData,
    StoryType,
} from "../../redux/news-reducer"
import { connect } from "react-redux"
import { AppStateType } from "../../redux/store"
import News from "./News"

type PropsType = {
    news: Array<StoryType>
    newStories: Array<number>
    countLastNews: number
    getNewStoriesData: () => void
    getClearNewsData: () => void
    getNewsData: (newId: number) => void
}

let NewsContainer: FC<PropsType> = (props) => {
    let [newStories, setNewStories] = useState(props.newStories)

    useEffect(() => {
        props.getNewStoriesData()
    }, [])
    useEffect(() => {
        setNewStories(props.newStories)
        props.newStories.forEach((newId: number) => {
            return props.getNewsData(newId)
        })
    }, [])
    useEffect(() => {
        setInterval(() => {
            props.getNewStoriesData()
        }, 20000)
    }, [])

    return (
        <div>
            <News
                news={props.news}
                getNewsData={props.getNewsData}
                newStories={props.newStories}
            />
        </div>
    )
}

type MapStateToPropsType = {
    newStories: Array<number>
    news: Array<StoryType>
    countLastNews: number
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    newStories: state.news.newStories,
    news: state.news.news,
    countLastNews: state.news.countLastNews,
})

type MapDispatchToPropsType = {
    getNewStoriesData: () => void
    getNewsData: (newId: number) => void
    getClearNewsData: () => void
}

export default connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    any,
    AppStateType
>(mapStateToProps, { getNewStoriesData, getNewsData, getClearNewsData })(
    NewsContainer
)
