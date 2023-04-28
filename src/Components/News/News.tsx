import React, { FC, ReactNode, useEffect, useState } from "react"
import New from "./New/New"
import { StoryType } from "../../redux/news-reducer"
import "./News.css"

type PropsType = {
    news: Array<StoryType>
    newStories: Array<number>
    getNewsData: (newId: number) => void
}

let News: FC<PropsType> = (props) => {
    let [newsData, setNewsData] = useState<Array<ReactNode>>([])

    useEffect(() => {
        setNewsData(
            props.news.map((data: StoryType, index: number) => {
                return (
                    <li className="news__item" key={data.id}>
                        <New storyData={data} index={index+1}/>
                    </li>
                )
            })
        )
    }, [props.news])

    return (
        <div className="news__block block">
            <ul className="news__items">{newsData}</ul>
        </div>
    )
}

export default News
