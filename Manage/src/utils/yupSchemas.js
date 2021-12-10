import * as yup from 'yup';

export const createCategorySchema = yup.object().shape({
    name: yup
        .string()
        .required('Không được bỏ trống!'),
    subtitle: yup
        .string()
        .required('Không được bỏ trống!')
        .max(100, 'Tối đa 100 ký tự'),
    image: yup
        .mixed()
        .required('Không được bỏ trống!'),
});

export const createAccountSchema = yup.object().shape({
    email: yup
        .string()
        .required('Not be empty!'),
    password: yup
        .string()
        .required('Not be empty!'),
    image: yup
        .mixed()
        .required('Not be empty!'),
    phone: yup
        .string()
        .max(10, 'Max is 10 numbers'),
    role: yup
        .string()
        .required('Not be empty!'),
});