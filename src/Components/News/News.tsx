import React, { FC, ReactNode, useEffect, useState } from "react"
import New from "./New/New"
import { StoryType } from "../../redux/news-reducer"

type PropsType = {
    news: Array<StoryType>
    newStories: Array<number>
    getNewsData: (newId: number) => void
}

let News: FC<PropsType> = (props) => {
    let [newsData, setNewsData] = useState<Array<ReactNode>>([])

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
