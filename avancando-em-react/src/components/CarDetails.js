const CarDetails = ({brand, km, color, newCar}) => {
	return (
		<div>
			<h2>Detalhes do carro:</h2>
			<ul>
				<li>marca: {brand}</li>
				<li>KM: {km}</li>
				<li>cor: {color}</li>
				{newCar && <li>Este carro é novo!</li>}
			</ul>
			
		</div>
	)
}

export default CarDetails