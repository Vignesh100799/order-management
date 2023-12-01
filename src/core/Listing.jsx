
import React, { useEffect } from 'react';
import Sidebar from '../Components/Navbar/Sidebar.jsx';
import TobBar from '../Components/Navbar/TobBar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Table from './vendors/Table/Table.jsx';

import { fetchOrders } from '../features/UserReducer.jsx';
import { HashLoader } from 'react-spinners';



const Listing = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.order_list);


  useEffect(() => {
    if (orders.length === 0) {
      dispatch(fetchOrders());
    }
  }, [dispatch, orders.length]);
  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TobBar />
            <div className="container-fluid">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-orange text-center">
                    DataTables Example
                  </h6>
                </div>
                <div className="card-body d-flex justify-content-center">
                  {
                    status === 'loading' ? <HashLoader color="#DB551B"  className="text-center" /> :
                      <Table orders={orders} />
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
