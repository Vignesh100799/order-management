import * as Yup from "yup";


export const registerValidationSchema = Yup.object().shape({
    firstname: Yup.string().required('* Required'),
    lastname: Yup.string().required('* Required'),
    email: Yup.string().email('Invalid email address').required('* Required'),
    password: Yup.string()
      .min(3, 'Password should be at least 3 characters')
      .max(12, 'Password should be at most 8 characters')
      .matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'Password must contain at least one special character')
      .required('* Required'),
    cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('* Required'),
  });
 export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('* Required'),
    password: Yup.string()
      .min(3, 'Password should be at least 3 characters')
      .max(12, 'Password should be at most 8 characters')
      .matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'Password must contain at least one special character')
      .required('* Required'),
  });