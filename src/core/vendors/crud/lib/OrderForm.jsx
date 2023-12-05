import React from "react";

const OrderForm = ({ formik, title, buttonText }) => {
  return (
    <article className="card">
      <header className="card-header">
        <h4 className="text-center text-orange fw-semibold">{title}</h4>
      </header>
      <main className="card-body">
        <form action="" onSubmit={formik.handleSubmit}>
          <fieldset>
            <main className="row">
              <section className="col-lg-4 mb-3">
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
                  <span className="invalid-feedback">
                    {formik.errors.orderId}
                  </span>
                )}
              </section>
              <section className="col-lg-4 mb-3">
                <label htmlFor="orderNumber" className="form-label">
                  Oder Number
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.orderNumber && formik.errors.orderNumber
                      ? "is-invalid"
                      : ""
                  }`}
                  name="orderNumber"
                  id="orderNumber"
                  value={formik.values.orderNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.orderNumber && formik.errors.orderNumber && (
                  <span className="invalid-feedback">
                    {formik.errors.orderNumber}
                  </span>
                )}
              </section>
              <section className="col-lg-4 mb-3">
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
                    <option value="delivered">delivered</option>
                    <option value="Return">Return</option>
                  </optgroup>
                </select>
                {formik.touched.status && formik.errors.status && (
                  <span className="invalid-feedback">
                    {formik.errors.status}
                  </span>
                )}
              </section>

              <section className="col-lg-4 mb-3">
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
                  <span className="invalid-feedback">{formik.errors.item}</span>
                )}
              </section>
              <section className="col-lg-4 mb-3">
                <label htmlFor="customerName" className="form-label">
                  Customer Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.customerName && formik.errors.customerName
                      ? "is-invalid"
                      : ""
                  }`}
                  name="customerName"
                  id="customerName"
                  value={formik.values.customerName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.customerName && formik.errors.customerName && (
                  <span className="invalid-feedback">
                    {formik.errors.customerName}
                  </span>
                )}
              </section>
              <section className="col-lg-4 mb-3">
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
                    <option value="standard">standard</option>
                    <option value="priority">priority</option>
                    <option value="express">express</option>
                  </optgroup>
                </select>
                {formik.touched.shippingService &&
                  formik.errors.shippingService && (
                    <span className="invalid-feedback">
                      {formik.errors.shippingService}
                    </span>
                  )}
              </section>
              <section className="col-lg-4 mb-3">
                <label htmlFor="trackingCode" className="form-label">
                  Tracking Code
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.trackingCode && formik.errors.customerName
                      ? "is-invalid"
                      : ""
                  }`}
                  name="trackingCode"
                  id="trackingCode"
                  value={formik.values.trackingCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.trackingCode && formik.errors.trackingCode && (
                  <span className="invalid-feedback">
                    {formik.errors.trackingCode}
                  </span>
                )}
              </section>
            </main>
            <section className="col-lg-12 text-center mt-4">
              <input
                type="submit"
                className="btn btn-primary px-5 col-lg-3 py-2"
                value={buttonText}
              />
            </section>
          </fieldset>
        </form>
      </main>
    </article>
  );
};

export default OrderForm;
