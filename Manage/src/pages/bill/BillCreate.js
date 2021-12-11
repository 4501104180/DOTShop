import { Container } from '@mui/material';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { BillForm } from '../../components/bill';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const BillCreate = () => {
    return (
        <Page title='Check Bill'>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header='Check Bill'
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                        { name: 'Bills', href: PATH_DASHBOARD.bill.list },
                    ]}
                />
                <BillForm />
            </Container>
        </Page>
    );
};

export default BillCreate;
