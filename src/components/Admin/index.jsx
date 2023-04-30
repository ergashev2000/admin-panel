import React from 'react';
import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import { isOpenModal } from '../../actions';
import Table from '../Table';
import UserModal from '../Modal'
import { handleExportToExcel } from '../Excel'

import { Button } from 'antd';

const index = () => {

    const dispatch = useDispatch()

    const data = [
        {
            id: 1,
            firstname: 'asdsd',
            lastname: 'jlhg',
            role: 'admin'
        },
        {
            id: 2,
            firstname: 'bdasd',
            lastname: 'ejbjhd',
            role: 'salom'
        },
        {
            id: 3,
            firstname: 'casdakjhl',
            lastname: 'dkjl',
        },
        {
            id: 4,
            firstname: 'asdsd',
            lastname: 'jlhg',
        },
        {
            id: 5,
            firstname: 'bdasd',
            lastname: 'ejbjhd',
        },
        {
            id: 6,
            firstname: 'casdakjhl',
            lastname: 'dkjl',
        },
        {
            id: 12,
            firstname: 'asdsd',
            lastname: 'jlhg',
        },
        {
            id: 23,
            firstname: 'bdasd',
            lastname: 'ejbjhd',
        },
        {
            id: 31,
            firstname: 'casdakjhl',
            lastname: 'dkjl',
        },
        {
            id: 13,
            firstname: 'asdsd',
            lastname: 'jlhg',
        },
        {
            id: 222,
            firstname: 'bdasd',
            lastname: 'ejbjhd',
        },
        {
            id: 3456,
            firstname: 'casdakjhl',
            lastname: 'dkjl',
        },
        {
            id: 1456,
            firstname: 'asdsd',
            lastname: 'jlhg',
        },
        {
            id: 23453,
            firstname: 'bdasd',
            lastname: 'ejbjhd',
        },
        {
            id: 3324,
            firstname: 'casdakjhl',
            lastname: 'dkjl',
        },
    ];

    return (
        <div className="admin__wrapper">
            <UserModal/>
            <div className="admin">
                <div className="admin__content">
                    <div className="admin__content--head">
                        <h3 className='admin__content--head-title'>Admins</h3>
                        <Button type="primary" onClick={() => dispatch(isOpenModal(true))}>
                            Add new
                        </Button>
                        <Button onClick={() => handleExportToExcel(data)}>
                            Export data(Excel)
                        </Button>
                        <h5 className='admin__head--counter'>
                            Total clients: <span>{data?.length}</span>
                        </h5>
                    </div>
                    <div className="admin__table">
                        <Table data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
