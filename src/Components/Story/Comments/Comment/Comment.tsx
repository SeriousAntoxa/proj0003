import React, { FC, useEffect, useState } from "react"
import Comments from "../Comments"
import { CommentDataType } from "../../../../redux/story-reducer"

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
        <div>
            <div>{commentDate.by}</div>
            <div>{commentDate.text}</div>
            <div>
                {commentDate.kids ? (
                    <div>
                        <div onClick={() => toggleVisibleComments()}>
                            <p>open comment</p>
                        </div>
                        {visibleComment && (
                            <div>
                                <Comments comments={commentDate.kids} />
                            </div>
                        )}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Comment
