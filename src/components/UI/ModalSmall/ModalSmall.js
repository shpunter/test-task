import React from 'react';
import Modal from 'react-bootstrap/Modal';
import View from './ModalContent/View/View';
import Edit from './ModalContent/Edit/Edit';

import { useAppContext } from '../../../hooks/useAppContext';
import { modalHide } from '../../../store/actions';

const ModalSmall = () => {
    const { state, dispatch } = useAppContext();
    const { smallModal: { show, edit, user: { empId, empName, empDepartment, empActive } } } = state;

    const onHideFn = () => dispatch( modalHide() );

    return (
        <Modal
            size="sm"
            show={ show }
            onHide={ onHideFn }
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">{ empName }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    edit ? <Edit user={ { empName, empId, empDepartment, empActive } }/> : <View user={ { empId, empDepartment } }/>
                }
            </Modal.Body>
        </Modal>
    )
};

export default ModalSmall;