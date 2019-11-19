import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import User from './User/User';
import { EMPLOYEE_LIST_TITLE } from '../../config/static';
import { fetchUsers } from '../../request';
import { useAppContext } from '../../hooks/useAppContext';
import { saveUsersFromResponse } from '../../store/actions';

import './user-list.css';

const UserList = () => {
    let { pageNumber } = useParams();
    const { state, dispatch } = useAppContext();
    const { users, search } = state;
    const history = useHistory();

    useEffect(() => {
        fetchUsers(`/?page=${ pageNumber || 1 }&&search=${search}`)
            .then(response => JSON.parse(response))
            .then(({ users, pagesLength }) => {
                pagesLength < +pageNumber 
                    ? history.push('/')
                    : dispatch( saveUsersFromResponse({ users }, pagesLength) );
            } );
    }, [dispatch, pageNumber, search, history])

    return (
        <Table responsive className='user-list-table'>
            <thead>
                <tr>
                    { EMPLOYEE_LIST_TITLE.map((title, id) => <th key={ id }>{ title }</th>) }
                </tr>
            </thead>
            <tbody>
                { users.map(user => <User key={ user.empId } userData={ user } />) }                    
            </tbody>
        </Table>    
    );
};

export default UserList;