import React, { FC, useEffect, useState } from "react"
import Comments from "../Comments"
import { CommentDataType } from "../../../../redux/story-reducer"
import "./CommentData.css"

type PropsType = {
    commentData: CommentDataType
}

let Comment: FC<PropsType> = (props) => {
    let commentDate: CommentDataType = props.commentData
    let [visibleComment, setVisibleComment] = useState<boolean>(false)

    let toggleVisibleComments = (): void => {
        setVisibleComment(!visibleComment)
    }

    return (
        <div className="comment">
            <div className="comment__publisher">
                <p>{commentDate.by}</p>
            </div>
            <div className="comment__text">
                <p>{commentDate.text}</p>
            </div>

            {commentDate.kids ? (
                <div className="comment__next">
                    <button className="comment__button" onClick={() => toggleVisibleComments()}>
                        Next comment
                    </button>
                    <>
                        {visibleComment && (
                            <Comments comments={commentDate.kids} />
                        )}
                    </>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Comment
