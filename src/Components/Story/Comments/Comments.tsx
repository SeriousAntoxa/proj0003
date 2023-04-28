import React, { FC, useEffect, useReducer, useState } from "react"
import Comment from "./Comment/Comment"
import { newsAPI } from "../../../api/api"

type PropsType = {
    comments: Array<number>
}
const initialState = { commentsData: [] }

function reducer(state: any, action: any) {
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

let Comments: FC<PropsType> = (props) => {
    let [state, dispatch] = useReducer(reducer, initialState)
    let [commentsData, setCommentsData] = useState([])

    async function getCommentData(id: number) {
        let response = await newsAPI.getItem(id)
        return dispatch({ type: "add", commentsData: response })
    }

    useEffect(() => {
        props.comments.forEach((id: number) => {
            return getCommentData(id)
        })
        return dispatch({ type: "clear" })
    }, [props.comments])

    useEffect(() => {
        if (state.commentsData.length === props.comments.length) {
            setCommentsData(
                state.commentsData.map((data: any) => {
                    return (
                        <li>
                            <Comment data={data} />
                        </li>
                    )
                })
            )
        }
    }, [state.commentsData])

    return (
        <div>
            <ul>{commentsData}</ul>
        </div>
    )
}

export default Comments
