import axios from "axios"
import { StoryType } from "../redux/news-reducer"

const instants = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/"
})

export const newsAPI = {
    getItem(id: number) {
        return instants.get<StoryType>(`item/${id}.json`).then(res => res.data)
    },
    getNewStories() {
        return instants.get<Array<number>>(`newstories.json`).then(res => res.data)
    }
}
