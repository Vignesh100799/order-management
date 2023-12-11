import * as Yup from 'yup';


export const contactValidationSchema = Yup.object({
    customerName : Yup.string().required('* required'),
    email: Yup.string().required('* required'),
    phoneNo: Yup.string().required('* required'),
    message: Yup.string().required('* required'),
})