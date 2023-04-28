import React, { FC } from "react"
import { StoryType } from "../../../redux/news-reducer"
import { Link } from "react-router-dom"
import "./New.css"

type PropsType = {
    storyData: StoryType
    index: number
}

let New: FC<PropsType> = (props) => {
    let story: StoryType = props.storyData

    let date: Date = new Date(story.time * 1000)
    let time: string = date.toLocaleString()

    let path: string = `/${story.id}`

    return (
        <Link to={path} className="item__link">
            <div className="item__block">
                <div className="item__index">
                    <p>{props.index}.</p>
                </div>
                <div className="item__desc">
                    <div className="item__main-info">
                        <p className="item-main__title">{story.title}</p>
                        <p className="item-main__publisher">( by {story.by} )</p>
                    </div>
                    <div className="item__rest-info">
                        <p className="item-rest__point">score: {story.score}</p>
                        <p className="item-rest__point">time: {time}</p>
                        <p className="item-rest__point">
                            comments: {story.descendants}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default New
