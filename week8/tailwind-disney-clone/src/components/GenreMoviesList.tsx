import { genre } from "../data/GenreList"
import { MovieList } from "./MovieList"

export const GenreMoviesList = () => {
    return (
        <div>
            {
                genre.map((item, index): any => (
                    <div className="p-8 px-8 md:px-16 ml-3" key={index}>
                        <h2 className="text-white font-semibold text-[20px]">{item.name}</h2>
                        <MovieList key={item.id} genreId={item.id} />
                    </div>
                ))
            }
        </div>
    )
}