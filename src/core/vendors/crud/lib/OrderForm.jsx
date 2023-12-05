import React from 'react'

const OrderForm = ({ formik, title, buttonText }) => {
    return (
        <div className="card">
            <div className="card-header">
            <h4 className="text-center text-orange fw-semibold">{title}</h4>
            </div>
            <div className="card-body">

                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <label htmlFor="orderid" className="form-label">
                                Oder ID
                            </label>
                            <input type="text"
                                className={`form-control ${formik.touched.orderId &&
                                    formik.errors.orderId
                                    ? 'is-invalid'
                                    : ""}`}
                                name="orderId"
                                id="orderId"
                                value={formik.values.orderId}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.orderId && formik.errors.orderId &&
                                (<div className="invalid-feedback">
                                    {formik.errors.orderId}
                                </div>)
                            }
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label htmlFor="orderNumber" className="form-label">
                                Oder Number
                            </label>
                            <input type="text"
                                className={`form-control ${formik.touched.orderNumber &&
                                    formik.errors.orderNumber
                                    ? 'is-invalid'
                                    : ""}`}
                                name="orderNumber"
                                id="orderNumber"
                                value={formik.values.orderNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.orderNumber && formik.errors.orderNumber &&
                                (<div className="invalid-feedback">
                                    {formik.errors.orderNumber}
                                </div>)
                            }
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label htmlFor="status" className="form-label">
                                Status
                            </label>
                            <select
                                className={`form-select ${formik.touched.status && formik.errors.status ? 'is-invalid' : ''
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
                                <div className="invalid-feedback">{formik.errors.status}</div>
                            )}
                        </div>

                        <div className="col-lg-4 mb-3">
                            <label htmlFor="item" className="form-label">
                                Item
                            </label>
                            <input type="text"
                                className={`form-control ${formik.touched.item &&
                                    formik.errors.item
                                    ? 'is-invalid'
                                    : ""}`}
                                name="item"
                                id="item"
                                value={formik.values.item}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />
                            {
                                formik.touched.item && formik.errors.item && (
                                    <div className="invalid-feedback">{formik.errors.item}</div>
                                )
                            }
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label htmlFor="customerName"
                                className="form-label"
                            >
                                Customer Name
                            </label>
                            <input type="text"
                                className={`form-control ${formik.touched.customerName &&
                                    formik.errors.customerName
                                    ? 'is-invalid'
                                    : ""}`}
                                name="customerName"
                                id="customerName"
                                value={formik.values.customerName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.customerName && formik.errors.customerName && (
                                    <div className="invalid-feedback">{formik.errors.customerName}</div>
                                )
                            }
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label htmlFor="shippingService" className="form-label">
                                Shipping Service
                            </label>
                            <select
                                className={`form-select ${formik.touched.shippingService && formik.errors.shippingService ? 'is-invalid' : ''
                                    }`}
                                value={formik.values.shippingService}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="shippingService"
                                id="shippingService"
                            >
                                <optgroup label="service">
                                    <option value="">choose</option>
                                    <option value="Standart">Standard</option>
                                    <option value="Priority">Priority</option>
                                    <option value="Express">Express</option>

                                </optgroup>
                            </select>
                            {formik.touched.shippingService && formik.errors.shippingService && (
                                <div className="invalid-feedback">{formik.errors.shippingService}</div>
                            )}
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label htmlFor="trackingCode" className="form-label">
                                Tracking Code
                            </label>
                            <input type="text"
                                className={`form-control ${formik.touched.trackingCode &&
                                    formik.errors.customerName
                                    ? 'is-invalid'
                                    : ""}`}
                                name="trackingCode"
                                id="trackingCode"
                                value={formik.values.trackingCode}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.trackingCode && formik.errors.trackingCode && (
                                    <div className="invalid-feedback">{formik.errors.trackingCode}</div>
                                )
                            }
                        </div>

                    </div>
                    <div className="col-lg-12 text-center mt-4">
                        <input type="submit" className="btn btn-primary px-5 col-lg-3 py-2" value={buttonText} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderForm