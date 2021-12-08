import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import { Stack, Box, Typography } from '@mui/material';
import { AddCircle, Edit, Delete } from '@mui/icons-material';
import { useState, useEffect} from 'react';
//apis
import accountApi from '../../apis/accountApi';
// path
import { PATH_DASHBOARD } from '../../routes/path'
// utils
import { fDate} from '../../utils/formatDate'

const columns = [
    {
        field: 'email',
        title: 'Email',
        width: '30%',
    },
    {
        
        field: 'name',
        title: 'Name',
        width: '25%',
        render: row => (
            <Stack
                direction='row'
                alignItems='center'
                spacing={1}
            >
                <Box
                    component='img'
                    alt={row.name}
                    src={`${process.env.REACT_APP_IMAGE_URL}/${row.image}`}
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
        width: '14%',
    },
    {
        field: 'address',
        title: 'Address',
        width: '14%',
    },
    {
        field: 'role',
        title: 'Role',
        width: '14%',
    },
    {
        field: 'createdAt',
        title: 'Created At',
        width: '14%',
        render: row => (
            <Typography variant='body2'>{fDate(row.createdAt)}</Typography>
        )
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
    const [accounts, setAccounts] = useState(null);
    useEffect(() => {
        const getAccounts = async () => {
            const accounts = await accountApi.findAll();
            console.log(accounts);
            setAccounts(accounts);
        }
        getAccounts();
    }, []);
    return (
        <>
            {accounts && (
                <MaterialTable
                    title='Account'
                    columns={columns}
                    data={accounts}
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
            )}
            {!accounts && "Loading..."}
        </>
    );
};

export default AccountList;
