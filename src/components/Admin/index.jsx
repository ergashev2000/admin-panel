import React, { useEffect, useState } from 'react';
import './style.scss';
import { Table, Input, Button, Space, Popconfirm } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminData, isOpenModal } from '../../actions';

import UserTable from '../Table';
import UserModal from '../Modal'

import { handleExportToExcel } from '../Excel'
import { deleteAdminData } from '../../api';

const index = () => {
    const [selectedRecord, setSelectedRecord] = useState(null);
    const dispatch = useDispatch()
    const data = useSelector((state) => state.adminData);

    const columns = [
        {
            title: '№',
            dataIndex: 'index',
            key: 'id',
            render: (_, __, index) => index + 1,
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
            sorter: (a, b) => a.last_name?.localeCompare(b.last_name),
            ellipsis: true,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (_, record) => record.role,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => (
                <Space size="small">
                    <Button onClick={() => handleEdit(record)}>Edit</Button>
                    <Popconfirm
                        title="Are you sure to delete this User?"
                        onConfirm={() => handleDelete(record)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="danger" >Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const handleDelete = (record) => {
        deleteAdminData(record.id)
        setTimeout(() => {
            dispatch(fetchAdminData())
        }, 500);
    };

    const handleEdit = (record) => {
        setSelectedRecord(record);
        dispatch(isOpenModal(true));
    };

    return (
        <div className="admin__wrapper">
            <UserModal selectedRecord={selectedRecord} />
            <div className="admin">
                <div className="admin__content">
                    <div className="admin__content--head">
                        <h3 className='admin__content--head-title'>Admins</h3>
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
