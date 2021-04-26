import React from 'react';

interface InputProps {
	value: string;
	onChange: (e: any) => void;
	placeholder?: string;
}

const Input:React.FC<InputProps> = ({value, onChange, placeholder = 'Введите название'}) => {
	return (
		<input
			className={'w-full outline-none color-grey text-gray-900 p-2 box-border'}
			type={'text'}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		>
		</input>
	)
}

export default Input;
