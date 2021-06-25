import React from "react";
import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util.js";
import EventList from "../components/events/event-list";

const HomePage = (props) => {
	const { events } = props;

	return (
		<div>
			<Head>
				<title>NextJS Events</title>
				<meta
					name='description'
					content='Find a lot of great events that allow you to evolve...'
				/>
			</Head>
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
