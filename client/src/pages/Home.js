import React from 'react';

import { useQuery } from "@apollo/react-hooks";
import { QUERY_ITEMS } from "../utils/queries";

const Home = () => {
    // use Query hook to make query req
    const { loading, data } = useQuery(QUERY_ITEMS);

    const items = data?.items || [];

    // find out styling classname and additional info that needs to be added
    // return (
    //     <main>
    //     <div>
    //     <div>
    //     {loading ? (
    //         <div>Loading...</div>
    //     ) : (
            
    //     )}
    //     </div>
    //     </div>
        
    //     </main>
    // )
}