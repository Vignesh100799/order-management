import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "./Schema/validationSchema";
import { useDispatch } from "react-redux";

import axios from "axios";
import { createOder } from "../../../features/UserReducer";
import { config } from "../../../config/config";

import OrderForm from "./lib/OrderForm";
import Layout from "../../layout/Layout";
const CreateOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      orderId: "",
      orderNumber: "",
      status: "",
      item: "",
      customerName: "",
      shippingService: "",
      trackingCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${config.ordersApi}/orders`, values);
        dispatch(createOder(response.data));
        navigate("/admin");
      } catch (error) {
        console.error(error);
      }
      formik.resetForm();
    },
  });
  return (
    <Layout>
      <hgroup className="d-sm-flex align-items-center justify-content-between mb-4 mx-lg-5">
        <h1 className="h3 mb-0 text-gray-800">Orders</h1>
        <Link
          to={"/order"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" />
          Back To Oder
        </Link>
      </hgroup>
      <OrderForm formik={formik} title="New Order" buttonText="Submit" />
    </Layout>
  );
};

export default CreateOrder;
