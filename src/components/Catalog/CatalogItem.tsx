import React from 'react';
import {
	Link
} from 'react-router-dom';
import './CatalogItem.scss';
import { Button } from "../index";

interface CatalogItemProps {
	id: string;
	image: string;
	name: string;
	category: string;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({
	id,
	image,
	name,
	category,
}) => {
	return (
		<Link to={`cocktail/${id}`} className={'catalog-item p-2 mb-4 flex flex-col items-stretch justify-between border-2 border-solid border-grey-500 rounded-md'}>
			<div className={'flex h-full flex-col items-stretch justify-between'}>
				<div className={'item-content'}>
					<div className={'catalog-image'}>
						<img className={'object-cover'} alt={'cocktail'} src={image} />
					</div>
					<h2 className={'mt-2'}>{name}</h2>
					<p>
						<b>Category:</b> {category}
					</p>
				</div>
				<Button onClick={null} title={'Посмотреть'} className={'button text-white bg-blue-500 px-2 py-2 mt-2 rounded-md cursor-pointer outline-none hover:bg-blue-700 focus:outline-none transition-all'} />
			</div>
		</Link>
	)
}
