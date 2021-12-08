import { Grid, Stack, Card, Typography, TextField, FormHelperText,MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormikProvider, Form, useFormik } from 'formik';
// apis
import accountApi from '../../apis/accountApi';
// upload
import UploadSingleFile from '../upload/UploadSingleFile';
// utils
import { createAccountSchema } from '../../utils/yupSchemas';
const roles = [
    {
        value: 'Admin',
    },
    {
        value: 'User',
    },
    {
        value: 'Block',
    }
];
const AccountForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name:'',
            image: null,
            phone:'',
            address:'',
            role:'',
        },
        validationSchema : createAccountSchema,
        onSubmit: async (values, { resetForm }) => {
            const { email, password, name, image, phone, address, role } = values;
            var formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('name', name);
            formData.append('image', image.file);
            formData.append('phone', phone);
            formData.append('address', address);
            formData.append('role', role);
            const res = await accountApi.insert(formData);
            console.log(res);
            resetForm();
        }
    });
    const { values, setFieldValue, getFieldProps, isSubmitting, touched, errors } = formik;
    const handleDrop = acceptedFiles => {
        const file = acceptedFiles[0];
        if (file) {
            setFieldValue('image', {
                file,
                preview: URL.createObjectURL(file)
            });
        }
    };
    return (
        <FormikProvider value={formik}>
            <Form>
                <Grid container spacing={3} mt={1}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ py: 10, px: 3 }}>
                            <div>
                                <UploadSingleFile
                                    accept='image/*'
                                    file={values.image}
                                    onDrop={handleDrop}
                                    caption={
                                        <Typography
                                            variant='caption'
                                            sx={{
                                                my: 2,
                                                mx: 'auto',
                                                display: 'block',
                                                textAlign: 'center',
                                                color: 'text.secondary'
                                            }}
                                        >
                                            Allowed *.jpeg, *.jpg, *.png, *.gif
                                            <br />Maximum 3.1MB
                                        </Typography>
                                    }
                                    sx={{
                                        width: 184,
                                        height: 184,
                                        borderRadius: '50%',
                                        '& > div': {
                                            borderRadius: '50%'
                                        }
                                    }}
                                />
                                <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                                    {Boolean(touched.image && errors.image) && errors.image}
                                </FormHelperText>
                            </div>
                            <Typography variant='caption'>
                                Created at: 2021-11-22T08:34:48.760+00:00
                                <br />
                                Updated at: 2021-11-22T08:34:48.760+00:00
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: 3 }}>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label='Email'
                                    {...getFieldProps('email')}
                                    error={Boolean(touched.email && errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                                <TextField
                                    fullWidth
                                    type='password'
                                    label='Password'
                                    {...getFieldProps('password')}
                                    error={Boolean(touched.password && errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                                <TextField
                                    fullWidth
                                    label='Name'
                                    {...getFieldProps('name')}
                                    error={Boolean(touched.name && errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                <TextField
                                    fullWidth
                                    label='Phone'
                                    {...getFieldProps('phone')}
                                    error={Boolean(touched.phone && errors.phone)}
                                    helperText={touched.phone && errors.phone}
                                />
                                <TextField
                                    fullWidth
                                    label='Address'
                                    {...getFieldProps('address')}
                                    error={Boolean(touched.address && errors.address)}
                                    helperText={touched.address && errors.address}
                                />
                                <TextField
                                    fullWidth
                                    label='Role'
                                    select
                                    value={roles}
                                    {...getFieldProps('role')}
                                    error={Boolean(touched.role && errors.role)}
                                    helperText={touched.role && errors.role}
                                >
                                    {roles.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
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

export default AccountForm;
