import { Grid, Stack, Card, Typography, TextField, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormikProvider, Form, useFormik } from 'formik';

const BillForm = () => {
    const formik = useFormik({
        initialValues: {
            customerName: '',
            customerPhone: '',
            customerAddress: '',
            status:'',
        },
        onSubmit: async (values, { resetForm }) => {
            const { customerName, customerPhone, customerAddress, status } = values;
            var formData = new FormData();
            formData.append('customerName', customerName);
            formData.append('customerPhone', customerPhone);
            formData.append('customerAddress', customerAddress);
            formData.append('status', status);
            resetForm();
        }
    });
    const { values, setFieldValue, getFieldProps, isSubmitting, touched, errors } = formik;
    return (
        <FormikProvider value={formik}>
            <Form>
                <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: 3 }}>
                            <Stack spacing={3}>
                            <TextField
                                    fullWidth
                                    label='Customer Name'
                                    {...getFieldProps('customerName')}
                                    error={Boolean(touched.customerName && errors.customerName)}
                                    helperText={touched.customerName && errors.customerName}
                                />
                                <TextField
                                    fullWidth
                                    label='Customer Phone'
                                    {...getFieldProps('customerPhone')}
                                    error={Boolean(touched.customerPhone && errors.customerPhone)}
                                    helperText={touched.customerPhone && errors.customerPhone}
                                />
                                <TextField
                                    fullWidth
                                    label='Customer Address'
                                    {...getFieldProps('customerAddress')}
                                    error={Boolean(touched.customerAddress && errors.customerAddress)}
                                    helperText={touched.customerAddress && errors.customerAddress}
                                />
                                <TextField
                                    fullWidth
                                    label='Status'
                                    {...getFieldProps('status')}
                                    error={Boolean(touched.status && errors.status)}
                                    helperText={touched.status && errors.status}
                                />
                                <Stack alignItems='end'>
                                    <LoadingButton type='submit' variant='contained' loading={isSubmitting}>
                                        Save
                                    </LoadingButton>
                                </Stack>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Form>
        </FormikProvider>
    );
};

export default BillForm;
