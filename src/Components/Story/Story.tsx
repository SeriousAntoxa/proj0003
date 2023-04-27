import React, { FC, useEffect, useState } from "react"
import { StoryType } from "../../redux/news-reducer"
import { Link, useParams } from "react-router-dom"
import { connect } from "react-redux"
import { getStoryData } from "../../redux/story-reducer"
import { AppStateType } from "../../redux/store"
import Comments from "./Comments/Comments"

type QuizParams = {
    storyId: string | undefined
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

let Story: FC<PropsType> = (props) => {
    let { storyId } = useParams<QuizParams>()

    useEffect(() => {
        if (storyId !== undefined) {
            props.getStoryData(Number(storyId))
        }
    }, [])

    if (props.story !== null) {
        let story = props.story
        let date = new Date(story.time * 1000)
        let time = date.toLocaleString()

        return (
            <div>
                <Link to="/">back</Link>
                <div>
            <p>title: {story.title}</p>
            <p>score: {story.score}</p>
            <p>publisher: {story.by}</p>
            <p>time: {time}</p>
            <div>
                <p>comments:</p>
                <div>
                    {story.kids ? (
                        <Comments comments={props.comments} />
                    ) : (
                        "No comments"
                    )}
                </div>
            </div>
        </div>
        </div>
            
        )
    } else {
        return <></>
    }
}

type MapStateToPropsType = {
    story: null | StoryType
    //commentsData: any
    comments: Array<number>
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    story: state.story.story,
    //commentsData: state.story.commentsData,
    comments: state.story.comments,
})

type MapDispatchToPropsType = {
    getStoryData: (id: number) => void
    //getCommentData: (id: number) => void
}

export default connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    any,
    AppStateType
>(mapStateToProps, { getStoryData })(Story)
