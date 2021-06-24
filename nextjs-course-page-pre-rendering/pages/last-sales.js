import { useEffect, useState } from "react";
import useSWR from 'swr';

function LastSalesPage(props) {
	const [sales, setSales] = useState(props.sales);
	// const [loading, setLoading] = useState(false);

    const { data, error } = useSWR('https://next-js-demo1-default-rtdb.europe-west1.firebasedatabase.app/sales.json')

    useEffect(() => {
        if (data) {
            const transformedSales = [];

				for (const key in data) {
					transformedSales.push({
						id: key,
						username: data[key].username,
						volume: data[key].volume,
					});
				}
				setSales(transformedSales);
        }
    }, [])

	// useEffect(() => {
	// 	setLoading(true);
	// 	fetch("https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			const transformedSales = [];

	// 			for (const key in data) {
	// 				transformedSales.push({
	// 					id: key,
	// 					username: data[key].username,
	// 					volume: data[key].volume,
	// 				});
	// 			}
	// 			setSales(transformedSales);
	// 			setLoading(false);
	// 		});
	// }, []);

    if (error) {
		return <p>No data yet...</p>;
	}

	if (!data || !sales) {
		return <p>Loading...</p>;
	}


	return (
		<ul>
			{sales.map((sale) => {
				return (
					<li key={sale.id}>
						name: {sale.username}, volume: {sale.volume}
					</li>
				);
			})}
		</ul>
	);
}

export async function getStaticProps() {
    const response = await fetch("https://next-js-demo1-default-rtdb.europe-west1.firebasedatabase.app/sales.json");
        const data = await response.json()
				const transformedSales = [];

				for (const key in data) {
					transformedSales.push({
						id: key,
						username: data[key].username,
						volume: data[key].volume,
					});
				}
            return { props: {sales: transformedSales }};
}

export default LastSalesPage;
