import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Sidebar from "../../../Components/Navbar/Sidebar";
import TobBar from "../../../Components/Navbar/TobBar";
import { setOrder } from "../../../features/UserReducer";
import axios from "axios";

const ViewOder = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.order_list);

  useEffect(() => {
    const getData = async () => {
      try {
        const order = await axios.get(
          `https://65630c3eee04015769a6bb77.mockapi.io/orders/${params.id}`
        );
        dispatch(setOrder(order.data));
        console.log(orders);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TobBar />
              <div className="container-fluid">
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
                          {orders && (
                            <div>
                              <p>Order ID: {orders.id}</p>
                              <p>Order Number: {orders.orderNumber}</p>
                              <p>Customer Name: {orders.customerName}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOder;
