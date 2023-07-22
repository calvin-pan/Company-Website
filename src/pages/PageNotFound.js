import { Button } from "react-bootstrap";
import React from "react";
import '../styles/PageNotFound.css';

function PageNotFound(){

    return(
        <div className="text-center marginTop">
            <h1>Oops, it looks like the page could not found.</h1>
            <p className="paragraph">We're sorry. Please recheck the link your entered and try again.</p>
            <Button href="/">Go Home</Button>
        </div>
    );
}

export default PageNotFound;