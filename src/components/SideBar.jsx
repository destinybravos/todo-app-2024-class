import { Link } from 'react-router-dom';
import UserImage from '../assets/images/destinyb.jpg';
import { FaSearch } from 'react-icons/fa';
import { FaListCheck } from 'react-icons/fa6';
import { MdOutlineImportantDevices } from "react-icons/md";

const SideBar = () => {
    return (
        <div className="h-full flex flex-col justify-between">
            {/* Logo | Active User */}
            <section className='px-4 py-2'>
                <div className="flex gap-2 items-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                        <img src={UserImage} alt="user image" className='object-cover' />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-black">Destiny Brotobor</h1>
                        <p className="text-slate-700 text-xs italic">destiny@procity.com</p>
                    </div>
                </div>
                <div className='bg-white flex items-center rounded-md overflow-hidden'>
                    <input type="text" placeholder="Search" className='px-3 py-1 w-full flex-1' />
                    <button className='px-3 py-1'>
                        <FaSearch />
                    </button>
                </div>
            </section>

            {/* Navigation | Menu */}
            <section className='flex-1 overflow-auto'>
                <ul>
                    <li>
                        <Link to="/todo" className='flex items-center gap-2 px-4 py-2 hover:bg-slate-200'>
                            <FaListCheck />
                            <span>My Day</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/important" className='flex items-center gap-2 px-4 py-2 hover:bg-slate-200'>
                            <MdOutlineImportantDevices />
                            <span>Important</span>
                        </Link>
                    </li>
                </ul>
            </section>

            {/* Small Info */}
            <section>
                <div className="px-4 py-2">
                    <p className="text-sm text-slate-700">You have 2 tasks</p>
                </div>
            </section>
        </div>
    )
}

export default SideBar