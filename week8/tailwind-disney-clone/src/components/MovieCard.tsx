import { IMAGE_BASE_URL } from "./Slider"

export const MovieCard = ({ movie }) => {
    return (
        <>
            <img src={IMAGE_BASE_URL + movie.poster_path}
                className="w-[100px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-500 hover:scale-110 transition-all duration-200 ease-in cursor-pointer" />
        </>
    )
}