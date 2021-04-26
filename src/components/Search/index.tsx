import React from 'react';
import {
	Input,
	Button
} from '../index';

interface SearchProps {
	value: string;
	changeValue: (e: React.ChangeEvent) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Search:React.FC<SearchProps> = ({
	value,
	changeValue,
	onSubmit,
}) => {
	return (
		<form onSubmit={onSubmit} className={'searchBlock flex flex-row items-stretch justify-between w-100 border-2 border-solid border-blue-500 rounded-md'}>
			<Input value={value} onChange={changeValue} />
			<Button className={'button text-white font-bold bg-blue-500 px-2 rounded-md cursor-pointer outline-none hover:bg-blue-700 focus:outline-none transition-all'} onClick={onSubmit} />
		</form>
	)
}

export default Search;
