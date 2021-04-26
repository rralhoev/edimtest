import React from "react";
import { Catalog, CatalogItem, Search } from "../components";

const Main = () => {
	const [inputValue, setInputValue] = React.useState('');
	const [cocktailsList, setCocktailsList] = React.useState([]);
	const [fetchTimeout, setFetchTimeout] = React.useState<ReturnType<typeof setTimeout>>();

	const submitForm = (e) => {
		e.preventDefault();
		fetchData();
	}

	const fetchData = () => {
		clearTimeout(fetchTimeout);
		fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
		.then(res => res.json())
		.then(data => setCocktailsList(data.drinks));
	}

	const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	}

	React.useEffect(() => {
		if (fetchTimeout) {
			clearTimeout(fetchTimeout);
		}

		if (inputValue.length >= 3) {
			let timeout = setTimeout(() => {
				fetchData();
			}, 750);
			setFetchTimeout(timeout);
		}
	}, [inputValue]);

	return (
		<div className={'flex flex-col items-stretch my-4'}>
			<h1 className={'title h1 mb-3 font-bold text-2xl'}>
				Поиск по названию коктейля
			</h1>
			<Search
				value={inputValue}
				changeValue={changeInputValue}
				onSubmit={submitForm}
			/>
			<Catalog>
				{cocktailsList ? cocktailsList.map(item => (
					<CatalogItem
						key={item.idDrink}
						id={item.idDrink}
						image={item.strDrinkThumb}
						name={item.strDrink}
						category={item.strCategory}
					/>
				)) : null}
			</Catalog>
		</div>
	)
}

export default Main;
