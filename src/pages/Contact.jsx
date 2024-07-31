import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const { id } = useParams();
    return <div>Contact number {id} </div>;
};

export default Contact;
