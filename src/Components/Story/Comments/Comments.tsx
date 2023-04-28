import React, { FC, ReactNode, useEffect, useReducer, useState } from "react"
import Comment from "./Comment/Comment"
import { newsAPI } from "../../../api/api"
import { CommentDataType } from "../../../redux/story-reducer"
import "./Comment.css"

type InitialStateType = typeof initialState

const initialState = { commentsData: [] as Array<CommentDataType> }

function reducer(state = initialState, action: any): InitialStateType {
    switch (action.type) {
        case "add":
            return {
                commentsData: [...state.commentsData, action.commentsData],
            }
        case "clear":
            return {
                commentsData: [],
            }
        default:
            return state
    }
}

type PropsType = {
    comments: Array<number>
}

let Comments: FC<PropsType> = (props) => {
    let [state, dispatch] = useReducer(reducer, initialState)
    let [commentsData, setCommentsData] = useState<Array<ReactNode>>([])

    async function getCommentData(id: number) {
        let response = await newsAPI.getItem(id)
        return dispatch({ type: "add", commentsData: response })
    }

    useEffect(() => {
        props.comments.forEach((id: number) => {
            getCommentData(id)
        })
        return dispatch({ type: "clear" })
    }, [props.comments])

    useEffect(() => {
        if (state.commentsData.length === props.comments.length) {
            setCommentsData(
                state.commentsData.map((commentData: CommentDataType) => {
                    if (!!commentData.dead || !!commentData.deleted) {
                    } else {
                        return (
                            <li className="comments__item">
                                <Comment commentData={commentData} />
                            </li>
                        )
                    }
                })
            )
        }
    }, [state.commentsData])

    return (
        <div className="comments__items">
            <ul>{commentsData}</ul>
        </div>
    )
}

export default Comments
