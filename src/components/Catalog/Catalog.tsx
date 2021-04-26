import React from 'react';

export interface RecommendationsListProps {
	children: React.ReactElement[] | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export const Catalog:React.FC<RecommendationsListProps> = ({
	children
}) => {
	return (
		<div className={'catalog my-2 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-1'}>
			{children}
		</div>
	)
}
