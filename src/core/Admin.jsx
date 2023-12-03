import React, { useEffect, useMemo } from 'react'
import Sidebar from '../Components/Navbar/Sidebar'
import TobBar from '../Components/Navbar/TobBar'
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, fetchOrders } from '../features/UserReducer';
import { HashLoader } from 'react-spinners';
import { EyeFill, PencilSquare, Plus, TrashFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { MaterialReactTable } from 'material-react-table';
import { mainTable } from './vendors/Table/mainTable';


const Admin = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.order_list);
  const handleDeleteOrder =(orderId) => {
    try {
     dispatch(deleteOrder(orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
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
  const reversedOrders = useMemo(() => [...orders].reverse(), [orders]);
  const columns = useMemo(
    () => [...mainTable,...actions],
    [handleDeleteOrder] // Include dependencies if any
  );


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrders());
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
                    data={reversedOrders}
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