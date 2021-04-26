import React from 'react';

interface ButtonProps {
	title?: string;
	onClick: (e) => void;
	className: string;
}

const Button:React.FC<ButtonProps> = ({
	title= 'Поиск',
	onClick,
	className}) => {
	return (
		<button
			className={className}
			onSubmit={onClick}
			onClick={onClick}
		>
			{title}
		</button>
	)
}

export default Button;
