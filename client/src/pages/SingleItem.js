import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_THOUGHT } from "../utils/queries";
// what else needs to be imported?

const SingleItem = (props) => {
    const { id: itemId } = useParams();
    const { loading, data } = useQuery(QUERY_ITEM, {
        variables: { id: itemId },
    });

    const item = data?.item || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        // find out className and styles for item
        </div>
    )
}