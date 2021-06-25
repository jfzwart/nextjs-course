import React from "react";
import { getFeaturedEvents } from "../helpers/api-util.js";
import EventList from "../components/events/event-list";

const HomePage = (props) => {
	const { events } = props;

	return (
		<div>
			<EventList items={events} />
		</div>
	);
};

export async function getStaticProps(context) {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			events: featuredEvents,
		},
		revalidate: 1800,
	};
}

export default HomePage;
