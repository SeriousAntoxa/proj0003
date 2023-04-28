import React, { FC, useEffect, useState } from "react"
import "./App.css"
import { connect } from "react-redux"
import {
    StoryType,
    getNewStoriesData,
    getNewsData,
    getClearNewsData,
} from "./redux/news-reducer"
import News from "./Components/News/News"
import { AppStateType } from "./redux/store"
import { Route, Routes } from "react-router-dom"
import Story from "./Components/Story/Story"
import NewsContainer from "./Components/News/NewsContainer"

let App: FC = (props) => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<NewsContainer />} />
                <Route path="/:storyId" element={<Story />} />
            </Routes>
        </div>
    )
}

export default App
