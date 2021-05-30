import React from 'react';
import {useRouter} from 'next/router';

const PortfolioProjectPage = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    // send a request to some backend server
    // to fetch the piece of data with an id of router.query.id
    return (
        <div>
            The Portfolio Project Page
        </div>
    );
};

export default PortfolioProjectPage;