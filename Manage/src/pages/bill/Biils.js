import { Container } from '@mui/material';

// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { BillList } from '../../components/bill';
// path
import { PATH_DASHBOARD } from '../../routes/path';

const Bills = () => {
    return (
        <Page title='Bills'>
            <Container sx={{ pb: 3 }}>
                <HeaderBreadcrumbs
                    header='Bills'
                    links={[
                        { name: 'Dashboard', href: PATH_DASHBOARD.root },
                    ]}
                />
                <BillList />
            </Container>
        </Page>
    );
};

export default Bills;
