import React, { useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, setLoading, setOrder } from "../features/UserReducer";
import { HashLoader } from "react-spinners";
import {
  CircleFill,
  EyeFill,
  PencilSquare,
  Plus,
  TrashFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { MaterialReactTable } from "material-react-table";
import { mainTable } from "./vendors/Table/mainTable";
import axios from "axios";
import { config } from "../config/config";
import Layout from "./layout/Layout";

const Order = () => {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.order_list);
  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`${config.ordersApi}/orders/${orderId}`);
      dispatch(deleteOrder(orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const actions = [
    {
      accessorKey: "actions",
      header: "Actions",
      Cell: ({ row }) => (
        <div className="d-flex justify-content-around">
          <Link to={`/view-order/${row.original.id}`} className="btn p-0 m-0">
            <EyeFill className="fs-5 text-orange" />
          </Link>
          <Link to={`/edit-order/${row.original.id}`} className="btn p-0 m-0">
            <PencilSquare className="fs-5 text-primary" />
          </Link>
          <button
            className="btn p-0 m-0"
            onClick={() => handleDeleteOrder(row.original.id)}
          >
            <TrashFill className="fs-5 text-danger" />
          </button>
        </div>
      ),
    },
  ];

  const columns = useMemo(
    () => [
      ...mainTable,
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
      ...actions,
    ],
    [handleDeleteOrder]
  );

  useEffect(() => {
    const fetchData = async () => {
      if (orders.length === 0) {
        try {
          dispatch(setLoading());
          const response = await axios.get(`${config.ordersApi}/orders`);
          dispatch(setOrder(response.data));
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <Layout>
      <hgroup className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Orders</h1>
        <Link
          to={"/create-order"}
          className="p-0 px-2 py-1 m-0 btn bg-orange text-white shadow-sm"
        >
          {" "}
          <Plus className="fs-5 p-0 m-0" />
          create order
        </Link>
      </hgroup>
      <article className="card shadow mb-4 align-self-center">
        <header className="card-header py-3 mb-1">
          <h6 className="m-0 font-weight-bold text-orange text-center">
            DataTables Example
          </h6>
        </header>
        <main className="d-flex justify-content-center">
        {orders.length === 0 && loading ? (
          <HashLoader
            color="#DB551B"
            className="text-center align-self-center my-3"
          />
        ) : (
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
              maxSize: 150,
              size: 180,
            }}
          />
        )}
        </main>
      </article>
    </Layout>
  );
};

export default Order;
