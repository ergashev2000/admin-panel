import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchClientData, isOpenModal, } from '../../actions';
import { handleExportToExcel } from '../Excel'

import UserTable from '../Table';
import UserModal from '../Modal';
import { deleteClientData } from '../../api';

import './style.scss';
import {
    Button,
    Space,
    Popconfirm
} from 'antd';

const index = () => {
    const [selectedRecord, setSelectedRecord] = useState(null);
    const dispatch = useDispatch()
    const data = useSelector((state) => state.clientData);
    const columns = [
        {
            title: '№',
            dataIndex: 'index',
            key: 'index',
            render: (_, record, index) => index + 1,
            width: 60,
            fixed: 'left',
        },
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
            ellipsis: true,
            sorter: (a, b) => a.first_name?.localeCompare(b.first_name),
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
            ellipsis: true,
            sorter: (a, b) => a.last_name?.localeCompare(b.last_name),
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
            ellipsis: true,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            ellipsis: true,
        },
        {
            title: 'Course',
            dataIndex: 'course',
            key: 'course',
            ellipsis: true,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => (
                <Space size="small">
                    <Button onClick={() => handleEdit(record)}>Edit</Button>
                    <Popconfirm
                        title="Are you sure to delete this record?"
                        onConfirm={() => handleDelete(record)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="danger">Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const handleEdit = (record) => {
        setSelectedRecord(record);
        dispatch(isOpenModal(true));
    };

    const handleDelete = (record) => {
        deleteClientData(record?.id)
        setTimeout(() => {
            dispatch(fetchClientData())
        }, 500);
    };

    useEffect(() => {
        dispatch(fetchClientData())
    }, [])

    return (
        <div className="admin__wrapper">
            <UserModal selectedRecord={selectedRecord} />
            <div className="admin">
                <div className="admin__content">
                    <div className="admin__content--head">
                        <h3 className='admin__content--head-title'>Clients</h3>
                        <Button type="primary" onClick={() => dispatch(isOpenModal(true))}>
                            Add new
                        </Button>
                        <Button onClick={data && (() => handleExportToExcel(data))}>
                            Export data(Excel)
                        </Button>
                        <h5 className='admin__head--counter'>
                            Total clients: <span>{data?.length || 0}</span>
                        </h5>
                    </div>
                    <div className="admin__table">
                        <UserTable data={data} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
