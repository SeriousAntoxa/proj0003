import React, { FC } from "react"
import { StoryType } from "../../../redux/news-reducer"
import { Link } from "react-router-dom"

type PropsType = {
    storyData: StoryType
}

let New: FC<PropsType> = (props) => {
    let story: StoryType = props.storyData

    let date: Date = new Date(story.time * 1000)
    let time: string  = date.toLocaleString()

    let path: string = `/${story.id}`

    return (
        <Link to={path}>
            <div>
                <p>title: {story.title}</p>
                <p>score: {story.score}</p>
                <p>publisher: {story.by}</p>
                <p>time: {time}</p>
                <p>comments: {story.descendants}</p>
            </div>
        </Link>
    )
}

export default New
