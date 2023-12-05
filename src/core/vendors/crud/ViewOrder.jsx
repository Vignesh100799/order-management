import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { viewOrder } from "../../../features/UserReducer";
import axios from "axios";
import { config } from "../../../config/config";
import Layout from "../../layout/Layout";

const ViewOrder = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { viewOrderInfo } = useSelector((state) => state.order_list);

  useEffect(() => {
    const getData = async () => {
      try {
        const order = await axios.get(
          `${config.ordersApi}/orders/${params.id}`
        );
        dispatch(viewOrder(order.data));
        console.log(viewOrderInfo);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dispatch, params.id]);
  return (
    <Layout>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Order </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 text-center">
              <h6 className="m-0 font-weight-bold text-orange">
                Order Overview
              </h6>
            </div>
            <div className="card-body">
              <div>
                {viewOrderInfo && (
                  <div>
                    <p>Order ID: {viewOrderInfo.id}</p>
                    <p>Order Number: {viewOrderInfo.orderNumber}</p>
                    <p>Customer Name: {viewOrderInfo.customerName}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewOrder;
