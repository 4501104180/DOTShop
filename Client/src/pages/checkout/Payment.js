import { Container, Stack } from '@mui/material';

import Page from '../../components/Page';
import { CheckoutSection, CheckoutInfor } from '../../components/checkout';

const Payment = () => {
    return (
        <Page title='Billing information | CV Shop'>
            <Container sx={{ pt: 3 }}>
                <Stack
                    direction={{ xs: 'column', sm: 'column', lg: 'row' }}
                    justifyContent='space-between'
                >
                    <CheckoutSection />
                    <CheckoutInfor />
                </Stack>
            </Container>
        </Page>
    );
};

export default Payment;
