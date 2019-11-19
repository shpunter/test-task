import React, { useState, useEffect } from 'react';
import FormControl from 'react-bootstrap/FormControl';

import { useAppContext } from '../../hooks/useAppContext';
import { saveSearch } from '../../store/actions';
import './search.css';

const Search = () => { 
    const { dispatch } = useAppContext();
    const [ inputSearch, setInputSearch ] = useState('');

    const searchOnChangeFn = event => setInputSearch(event.target.value);

    useEffect(() => {
        const timer = setTimeout(() => dispatch( saveSearch(inputSearch) ), 500)
        
        return () => clearTimeout(timer);        
    }, [inputSearch, dispatch]);

    return (
        <div className='search-component'>
            <FormControl placeholder='search' value={ inputSearch } onChange={ searchOnChangeFn } />
        </div>
    )
};

export default Search;
