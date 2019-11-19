import React from 'react';

const View = ({ user: { empId, empDepartment}} ) => {
    return (
        <>
            <p>{ empId }</p>
            <p>{ empDepartment }</p>
        </>
    )
}

export default View;