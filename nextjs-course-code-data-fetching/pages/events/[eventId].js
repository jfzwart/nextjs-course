import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
// import { getAllEvents, getEventById } from '../../dummy-data';
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Head from "next/head";

const EventDetailPage = (props) => {
	const event = props.selectedEvent;

	if (!event) {
		return <p>No event found</p>;
	}

	return (
		<Fragment>
			<Head>
				<title>{event.title}</title>
				<meta name='description' content={event.description} />
			</Head>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				alt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
};

export async function getStaticProps(context) {
	const eventId = context.params.eventId;

	const event = await getEventById(eventId);

	return {
		props: {
			selectedEvent: event,
		},
		revalidate: 30,
	};
}

export async function getStaticPaths() {
	const events = await getFeaturedEvents();

	const paths = events.map((event) => ({ params: { eventId: event.id } }));

	return {
		paths: paths,
		fallback: "blocking",
	};
}

export default EventDetailPage;
