import React, { FC, useEffect, useState } from "react"
import { StoryType } from "../../redux/news-reducer"
import { Link, useNavigate, useParams } from "react-router-dom"
import { connect } from "react-redux"
import { getStoryData } from "../../redux/story-reducer"
import { AppStateType } from "../../redux/store"
import Comments from "./Comments/Comments"
import "./Story.css"

type LinkParams = {
    storyId: string | undefined
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

let Story: FC<PropsType> = (props) => {
    let navigate = useNavigate()
    let { storyId } = useParams<LinkParams>()

    let updateStoryDate = (): void => {
        props.getStoryData(Number(storyId))
    }

    useEffect(() => {
        if (storyId !== undefined) {
            props.getStoryData(Number(storyId))
        }
    }, [])

    if (props.story !== null) {
        let story: StoryType = props.story
        let date: Date = new Date(story.time * 1000)
        let time: string = date.toLocaleString()

        return (
            <div className="story content">
                <button
                    className="story__button button"
                    onClick={() => navigate("/")}
                >
                    Back
                </button>
                <div className="story__block block">
                    <div className="story__main-info">
                        <p className="story-main__title">
                            Title: {story.title}
                        </p>
                    </div>
                    <div className="story__rest-info">
                        <p className="story-rest__point">
                            Score: {story.score}
                        </p>
                        <p className="story-rest__point">
                            Publisher: {story.by}
                        </p>
                        <p className="story-rest__point">Time: {time}</p>
                        <p className="story-rest__point">
                            Link: <a className="story-rest__link" href={story.url}>{story.url}</a>
                        </p>
                        <p className="story-rest__point">
                            Comments: {story.descendants}{" "}
                            <button className="story-rest__button"
                                onClick={() => {
                                    updateStoryDate()
                                }}
                            >
                                Update
                            </button>
                        </p>
                    </div>
                    <div className="story__comments">
                        {story.kids ? (
                            <Comments comments={props.comments} />
                        ) : (
                            <></>
                        )}
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
    comments: Array<number>
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    story: state.story.story,
    comments: state.story.comments,
})

type MapDispatchToPropsType = {
    getStoryData: (id: number) => void
}

export default connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    any,
    AppStateType
>(mapStateToProps, { getStoryData })(Story)
