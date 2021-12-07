import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import { Stack, Box, Typography, Chip } from '@mui/material';
import { AddCircle, Edit, Delete } from '@mui/icons-material';

// path
import { PATH_DASHBOARD } from '../../routes/path'

const columns = [
    {
        field: 'email',
        title: 'Email',
        width: '30%',
    },
    {
        
        field: 'name',
        title: 'Name',
        width: '30%',
        render: row => (
            <Stack
                direction='row'
                alignItems='center'
                spacing={1}
            >
                <Box
                    component='img'
                    alt={row.name}
                    src={row.image}
                    sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%'
                    }}
                />
                <Typography variant='subtitle2'>{row.name}</Typography>
            </Stack>
        )
    },
    {
        field: 'phone',
        title: 'Phone',
        width: '15%',
    },
    {
        field: 'address',
        title: 'Address',
        width: '25%',
    }
];

const rows = [
    {
        id: '1',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0596181641',
        address: 'dhsp tphcm aa'
    },
    {
        id: '2',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0586181641',
        address: 'dhsp tphcm'
    },
    {
        id: '3',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0586181641',
        address: 'dhsp tphcm'
    },
    {
        id: '4',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0586181641',
        address: 'dhsp tphcm'
    },
    {
        id: '5',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0586181641',
        address: 'dhsp tphcm'
    },
    {
        id: '6',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0586181641',
        address: 'dhsp tphcm'
    },
    {
        id: '7',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0586181641',
        address: 'dhsp tphcm'
    },
    {
        id: '8',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0586181641',
        address: 'dhsp tphcm'
    },
    {
        id: '9',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0586181641',
        address: 'dhsp tphcm'
    },
    {
        id: '10',
        email: 'lechinhtue@gmail.com',
        name: 'Lê Chính Tuệ',
        image: 'http://dotshop69.000webhostapp.com/Public/images/tue.png',
        phone: '0586181641',
        address: 'dhsp tphcm'
    }
];

const options = {
    selection: true,
    addRowPosition: 'first',
    actionsColumnIndex: -1,
    tableLayout: 'fixed'
};

const AccountList = () => {
    const navigate = useNavigate();
    return (
        <MaterialTable
            title='Account'
            columns={columns}
            data={rows}
            options={options}
            actions={[
                {
                    icon: () => <Edit color='warning' />,
                    tooltip: 'Xem và sửa',
                    onClick: (event, row) => navigate(`/account/${row.email}`),
                    position: 'row'
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Delete',
                    onClick: (event, rowData) => alert("You want to delete " + rowData.name),
                    position: 'row'
                },
                {
                    icon: () => <AddCircle color='success' />,
                    tooltip: 'Thêm',
                    isFreeAction: true,
                    onClick: () => navigate(PATH_DASHBOARD.account.create)
                },
                {
                    icon: () => <Delete color='error' />,
                    tooltip: 'Remove All Selected Users',
                    onClick: (evt, data) => alert('You want to delete rows')
                }
            ]}
        />
    );
};

export default AccountList;
