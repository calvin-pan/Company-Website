import React from "react";
import SearchBar from "../components/SearchBar.js";
import '../styles/Programs.css';

function Programs(){

    return (
        <div>
        <h1 className="title"><span className="serenityText">Programs</span> Offered</h1>
        <SearchBar />
       
        {/* Render the list of tutors */}
        </div>
    );

}

export default Programs;