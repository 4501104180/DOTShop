import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Stack, Typography, Link } from '@mui/material';

const CheckoutInfor = () => {
    return (
        <RootStyle>
            <Wrapper>
                <Heading>
                    <Typography variant='subtitle2'>Ship Address</Typography>
                    <Linking component={RouterLink} to='/'>Change</Linking>
                </Heading>
                <Typography sx={{ fontSize: '15px', fontWeight: 'bold', mt: 1 }}>
                    Pihe
                </Typography>
                <Typography variant='subtitle2'>
                    Chùa liên trì, Xã Suối Cao, Huyện Xuân Lộc, Đồng Nai Việt Nam
                </Typography>
                <Typography variant='subtitle2'>
                    Phone: 0586181641
                </Typography>
            </Wrapper>
            <Wrapper>
                <Heading>
                    <Typography variant='subtitle2'>Order</Typography>
                    <Linking component={RouterLink} to='/'>Change</Linking>
                </Heading>
                <Wrapper>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='subtitle2'>Guess</Typography>
                        <Typography variant='subtitle1'>0</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='subtitle2'>Coupon</Typography>
                        <Typography variant='subtitle1'>- 0</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='subtitle2'>Ship Fee</Typography>
                        <Typography variant='subtitle1'>+ 0</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='subtitle2'>Freeship</Typography>
                        <Typography variant='subtitle1'>- 0</Typography>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='subtitle2'>Total</Typography>
                        <Stack alignItems='end'>
                            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'error.main' }}>
                                Choose a product, please!
                            </Typography>
                            <Typography variant='caption'>
                                (VAT includes)
                            </Typography>
                        </Stack>
                    </Stack>
                </Wrapper>
            </Wrapper>
        </RootStyle>
    );
};

const RootStyle = styled('div')(({ theme }) => ({
    width: `calc(100% - 830px)`,
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
        width: '99.5%'
    }
}));

const Wrapper = styled('div')(({ theme }) => ({
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: theme.palette.background.paper,
    fontSize: '14px'
}));

const Heading = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgb(201, 201, 201)',
    paddingBottom: '10px'
});

const Linking = styled(Link)({
    textDecoration: 'none',
    color: 'rgb(26 139 237)',
    cursor: 'pointer',
    fontWeight: '500'
});

export default CheckoutInfor;
