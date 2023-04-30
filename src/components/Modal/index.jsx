import React, { useState, useEffect } from 'react';
import { Modal, Form, Input as AntInput } from 'antd';


import { useDispatch, useSelector } from 'react-redux';
import { isOpenModal } from '../../actions';

const Index = () => {
    const dispatch = useDispatch()
    const [editData, setEditData] = useState(null);

    const openModal = useSelector((state) => state.openModal);

    const [form] = Form.useForm();

    const handleModalCancel = () => {
        dispatch(isOpenModal(false))
        form.resetFields();
    };

    const handleModalOk = () => {
        form
            .validateFields()
            .then((values) => {
                form.resetFields();
                dispatch(isOpenModal(false))
                console.log('Form values:', values);
            })
            .catch((error) => {
                console.error('Form validation error:', error);
            });
    };

    return (
        <>

            <Modal
                title={editData ? 'Edit Form' : 'Add Form'}
                visible={openModal}
                onCancel={handleModalCancel}
                onOk={handleModalOk}
                centered
            >
                <Form form={form}>
                    <Form.Item
                        name="firstname"
                        label="Firstname"
                        rules={[{ required: true, message: 'Please enter the firstname' }]}
                    >
                        <AntInput />
                    </Form.Item>
                    <Form.Item
                        name="lastname"
                        label="Lastname"
                        rules={[{ required: true, message: 'Please enter the lastname' }]}
                    >
                        <AntInput />
                    </Form.Item>
                </Form>
            </Modal>

        </>
    );
};

export default Index;
