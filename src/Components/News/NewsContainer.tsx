import React, { FC, useEffect, useState } from "react"
import {
    getClearNewsData,
    getNewsData,
    getNewStoriesData,
    StoryType,
} from "../../redux/news-reducer"
import { connect } from "react-redux"
import { AppStateType } from "../../redux/store"
import News from "./News"
import "./News.css"

type PropsType = {
    news: Array<StoryType>
    newStories: Array<number>
    countLastNews: number
    getNewStoriesData: () => void
    getClearNewsData: () => void
    getNewsData: (newId: number) => void
}

let NewsContainer: FC<PropsType> = (props) => {
    let updateNewStories = (): void => {
        props.getNewStoriesData()
    }

    useEffect(() => {
        props.getNewStoriesData()
    }, [])

    useEffect(() => {
        let interval = setInterval(() => {
            props.getNewStoriesData()
        }, 60000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        props.newStories.forEach((newId: number) => {
            props.getNewsData(newId)
        })
    }, [props.newStories])

    return (
        <div className="news content">
            <button className="news__button button" onClick={() => updateNewStories()}>Update news</button>
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
