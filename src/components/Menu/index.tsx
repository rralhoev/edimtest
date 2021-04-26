import React from 'react';
import { BurgerMenu } from '..';
import './Menu.scss';

const Menu = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	return (
		<nav className={'menu flex top-0 right-0 md:block md:relative items-center justify-center'}>
			<div onClick={() => setIsOpen(!isOpen)} className={`burger relative z-10 block md:hidden ${isOpen && 'open'}`}>
				<BurgerMenu />
			</div>
			<ul className={'hidden md:flex items-center justify-end0'}>
				<li className={'menu-item cursor-pointer relative px-2 last:p-0'}>Пункт 1</li>
				<li className={'menu-item cursor-pointer relative px-2 last:p-0'}>Пункт 2</li>
				<li className={'menu-item cursor-pointer relative px-2 last:pr-0'}>Пункт 3</li>
			</ul>
			<div className={`menuPopup bg-blue-500 p-4 block md:hidden ${isOpen && 'open'}`}>
				<ul className={'flex flex-col items-start py-10 justify-start'}>
					<li className={'menu-item cursor-pointer text-white'}>Пункт 1</li>
					<li className={'menu-item cursor-pointer text-white'}>Пункт 2</li>
					<li className={'menu-item cursor-pointer text-white'}>Пункт 3</li>
				</ul>
			</div>
		</nav>
	);
}

export default Menu;
