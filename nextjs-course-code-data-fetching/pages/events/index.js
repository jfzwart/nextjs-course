import { Fragment } from "react";
import { getAllEvents } from "../../helpers/api-util";
import Head from "next/head";

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

function AllEventsPage(props) {
	const router = useRouter();

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	}

	const { events } = props;

	return (
		<Fragment>
			<Head>
				<title>Next JS Events</title>
				<meta name='description' content='find a lot of events' />
			</Head>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</Fragment>
	);
}

export async function getStaticProps(context) {
	const allEvents = await getAllEvents();

	return {
		props: {
			events: allEvents,
		},
		revalidate: 60,
	};
}

export default AllEventsPage;
