import React from "react";
import EventItem from "./event-item";
import classes from "./event-item.module.css";

const EventList = (props) => {
	console.log(props);
	const { items } = props;
	return (
		<ul>
			{items.map((item) => (
				<EventItem
					key={item.id}
                    id={item.id}
					title={item.title}
					location={item.location}
					date={item.date}
					image={item.image}
				/>
			))}
		</ul>
	);
};

export default EventList;
