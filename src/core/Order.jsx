import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import Sidebar from '../Components/Navbar/Sidebar.jsx';
import TobBar from '../Components/Navbar/TobBar.jsx';
import { Coloums } from './vendors/Table/table.js';
import { fetchOrders } from '../features/UserReducer.jsx';
import { HashLoader } from 'react-spinners';

const Order = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.order_list);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrders());
    }
  }, [status, dispatch]);

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
            <div className={status === 'loading'?'d-flex flex-column justify-content-center align-items-center':'container'}>
              {
                status === 'loading'? <HashLoader color="#DB551B"  className="text-center" /> :
              <DataTable
              highlightOnHover={true}
              columns={Coloums}
              data={orders}
              // selectableRows	
              fixedHeader
              pagination
              />
            }

            </div>

            
          </div>
        </div>
         
    </div>
    </div>
  )
}

export default Order