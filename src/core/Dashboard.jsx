import React, { useEffect } from "react";
import LineChartOD from "./vendors/utils/LineChart";
import ReportCard from "./vendors/others/ReportCard";
import './vendors/style/core.css'
import PieChartOD from "./vendors/utils/PieChart";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setLoading, setOrder } from "../features/UserReducer";
import { config } from "../config/config";
import Layout from "./layout/Layout";


const Dashboard = () => {

  const { orders, loading } = useSelector((state) => state.order_list);
  const dash = [
    {
      title: 'total ordered',
      value: orders.length,
      icon: "fa-truck"
    },
    {
      title: 'total delivered',
      value: orders.filter((order) => order.status === 'delivered').length,

      icon: "fa-truck"
    },
    {
      title: 'new orders',
      value: orders.filter((order) => order.status === 'order').length,
      icon: "fa-truck"
    },
  ]
  console.log(orders.filter((order) => order.status === 'delivered').length)
  const dispatch = useDispatch()
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading())
        const response = await axios.get(`${config.ordersApi}/orders`)
        dispatch(setOrder(response.data))

      } catch (error) {
        console.log(error)
      }
    }
    if (orders.length === 0) {
      getData()
    }

  }, [dispatch])
  return (

    <Layout >
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a> */}
      </div>
      <div className="row">

        {
          dash.map((report, index) => <ReportCard {...report} loading={loading} key={index} />)
        }

      </div>

      <div className="row ">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4 ">
            <div className="card-header py-3 text-center">
              <h6 className="m-0 font-weight-bold text-orange">Earnings Overview</h6>
            </div>
            <div className="card-body">
              <div className="chart-area">

                <LineChartOD />

              </div>
            </div>
          </div>
        </div>


        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">

            <div className="card-header py-3 text-center">
              <h6 className="m-0 font-weight-bold text-orange">Revenue Sources</h6>
            </div>

            <div className="card-body">
              <div className="chart-pie">
                <PieChartOD />
              </div>
              <div className="mt-4 text-center small">
                <span className="mr-2">
                  <i className="fas fa-circle text-primary" /> Direct
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-success" /> Social
                </span>
                <span className="mr-2">
                  <i className="fas fa-circle text-info" /> Referral
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default Dashboard;
