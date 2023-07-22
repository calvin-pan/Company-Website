import React from "react";
import Stepper from 'react-stepper-horizontal'

function Stepper1({activestep}){

    return(
        <Stepper steps={ [{title: 'Personal Information'}, {title: 'Program Selection'}, {title: 'Payment Information'}, {title: 'Confirmation'}] } activeStep={activestep} />
    );
};

export default Stepper1;