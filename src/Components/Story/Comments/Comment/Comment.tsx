import React, { FC, useEffect, useState } from "react"
import Comments from "../Comments"

type PropsType = {
    data: any
}

let Comment: FC<PropsType> = (props) => {
    let [visibleComment, setVisibleComment] = useState(false)

    let toggleVisibleComments = () => {
        setVisibleComment(!visibleComment)
    }

    return (
        <div>
            <div>{props.data.by}</div>
            <div>{props.data.text}</div>
            <div>
                {props.data.kids ? (
                    <div>
                        <div onClick={() => toggleVisibleComments()}>
                            <p>open comment</p>
                        </div>
                        {visibleComment && (
                            <div>
                                <Comments comments={props.data.kids} />
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
