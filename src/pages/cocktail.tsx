import React from 'react';
import {
	Link,
	useParams
} from 'react-router-dom';

interface ingredientsInfo {
	ingredient?: string;
	measure?: string;
}

const Cocktail = () => {
	const [state, setState] = React.useState();
	const [ingredients, setIngredients] = React.useState<Array<ingredientsInfo>>();
	const { id } = useParams();

	const parseData = (data) => {
		let ingredientsName = [];
		let measures = [];
		Object.keys(data).forEach(key => {
			if (/strIngredient\d/i.test(key) && data[key]) {
				ingredientsName.push(data[key]);
			} else if (/strMeasure\d/i.test(key) && data[key]) {
				measures.push(data[key]);
			}
		});

		let arr = [];
		for (let i = 0; i < ingredientsName.length; i++) {
			let obj: ingredientsInfo = {};
			obj.ingredient = ingredientsName[i];
			obj.measure = measures[i];
			arr.push(obj);
		}

		setIngredients(arr);
	}

	React.useEffect(() => {
		fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then(res => res.json())
			.then(data => {
				parseData(data.drinks[0]);
				setState(data.drinks[0]);
			});
	}, [id]);

	if (!state) return null;

	return (
		<div className={'cocktail-card my-6'}>
			<div className={'catalog-image'} style={{height: '500px'}}>
				<img className={'object-cover'} alt={'cocktail'} src={state.strDrinkThumb} />
			</div>
			<h2 className={'mt-2 text-2xl font-bold'}>{state.strDrink}</h2>
			<p>
				<b>Category:</b> {state.strCategory}
			</p>
			<h2 className={'mt-2 text-xl font-bold'}>Инструкция по приготовлению:</h2>
			<p>{state.strInstructions}</p>
			<h4 className={'mt-4 font-bold'}>Ингредиенты:</h4>
			<table className={'w-full my-2 text-center border-collapse border border-grey-300'}>
				<thead>
					<tr>
						<th className={'border border-solid border-2 py-2'}>Название игредиента</th>
						<th className={'border border-solid border-2 py-2'}>Количество</th>
						<th className={'border border-solid border-2 py-2'}>Картинка ингредиента</th>
					</tr>
				</thead>
				<tbody>
				{ingredients && ingredients.map((item, index) => (
					<tr key={index}>
						<td className={'border border-solid border-2 py-2'}>{item.ingredient}</td>
						<td className={'border border-solid border-2 py-2'}>{item.measure}</td>
						<td className={'border border-solid border-2 py-2'}>Картинка ингредиента</td>
					</tr>
				))}
				</tbody>
			</table>
			<Link
				to={'/'}
				className={'button inline-block mt-4 text-white font-bold bg-blue-500 p-2 rounded-md cursor-pointer outline-none hover:bg-blue-700 focus:outline-none transition-all'}
			>
				Новый поиск
			</Link>
		</div>
	)
}

export default Cocktail;
