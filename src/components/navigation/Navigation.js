import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = ({ pagesLength }) => { 
    const links = [];

    for (let i = 1; i < pagesLength + 1; i++){
        links.push(<Link key={ i } to={`/page/${ i }`}> { i } </Link>)
    }

    return (<>{ links }</>)
};

export default React.memo(Navigation);
