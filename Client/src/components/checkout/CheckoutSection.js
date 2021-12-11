import { styled } from '@mui/material/styles';
import { Stack, Button, Typography } from '@mui/material';

import Delivery from './Delivery';
import Payment from './Payment';

const CheckoutSection = () => {
    return (
        <RootStyle>
            <Delivery />
            <Payment />
            <Stack>
                <Button variant='contained' color='error'>Order</Button>
                <Typography variant='caption'>(Please double check your order before placing an order)</Typography>
            </Stack>
        </RootStyle>
    );
};

const RootStyle = styled('div')(({ theme }) => ({
    width: '815px',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
}));

export default CheckoutSection;
