import React from 'react';
import {  useSelector } from "react-redux";
const SearchView = () =>{
    const ReducerValues = useSelector((state) => state.search);
    return(
        <div>
            {JSON.stringify(ReducerValues)}
        </div>
    );
};
export default SearchView;