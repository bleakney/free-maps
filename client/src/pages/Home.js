import React from 'react';
import Search from '../components/Search';

// import { useQuery } from "@apollo/client";
// import { QUERY_ITEMS } from "../utils/queries";

const Home = () => {
    // use Query hook to make query req
    // const { loading, data } = useQuery(QUERY_ITEMS);

    // const items = data?.items || [];
    return (
    <div className="home-container">
        <Search />
    </div>
    )
};

export default Home;