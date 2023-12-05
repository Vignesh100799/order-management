import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'react-bootstrap-icons';
import { customerData } from './vendors/Table/data';
import { listingTable } from './vendors/Table/listingTable';
import { MaterialReactTable } from 'material-react-table';
import Layout from './layout/Layout';

const Listing = () => {
  const uniqueCities = [...new Set(customerData.map((item) => item.address.city))];
  const [searchInput, setSearchInput] = useState('');

  const filteredCities = uniqueCities.filter((city) =>
    city.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearch = (e) => setSearchInput(e.target.value)
  

  const columns = useMemo(
    () => [
      ...listingTable,
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: ({ row }) => {
          const { status } = row.original;
          const badgeClass =
            status === 'cancelled'
              ? 'bg-danger'
              : status === 'order'
                ? 'bg-primary'
                : 'bg-success';

          return (
            <div
              className={`badge ${badgeClass}`}
              style={{ padding: '8px', borderRadius: '5px', color: 'black' }}
            >
              {status}
            </div>
          );
        },
      },
      {
        accessorKey: 'shippingService',
        header: 'Service',
        Cell: ({ row }) => {
          const { shippingService } = row.original;
          const badgeClass =
            shippingService === 'express'
              ? 'bg-danger'
              : shippingService === 'priority'
                ? 'bg-primary'
                : 'bg-success';

          return (
            <div
              className={`badge ${badgeClass}`}
              style={{ padding: '8px', borderRadius: '5px', color: 'black' }}
            >
              {shippingService}
            </div>
          );
        },
      },
    ],
  );

  return (
              <Layout >
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <div className="col-md-4">
                  <h1 className="h3 mb-0 text-gray-800">Orders</h1>
                </div>
                <div className="col-md-4">
                  <input
                    type="search"
                    className="form-control flex-fill"
                    onChange={(e) => handleSearch(e)}
                    placeholder="Search here"
                  />
                </div>
                <div className="col-md-4 text-end">
                  <Link
                    to={'/create-order'}
                    className="p-0 px-2 py-1 m-0  btn bg-orange text-white shadow-sm"
                  >
                    <Plus className="fs-5 p-0 m-0" />
                    create order
                  </Link>
                </div>
              </div>
              <div className="row">
                {filteredCities.map((city) => (
                  <div key={city} className="col-lg-6 mb-4">
                    <div className="card shadow h-100">
                      <div className="card-header text-center py-3">
                        <h6 className="m-0 font-weight-bold text-orange text-center">{city}</h6>
                      </div>
                      <MaterialReactTable
                        columns={columns}
                        data={customerData.filter((item) => item.address.city === city)}
                        enableRowNumbers={true}
                        enableColumnActions={false}
                        enableColumnFilters={false}
                        enableDensityToggle={false}
                        initialState={{
                          density: 'compact',
                          showColumnFilters: false,
                          pagination: {
                            pageSize: 5,
                          },
                        }}
                        muiTableBodyProps={{
                          sx: {
                            textAlign: 'center',
                          },
                        }}
                        muiSearchTextFieldProps={{
                          placeholder: `Search ${customerData.filter(
                            (item) => item.address.city === city
                          ).length} rows`,
                          sx: { minWidth: '300px' },
                          variant: 'outlined',
                        }}
                        muiPaginationProps={{
                          showRowsPerPage: true,
                          shape: 'rounded',
                        }}
                        paginationDisplayMode="pages"
                        defaultColumn={{
                          minSize: 20,
                          maxSize: 100,
                          size: 180,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div></Layout>         
  );
};

export default Listing;
