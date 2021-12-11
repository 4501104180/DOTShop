import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import { Stack, Box, Typography, Chip } from '@mui/material';
import { AddCircle, Edit, Delete } from '@mui/icons-material';

// path
import { PATH_DASHBOARD } from '../../routes/path'

const columns = [
    {
        field: 'customerName',
        title: 'Customer Name',
        width: '20%',
    },
    {
        
        field: 'customerPhone',
        title: 'Customer Phone',
        width: '20%',
    },
    {
        field: 'customerAddress',
        title: 'Customer Address',
        width: '20%',
    },
    {
        field: 'createdAt',
        title: 'Created At',
        width: '20%',
    },
    {
        field: 'status',
        title: 'Status',
        width: '20%',
    }
];

const rows = [
    {
        id: '1',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    },
    {
        id: '2',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    },
    {
        id: '3',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    },
    {
        id: '4',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    },
    {
        id: '5',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    },
    {
        id: '6',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    },
    {
        id: '7',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    },
    {
        id: '8',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    },
    {
        id: '9',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    },
    {
        id: '10',
        customerName: 'Tuệ idol giới trẻ',
        customerPhone: '0596181641',
        customerAddress: 'Xóm chùa is the best',
        createdAt: '9:42:37 AM, Friday, December 10, 2021',
        status: 'checked'
    }
];

const options = {
    selection: true,
    addRowPosition: 'first',
    actionsColumnIndex: -1,
    tableLayout: 'fixed'
};

const BillList = () => {
    const navigate = useNavigate();
    return (
        <MaterialTable
            title='Bill'
            columns={columns}
            data={rows}
            options={options}
            actions={[
                {
                    icon: () => <Edit color='warning' />,
                    tooltip: 'View and Edit',
                    onClick: (event, row) => navigate(`/bill/${row.id}`),
                    position: 'row'
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Delete',
                    onClick: (event, rowData) => alert("You want to delete " + rowData.customerName),
                    position: 'row'
                },
                {
                    icon: () => <AddCircle color='success' />,
                    tooltip: 'Add',
                    isFreeAction: true,
                    onClick: () => navigate(PATH_DASHBOARD.bill.create)
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Remove All Selected Bills',
                    onClick: (evt, data) => alert('You want to delete rows')
                }
            ]}
        />
    );
};

export default BillList;
