import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import UserModal from '../Modal';

import { useDispatch, useSelector } from 'react-redux';

import { fetchAdminData, isOpenModal } from '../../actions';

import './style.scss';

const Index = ({ data, columns }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const open = useSelector((state) => state.openModal);

    const dispatch = useDispatch()

    const handleFilter = (event) => {
        const searchValue = event.target.value;
        setSearchQuery(searchValue);
        const filteredData = data?.filter(
            (record) =>
                record.first_name?.toLowerCase().includes(searchValue.toLowerCase()) ||
                record.last_name?.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    const dataSource =
        filteredData.length > 0
            ? filteredData
            : data?.filter(
                (record) =>
                    record.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    record.last_name?.toLowerCase().includes(searchQuery.toLowerCase())
            );

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchAdminData())
        }, 1000);
    }, [open])

    return (
        <div className="table__wrapper">
            <div className="table__search">
                <Input.Search placeholder="Search by name" onChange={handleFilter} value={searchQuery} enterButton />
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="id"
                pagination={{
                    position: ['bottomCenter'],
                }}
            />
        </div>
    );
};

export default Index;
