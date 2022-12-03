import React from 'react';
import { BsFillCaretDownFill, BsFillCartFill, BsCart, BsHeart } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { AuthRoutes } from '../../models';
export interface NavBarInterface {}

const NavBar : React.FC<NavBarInterface> = () => {
	return (
		<div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
			{/* Left side */}
			<div className='flex items-center flex-wrap'>
				<h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
					GDS <span className='font-bold'>SAP</span>
				</h1>
				<button className='bg-black text-white hidden md:flex items-center py-2 m-1 rounded-full'>
					Categories <BsFillCaretDownFill color='white' />
				</button>
			</div>

			{/* Search Input */}

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search foods'/>
            </div>

			{/* Cart button */}
            <div className='flex justify-between items-center'>
				<div className='bg-white text-black border-white hidden md:flex py-2 m-1 rounded-full'>
					<BsHeart size={35} />
				</div>
				<div className='bg-white text-black border-white hidden md:flex py-2 m-1 rounded-full'>
					<BsCart size={35} />
				</div>
                <button className='bg-black text-white hidden md:flex py-2 m-1 rounded-full'>
                    <Link replace to={`${AuthRoutes.AUTH}/${AuthRoutes.REGISTER}`}>
						Register
					</Link>
                </button>
                <button className='bg-black text-white hidden md:flex py-2 m-1 rounded-full'>
					<Link replace to={`${AuthRoutes.AUTH}/${AuthRoutes.LOGIN}`}>
						LogIn
					</Link>
                </button>
            </div>
		</div>
	);
};

export default NavBar;
