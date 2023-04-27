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

type PropsType = {
    news: Array<StoryType>
    newStories: Array<number>
    getNewsData: (newId: number) => void
}

let News: FC<PropsType> = (props) => {
    let [newsData, setNewsData] = useState<Array<any>>([])

    useEffect(() => {
        setNewsData(
            props.news.map((data: StoryType) => {
                return (
                    <li key={data.id}>
                        <New storyData={data} />
                    </li>
                )
            })
        )
    }, [props.news])

    return (
        <div>
            <ul>{newsData}</ul>
        </div>
    )
}

export default News
