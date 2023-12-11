import { jsPDF } from 'jspdf'; //or use your library of choice here
import autoTable from 'jspdf-autotable';
import { Box, Button } from '@mui/material';
import { Download } from 'react-bootstrap-icons';

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

 export const pdfExport = ({ table }) => (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        padding: '8px',
        flexWrap: 'wrap',
      }}
    >
      <Button
        disabled={table.getPrePaginationRowModel().rows.length === 0}
        onClick={() =>
          handleExportRows(table.getPrePaginationRowModel().rows)
        }
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
  )