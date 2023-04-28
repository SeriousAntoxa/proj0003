import React, { FC } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Story from "./Components/Story/Story"
import NewsContainer from "./Components/News/NewsContainer"

let App: FC = (props) => {
    return (
        <div className="wrapper">
            <div className="container">
                <div>
                    <header className="header">
                        <p className="title">Hacker News</p>
                    </header>
                </div>
                <Routes>
                    <Route path="/" element={<NewsContainer />} />
                    <Route path="/:storyId" element={<Story />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
