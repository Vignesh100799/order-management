import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CircleFill, Plus } from "react-bootstrap-icons";
import { customerData } from "./vendors/Table/data";
import { listingTable } from "./vendors/Table/listingTable";
import { MaterialReactTable } from "material-react-table";
import Layout from "./layout/Layout";

const Listing = () => {
  const uniqueCities = [
    ...new Set(customerData.map((item) => item.address.city)),
  ];
  const [searchInput, setSearchInput] = useState("");

  const filteredCities = uniqueCities.filter((city) =>
    city.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearch = (e) => setSearchInput(e.target.value);

  const columns = useMemo(() => [
    ...listingTable,
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ row }) => {
        const { status } = row.original;
        return (
          <div
            className={`badge border p-1 ${
              status === "cancelled"
                ? "border-danger bg-danger-subtle text-danger"
                : status === "order"
                ? "border-primary bg-primary-subtle text-primary"
                : status === "production"
                ? "border-warning bg-warning-subtle text-warning"
                : status === "delivered"
                ? "border-success bg-success-subtle text-success"
                : "border-secondary bg-secondary-subtle text-secondary"
            }`}
          >
            {status}
          </div>
        );
      },
    },
    {
      accessorKey: "shippingService",
      header: "Service",
      Cell: ({ row }) => {
        const { shippingService } = row.original;

        return (
          <div className={`badge`}>
            <span>
              {shippingService === "express" ? (
                <CircleFill className="text-danger small" />
              ) : shippingService === "priority" ? (
                <CircleFill className="text-info small" />
              ) : shippingService === "standard" ? (
                <CircleFill className="text-warning small" />
              ) : (
                <CircleFill className="text-secondarry small" />
              )}
            </span>

            <span className="ml-1 text-black">{shippingService}</span>
          </div>
        );
      },
    },
  ]);

  return (
    <Layout>
      <article className="d-sm-flex align-items-center justify-content-between mb-4">
        <section className="col-md-4">
          <h1 className="h3 mb-0 text-gray-800">Orders</h1>
        </section>
        <section className="col-md-4">
          <input
            type="search"
            className="form-control flex-fill"
            onChange={(e) => handleSearch(e)}
            placeholder="Search here"
          />
        </section>
        <section className="col-md-4 text-end">
          <Link
            to={"/create-order"}
            className="p-0 px-2 py-1 m-0  btn bg-orange text-white shadow-sm"
          >
            <Plus className="fs-5 p-0 m-0" />
            create order
          </Link>
        </section>
      </article>
      <article className="row">
        {filteredCities.map((city) => (
          <main key={city} className="col-lg-6 mb-4">
            <section className="card shadow h-100">
              <header className="card-header text-center py-3 mb-1">
                <h6 className="m-0 font-weight-bold text-orange text-center">
                  {city}
                </h6>
              </header>
              <MaterialReactTable
                columns={columns}
                data={customerData.filter((item) => item.address.city === city)}
                enableRowNumbers={true}
                enableColumnActions={false}
                enableColumnFilters={false}
                enableDensityToggle={false}
                initialState={{
                  density: "compact",
                  showColumnFilters: false,
                  pagination: {
                    pageSize: 5,
                  },
                }}
                muiTableBodyProps={{
                  sx: {
                    textAlign: "center",
                  },
                }}
                muiSearchTextFieldProps={{
                  placeholder: `Search ${
                    customerData.filter((item) => item.address.city === city)
                      .length
                  } rows`,
                  sx: { minWidth: "300px" },
                  variant: "outlined",
                }}
                muiPaginationProps={{
                  showRowsPerPage: true,
                  shape: "rounded",
                }}
                paginationDisplayMode="pages"
                defaultColumn={{
                  minSize: 20,
                  maxSize: 100,
                  size: 180,
                }}
              />
            </section>
          </main>
        ))}
      </article>
    </Layout>
  );
};

export default Listing;
