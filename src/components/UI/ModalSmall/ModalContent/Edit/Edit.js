import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { useAppContext } from '../../../../../hooks/useAppContext';
import { saveUser, modalHide } from '../../../../../store/actions';
import { SAVE } from '../../../../../config/static';

const Edit = ({ user: { empName, empId, empDepartment, empActive }} ) => {
    const { dispatch } = useAppContext();
    const [ userName, setUserName ] = useState(empName);
    const [ userDepartment, setUserDepartment ] = useState(empDepartment);
    const [ userActive, setUserActive ] = useState(empActive);

    const userNameOnChangeFn = event => setUserName(event.target.value);
    const userDepartmentOnChangeFn = event => setUserDepartment(event.target.value);
    const userActiveOnChangeFn = () => setUserActive(!userActive);
    const onSaveFn = () => {
        dispatch( saveUser({ userId: empId, userDepartment, userName, userActive }) );
        dispatch( modalHide() );
    };

    return (
        <Form>            
            <FormControl value={ userName } onChange={ userNameOnChangeFn } /><hr/>
            <FormControl value={ userDepartment } onChange={ userDepartmentOnChangeFn } /><hr/>
            <Form.Check 
                checked={ userActive }
                onChange={ userActiveOnChangeFn }
                type="switch"
                id="custom-switch"
                label="Check this switch"
            /><hr/>
            <Button variant="primary" onClick={ onSaveFn }> { SAVE } </Button>
        </Form>
    )
}

export default React.memo(Edit);