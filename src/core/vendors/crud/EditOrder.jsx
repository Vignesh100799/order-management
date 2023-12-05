import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editOrder } from "../../../features/UserReducer";
import { validationSchema } from "./Schema/validationSchema";
import TobBar from "../../../Components/Navbar/TobBar";
import Sidebar from "../../../Components/Navbar/Sidebar";
import axios from "axios";
import { config } from "../../../config/config";

const EditOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // const setOrder = useSelector((state) => state.order_list);
  
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
        const updatedData = await axios.put(`${config.ordersApi}/orders/${params.id}`,
      values)
      dispatch(editOrder(updatedData.data))
      navigate('/admin')
      } catch (error) {
        console.error(error)
      }
      
    },
  });
  useEffect(() => {
    const getData = async () => {
      try {
        if (!params.id) {
          console.error("Error in edit order 45");
          return;
        }
        const dataList = await axios.get(`${config.ordersApi}/orders/${params.id}`);
        dispatch(editOrder({ id: dataList.data.id, ...dataList.data }));
        formik.setValues(dataList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  
  }, [params.id,dispatch]);
  

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TobBar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4 mx-lg-5">
                <h1 className="h3 mb-0 text-gray-800">New Order</h1>
                <Link
                  to={"/order"}
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50" />
                  Back To Oder
                </Link>
              </div>
              <div className="card">
                <div className="card-body">
                  <form action="" onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-lg-4 mb-3">
                        <label htmlFor="orderid" className="form-label">
                          Oder ID
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.orderId && formik.errors.orderId
                              ? "is-invalid"
                              : ""
                          }`}
                          name="orderId"
                          id="orderId"
                          value={formik.values.orderId}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.orderId && formik.errors.orderId && (
                          <div className="invalid-feedback">
                            {formik.errors.orderId}
                          </div>
                        )}
                      </div>
                      <div className="col-lg-4 mb-3">
                        <label htmlFor="orderNumber" className="form-label">
                          Oder Number
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.orderNumber &&
                            formik.errors.orderNumber
                              ? "is-invalid"
                              : ""
                          }`}
                          name="orderNumber"
                          id="orderNumber"
                          value={formik.values.orderNumber}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.orderNumber &&
                          formik.errors.orderNumber && (
                            <div className="invalid-feedback">
                              {formik.errors.orderNumber}
                            </div>
                          )}
                      </div>
                      <div className="col-lg-4 mb-3">
                        <label htmlFor="status" className="form-label">
                          Status
                        </label>
                        <select
                          className={`form-select ${
                            formik.touched.status && formik.errors.status
                              ? "is-invalid"
                              : ""
                          }`}
                          value={formik.values.status}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name="status"
                          id="status"
                        >
                          <optgroup label="status">
                            <option value="">choose</option>
                            <option value="order">order</option>
                            <option value="production">production</option>
                            <option value="cancelled">cancelled</option>
                            <option value="deliverd">deliverd</option>
                            <option value="Return">Return</option>
                          </optgroup>
                        </select>
                        {formik.touched.status && formik.errors.status && (
                          <div className="invalid-feedback">
                            {formik.errors.status}
                          </div>
                        )}
                      </div>

                      <div className="col-lg-4 mb-3">
                        <label htmlFor="item" className="form-label">
                          Item
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.item && formik.errors.item
                              ? "is-invalid"
                              : ""
                          }`}
                          name="item"
                          id="item"
                          value={formik.values.item}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.item && formik.errors.item && (
                          <div className="invalid-feedback">
                            {formik.errors.item}
                          </div>
                        )}
                      </div>
                      <div className="col-lg-4 mb-3">
                        <label htmlFor="customerName" className="form-label">
                          Customer Name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.customerName &&
                            formik.errors.customerName
                              ? "is-invalid"
                              : ""
                          }`}
                          name="customerName"
                          id="customerName"
                          value={formik.values.customerName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.customerName &&
                          formik.errors.customerName && (
                            <div className="invalid-feedback">
                              {formik.errors.customerName}
                            </div>
                          )}
                      </div>
                      <div className="col-lg-4 mb-3">
                        <label htmlFor="shippingService" className="form-label">
                          Shipping Service
                        </label>
                        <select
                          className={`form-select ${
                            formik.touched.shippingService &&
                            formik.errors.shippingService
                              ? "is-invalid"
                              : ""
                          }`}
                          value={formik.values.shippingService}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name="shippingService"
                          id="shippingService"
                        >
                          <optgroup label="service">
                            <option value="">choose</option>
                            <option value="Standart">Standart</option>
                            <option value="Priority">Priority</option>
                            <option value="Express">Express</option>
                          </optgroup>
                        </select>
                        {formik.touched.shippingService &&
                          formik.errors.shippingService && (
                            <div className="invalid-feedback">
                              {formik.errors.shippingService}
                            </div>
                          )}
                      </div>
                      <div className="col-lg-4 mb-3">
                        <label htmlFor="trackingCode" className="form-label">
                          Tracking Code
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.trackingCode &&
                            formik.errors.customerName
                              ? "is-invalid"
                              : ""
                          }`}
                          name="trackingCode"
                          id="trackingCode"
                          value={formik.values.trackingCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.trackingCode &&
                          formik.errors.trackingCode && (
                            <div className="invalid-feedback">
                              {formik.errors.trackingCode}
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="col-lg-12 text-center mt-4">
                      <input
                        type="submit"
                        className="btn btn-primary px-5 col-lg-3 py-2"
                        value={"Submit"}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
