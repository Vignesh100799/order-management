import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
    orderId: Yup.string().required("Order ID is required"),
    orderNumber: Yup.string().required("Order Number is required"),
    status: Yup.string().required("Status is required"),
    item: Yup.string().required("Item is required"),
    customerName: Yup.string().required("Customer Name is required"),
    shippingService: Yup.string().required("Shipping Service is required"),
    trackingCode: Yup.string().required("Tracking Code is required"),
  });