import { useEffect, useState } from "react";
import useSWR from 'swr';

function LastSalesPage() {
	const [sales, setSales] = useState();
	// const [loading, setLoading] = useState(false);

    const { data, error } = useSWR('https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json')

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
    })

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

    if (!error) {
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

export default LastSalesPage;
