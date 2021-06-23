import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = () => {
	const router = useRouter();
	const filterData = router.query.slug;

	if (!filterData) {
		return <p className='center'>Loading...</p>;
	}

	const filteredYear = filterData[0];

	const filteredMonth = filterData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 0 ||
		numMonth > 12
	) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>Invalid filter, please adjust your values</p>
				</ErrorAlert>
				<Button link='/events'>Show all events</Button>
			</Fragment>
		);
	}

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

	console.log(filteredEvents);

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<Fragment>
				<div className='center'>
					<ErrorAlert>
						<p>No events found for the chosen filter!</p>
					</ErrorAlert>
					<Button link='/events'>Show all events</Button>
				</div>
			</Fragment>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<div>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</div>
	);
};

export default FilteredEventsPage;
