import React, { useEffect, useMemo } from 'react'
import Sidebar from '../Components/Navbar/Sidebar'
import TobBar from '../Components/Navbar/TobBar'
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, setOrder } from '../features/UserReducer';
import { HashLoader } from 'react-spinners';
import { EyeFill, PencilSquare, Plus, TrashFill } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import { MaterialReactTable } from 'material-react-table';
import { mainTable } from './vendors/Table/mainTable';
import axios from 'axios';


const Admin = () => {
  const dispatch = useDispatch();
  const params = useParams()
  const { orders, status, error } = useSelector((state) => state.order_list);
  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(
        `https://65630c3eee04015769a6bb77.mockapi.io/orders/${orderId}`
      );

      dispatch(deleteOrder(orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const actions =[
    {
      accessorKey: 'actions',
      header: 'Actions',
      Cell: ({ row }) => (
        <div className='d-flex justify-content-around'>
          <Link to={`/view-order/${row.original.id}`} className='btn p-0 m-0'>
            <EyeFill className='fs-5 text-orange' />
          </Link>
          <Link to={`/edit-order/${row.original.id}`} className='btn p-0 m-0'>
            <PencilSquare className='fs-5 text-primary' />
          </Link>
          <button className='btn p-0 m-0' onClick={() => handleDeleteOrder(row.original.id)}>
            <TrashFill className='fs-5 text-danger' />
          </button>
        </div>
      )
    }
  ]
  // const reversedOrders = useMemo(() => (orders ? [...orders].reverse() : []), [orders]);

  const columns = useMemo(
    () => [...mainTable,...actions],
    [handleDeleteOrder] // Include dependencies if any
  );


  useEffect(() => {
    if (status === 'idle') {
      // Assuming fetchOrders is a function that fetches orders from the API
      const fetchData = async () => {
        try {
          const response = await axios.get("https://65630c3eee04015769a6bb77.mockapi.io/orders");
          dispatch(setOrder(response.data)); // Assuming response.data is an array of orders
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
  
      fetchData();
    }
  }, [status, dispatch]);

  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TobBar />
            <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Orders</h1>
              <Link to={'/create-order'} className="p-0 px-2 py-1 m-0 btn bg-orange text-white shadow-sm"> <Plus className='fs-5 p-0 m-0' />create order</Link>
            </div>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-orange text-center">
                    DataTables Example
                  </h6>
                </div>
                <div className="card-body d-flex justify-content-center">
                  {
                    status === 'loading' ? <HashLoader color="#DB551B"  className="text-center" /> :
                    <MaterialReactTable
                    columns={columns}
                    data={orders}
                    enableGlobalFilterModes
                    initialState={{
                      showGlobalFilter: true,
                    }}
                    positionGlobalFilter="left"
                    muiSearchTextFieldProps={{
                      placeholder: `Search ${orders.length} rows`,
                      sx: { minWidth: '300px' },
                      variant: 'outlined',
                    }}
                    muiPaginationProps={{
                      showRowsPerPage: true,
                      shape: 'rounded',
                      
                    }
                    
                  }
                  paginationDisplayMode='pages'  
                  defaultColumn={{
                    minSize: 20,
                    maxSize:100,
                    size:180
                  }}               
                  />
                  }
                </div>
              </div>

            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Admin