import React, { useEffect } from 'react';

import {
    createAdminData,
    updateAdminData,
    createClientData,
    updateClientData
} from '../../api';

import { useDispatch, useSelector } from 'react-redux';

import {
    fetchAdminData,
    fetchClientData,
    isOpenModal
} from '../../actions';

import {
    Modal,
    Form,
    Select,
    Input as AntInput
} from 'antd';

const { Option } = Select;

const Index = ({ selectedRecord }) => {
    const currentPath = window.location.pathname;
    const dispatch = useDispatch();
    const openModal = useSelector((state) => state.openModal);

    const [form] = Form.useForm();

    const handleModalCancel = () => {
        dispatch(isOpenModal(false));
        form.resetFields();
    };

    const handleModalOk = () => {
        if (currentPath === '/admin') {
            form
                .validateFields()
                .then(async (values) => {
                    form.resetFields();
                    dispatch(isOpenModal(false));

                    if (selectedRecord) {
                        try {
                            await updateAdminData(selectedRecord.id, values);
                            form.resetFields();
                            dispatch(fetchAdminData());
                        } catch (error) {
                            console.error('Error updating user data:', error);
                        }
                    } else {
                        try {
                            await createAdminData(values);
                            form.resetFields();
                            dispatch(fetchAdminData());
                        } catch (error) {
                            console.error('Error creating user data:', error);
                        }
                    }
                })
                .catch((error) => {
                    console.error('Form validation error:', error);
                });
        } else {
            form
                .validateFields()
                .then(async (values) => {
                    form.resetFields();
                    dispatch(isOpenModal(false));

                    if (selectedRecord) {
                        try {
                            await updateClientData(selectedRecord.id, values);
                            form.resetFields();
                            dispatch(fetchClientData());
                        } catch (error) {
                            console.error('Error updating client data:', error);
                        }
                    } else {
                        try {
                            await createClientData(values);
                            form.resetFields();
                            dispatch(fetchClientData());
                        } catch (error) {
                            console.error('Error creating client data:', error);
                        }
                    }
                })
                .catch((error) => {
                    console.error('Form validation error:', error);
                });
        }
    };

    useEffect(() => {
        if (openModal) {
            form.resetFields();
        }
    }, [openModal])

    useEffect(() => {
        if (selectedRecord) {
            if (currentPath === '/admin') {
                form.setFieldsValue({
                    first_name: selectedRecord?.first_name,
                    last_name: selectedRecord?.last_name,
                    role: selectedRecord?.role,
                });
            } else {
                form.setFieldsValue({
                    first_name: selectedRecord?.first_name,
                    last_name: selectedRecord?.last_name,
                    age: selectedRecord?.age,
                    location: selectedRecord?.location,
                    course: selectedRecord?.course,
                });
            }
        }
    }, [selectedRecord]);

    return (
        <>
            <Modal
                title={currentPath === '/admin' ? 'Admin' : 'Client'}
                visible={openModal}
                onCancel={handleModalCancel}
                onOk={handleModalOk}
                centered
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="first_name"
                        label="First Name"
                        rules={[{ required: true, message: 'Please enter the first name' }]}
                    >
                        <AntInput />
                    </Form.Item>
                    <Form.Item
                        name="last_name"
                        label="Last Name"
                        rules={[{ required: true, message: 'Please enter the last name' }]}
                    >
                        <AntInput />
                    </Form.Item>
                    {currentPath === '/admin' ?
                        <Form.Item
                            name="role"
                            label="Role"
                            rules={[{ required: true, message: 'Please select a role' }]}
                        >
                            <Select>
                                <Option value="admin">Admin</Option>
                                <Option value="operator">Operator</Option>
                                <Option value="manager">Manager</Option>
                                <Option value="tutor">Tutor</Option>
                            </Select>
                        </Form.Item>
                        :
                        <>
                            <Form.Item
                                name="age"
                                label="Age"
                                rules={[{ required: true, message: 'Please enter the age' }]}
                            >
                                <AntInput />
                            </Form.Item>
                            <Form.Item
                                name="location"
                                label="Location"
                                rules={[{ required: true, message: 'Please select a location' }]}
                            >
                                <Select>
                                    <Option value="Toshkent sh.">Toshkent sh.</Option>
                                    <Option value="Toshkent">Toshkent</Option>
                                    <Option value="Samarqand">Samarqand</Option>
                                    <Option value="Farg'ona">Farg'ona</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="course"
                                label="Course"
                                rules={[{ required: true, message: 'Please select a course' }]}
                            >
                                <Select>
                                    <Option value="English">English</Option>
                                    <Option value="Russian">Russian</Option>
                                    <Option value="O'zbek">O'zbek</Option>
                                </Select>
                            </Form.Item>
                        </>
                    }
                </Form>
            </Modal>
        </>
    );
};

export default Index;
