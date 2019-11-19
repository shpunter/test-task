import React from 'react';

import { useAppContext } from '../../../hooks/useAppContext';
import { ACTIVE, NOT_ACTIVE, EDIT, VIEW, REMOVE } from '../../../config/static';
import { removeUser, modalView, modalEdit } from '../../../store/actions';
import { removeUserFetch } from '../../../request';

import './user.css';

const User = ({ userData: { empId, empName, empActive, empDepartment } }) => {
    const { dispatch } = useAppContext();
    
    const onRemoveUserFn = () => {        
        removeUserFetch(empId).then(() => {
            dispatch( removeUser(empId) )
        })
    };
    const onViewUserFn = () => dispatch( modalView(empId));
    const onEditUserFn = () => dispatch( modalEdit(empId) );

    return (
        <tr>
            <td className='pointer' onClick={ onEditUserFn }>{ EDIT }</td>
            <td className='pointer' onClick={ onViewUserFn }>{ VIEW}</td>
            <td>{ empId }</td>
            <td>{ empName }</td>
            <td>{ empActive ? ACTIVE : NOT_ACTIVE }</td>
            <td>{ empDepartment }</td>
            <td className='pointer' onClick={ onRemoveUserFn }>{ REMOVE }</td>
        </tr>
    );
};

export default React.memo(User);