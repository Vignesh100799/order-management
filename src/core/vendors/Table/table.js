export const Coloums = [
    {
      name: "Order ID",
      selector : row=>row.orderid,
      sortable : true,
    },
    {
      name: "Order Number",
      selector : row=>row.ordernumber,
      sortable : true,
    },
    {
      name: "Status",
      selector : row=>row.status,
      sortable : true,
    },
    {
      name: "Item",
      selector : row=>row.item,
      sortable : true,
    },
    {
      name: "Customer Name",
      selector : row=>row.customername,
      sortable : true,
    },
    {
      name: "Shipping Service",
      selector : row=>row.shippingservice,
      sortable : true,
    },
    {
      name: "Tracking code",
      selector : row=>row.trackingcode,
      sortable : true,
    },
  ];