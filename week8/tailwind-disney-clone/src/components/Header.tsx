import logo from '../assets/images/logo.jpeg'
import profile from '../assets/images/profile.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import { HeaderItem } from './HeaderItem'
import { useState } from 'react'

export const Header = () => {

    const [toggle, setToggle] = useState(false)

    const menu = [{
        name: 'Home',
        icon: HiHome
    }, {
        name: 'Search',
        icon: HiMagnifyingGlass
    }, {
        name: 'Watch List',
        icon: HiPlus
    }, {
        name: 'Originals',
        icon: HiStar
    }, {
        name: 'Movies',
        icon: HiPlayCircle
    }, {
        name: 'Series',
        icon: HiTv
    }]

    return (
        <div className='flex items-center gap-8 justify-between p-3'>
            <div className='flex gap-8 items-center'>
                <img src={logo} className='w-[80px] object-cover lg:w-[100px]' />
                <div className='hidden lg:flex gap-8'>
                    {menu.map((item, index) => <HeaderItem key={index} name={item.name} Icon={item.icon} />)}
                </div>
                <div className='flex gap-8 lg:hidden'>
                    {menu.map((item, index) => {
                        if (index < 3) {
                            return <HeaderItem key={index} name={''} Icon={item.icon} />
                        }
                    })}
                </div>
                <div className='lg:hidden' onClick={() => setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical} />
                    {
                        toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-500 p-3 px-5 py-5'>
                            {menu.map((item, index) => {
                                if (index > 2) {
                                    return <HeaderItem key={index} name={item.name} Icon={item.icon} />
                                }
                            })}
                        </div> : null
                    }
                </div>
            </div>
            <img src={profile} className='w-[40px] object-cover md:w-[40px] h-[40px] rounded-full' />
        </div>
    )
}