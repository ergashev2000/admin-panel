import React from 'react';
import './style.scss';

import Table from '../Table';
import { handleExportToExcel } from '../Excel'

import { Button } from 'antd';

const index = () => {
    const data = [
        {
            id: 1,
            firstname: 'asdad',
            lastname: 'dasd',
            location: ['Tashkent', 'Samarqand', 'Farg\'ona'],
            age: 23,
            course: ['English', 'Russian']
        },
        {
            id: 2,
            firstname: 'bdasd',
            lastname: 'ejbjhd',
            location: ['Tashkent', 'Samarqand', 'Farg\'ona'],
            age: 23,
            course: ['English', 'Russian']
        },
        {
            id: 3,
            firstname: 'asfdfewfef',
            lastname: 'qwrq',
            location: ['Tashkent', 'Samarqand', 'Farg\'ona'],
            age: 23,
            course: ['English', 'Russian']
        },
      
    
    ];

    return (
        <div className="admin__wrapper">
            <div className="admin">
                <div className="admin__content">
                    <div className="admin__content--head">
                        <h3 className='admin__content--head-title'>Admins</h3>
                        <Button type="primary">
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
