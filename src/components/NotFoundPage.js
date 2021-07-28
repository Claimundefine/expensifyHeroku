import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
    Page does not exist -<Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;
