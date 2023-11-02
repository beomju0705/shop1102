import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalBox = ({ box, setBox }) => { //show, message, action
    const onClose = () => {
        setBox({
            ...box,
            show: false,
        });
    }

    return (
        <>
            <Modal
                show={box.show}
                onHide={onClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{box.action ? '질의' : '알림'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {box.message}
                </Modal.Body>
                <Modal.Footer>
                    {box.action &&
                        <Button variant="secondary">
                            취소
                        </Button>
                    }
                    <Button variant="primary" onClick={onClose}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalBox