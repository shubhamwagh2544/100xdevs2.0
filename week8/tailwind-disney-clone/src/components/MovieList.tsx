import { useEffect, useState } from "react"
import { getMoviesByGenreId } from "../services/GlobalAPI"
import { MovieCard } from "./MovieCard"

export const MovieList = ({ genreId }) => {

    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        getMoviesByGenreId(genreId)
            .then((res) => {
                console.log(res.data.results)
                setMoviesList(res.data.results)
            })
    })

    return (
        <div className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 pb-5">
            {
                moviesList.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))
            }
        </div>
    )
}