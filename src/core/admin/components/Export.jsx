// Export.js
import React from 'react';
import { Box, Button} from '@mui/material';
import {Download} from "react-bootstrap-icons";
import { jsPDF } from 'jspdf'; 
import autoTable from 'jspdf-autotable';


const Export = ({ table,columns }) => {
    const handleExportRows = (rows) => {
        const doc = new jsPDF();
        const tableData = rows.map((row) => Object.values(row.original));
        const tableHeaders = columns.map((c) => c.header);
        autoTable(doc, {
          head: [tableHeaders],
          body: tableData,
        });
        doc.save('order-info.pdf');
      };
    return(
  <Box sx={{ display: 'flex', gap: '16px', padding: '8px', flexWrap: 'wrap' }}>
    <Button
      disabled={table.getPrePaginationRowModel().rows.length === 0}
      onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}
      startIcon={<Download />}
    >
      Export All Rows
    </Button>
    <Button
      disabled={table.getRowModel().rows.length === 0}
      onClick={() => handleExportRows(table.getRowModel().rows)}
      startIcon={<Download />}
    >
      Export Page Rows
    </Button>
  </Box>
);}

export default Export;
