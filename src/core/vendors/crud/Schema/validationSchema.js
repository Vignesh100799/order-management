import * as Yup from "yup";
export const EditvalidationSchema = Yup.object().shape({
    orderId: Yup.string().required("Order ID is required"),
    orderNumber: Yup.string().required("Order Number is required"),
    status: Yup.string().required("Status is required"),
    item: Yup.string().required("Item is required"),
    customerName: Yup.string().required("Customer Name is required"),
    shippingService: Yup.string().required("Shipping Service is required"),
    trackingCode: Yup.string().required("Tracking Code is required"),
    address: Yup.object({
      street: Yup.string().required("Street is required"),
      town: Yup.string().required("Town is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      zipcode: Yup.number().required("Zipcode is required"),
    }),
  })
  
  export const newFormValidationSchema = Yup.object({
    customerName: Yup.string().required("Customer Name is required"),
    address: Yup.object({
      street: Yup.string().required("Street is required"),
      town: Yup.string().required("Town is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      zipcode: Yup.number().required("Zipcode is required"),
    }),
    status: Yup.string().required("Status is required"),
    shippingService: Yup.string().required("Shipping Service is required"),
  });;