import { useEffect, useRef, useState } from "react"
import trendingVideos from "../services/GlobalAPI"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/'
const screenWidth = window.innerWidth

export const Slider = () => {

    const [movies, setMovies] = useState([])
    const slideReference = useRef(null)

    useEffect(() => {
        trendingVideos.then((res): any => {
            console.log(res.data.results)
            setMovies(res.data.results)
        })
    }, [])

    const slideRight = (element): any => {
        element.scrollLeft += screenWidth - 100
    }

    const slideLeft = (element): any => {
        element.scrollLeft -= screenWidth - 105
    }

    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[35px] absolute mx-8 mt-[200px] cursor-pointer left-2" onClick={() => slideLeft(slideReference.current)} />
            <HiChevronRight className="hidden md:block text-white text-[35px] absolute mx-8 mt-[200px] cursor-pointer right-0" onClick={() => slideRight(slideReference.current)} />

            <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={slideReference}>
                {
                    movies.map((item: any, index: number): any => (
                        <img src={IMAGE_BASE_URL + item.backdrop_path} key={index}
                            className="min-w-full  md:object-cover h-[400px] object-top ml-2 mr-5 rounded-lg hover:border-[2px] border-gray-500 transition-all duration-100 ease-in-out" />
                    ))
                }
            </div>
        </div>
    )
}