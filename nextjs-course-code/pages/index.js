import React from 'react';
import { getFeaturedEvents } from '../dummy-data.js'
import EventList from '../components/events/event-list';
// show featured events
// you can use functions in the dummy data, call them and store the results in a const
// 

const HomePage = () => {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>

                <EventList items={featuredEvents}/>


        </div>
    );
};

export default HomePage;