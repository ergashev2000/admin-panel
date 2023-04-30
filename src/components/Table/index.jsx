import React, { useState } from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import UserModal from '../Modal';

import { useDispatch, useSelector } from 'react-redux';

import { isOpenModal } from '../../actions';

import './style.scss'

const Index = ({ data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const dispatch = useDispatch()

    const handleFilter = (event) => {
        const searchValue = event.target.value;
        setSearchQuery(searchValue);
        const filteredData = data.filter((record) =>
            record.firstname.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    const handleEdit = (record) => {
        // Handle edit action
        dispatch(isOpenModal(true));
        console.log('Edit:', record);
    };

    const handleDelete = (record) => {
        // Handle delete action
        console.log('Delete:', record);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'index',
            key: 'index',
            render: (_, record, index) => index + 1,
            width: 60,
            fixed: 'left',
        },
        {
            title: 'Firstname',
            dataIndex: 'firstname',
            key: 'firstname',
            ellipsis: true,
            sorter: (a, b) => a.firstname.localeCompare(b.firstname),
        },
        {
            title: 'Lastname',
            dataIndex: 'lastname',
            key: 'lastname',
            sorter: (a, b) => a.lastname.localeCompare(b.lastname),
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
                    <Button onClick={() => handleEdit(record)}>
                        Edit
                    </Button>
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

    const dataSource = filteredData.length > 0
        ? filteredData
        : data.filter((record) => record.firstname.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="table__wrapper">
            <div className="table__search">
                <Input.Search
                    placeholder="Search by name"
                    onChange={handleFilter}
                    value={searchQuery}
                    enterButton
                />
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
                size="small"
                rowKey='id'
                pagination={{
                    position: ['bottomCenter'],
                }}
            />
        </div>
    );
};

export default Index;
