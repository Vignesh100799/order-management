import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4';

const Table = ({ orders }) => {
  useEffect(() => {
    if (!orders || orders.length === 0) {
      return;
    }

    const table = $('#dataTable').DataTable({
      order: [[0, 'desc']],
    });

    return () => {
      table.destroy();
    };
  }, [orders]);

  return (
    <div className='table-responsive'>
      <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0'>
        <thead>
          <tr>
            <th className='p-3'>ORDER ID</th>
            <th className='p-3'>ORDER NUMBER</th>
            <th className='p-3'>STATUS</th>
            <th className='p-3'>ITEM</th>
            <th className='p-3'>CUSTOMER</th>
            <th className='p-3'>SHIPPING SERVICE</th>
            <th className='p-3'>TRACKING CODE</th>
            <th className='p-3'>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.orderid}</td>
              <td>{user.ordernumber}</td>
              <td>{user.item}</td>
              <td>{user.customername}</td>
              <td>{/* Add the shipping service here */}</td>
              <td>{user.trackingcode}</td>
              <td>{/* Add the action here */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
