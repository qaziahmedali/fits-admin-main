import { IDataTableStyles } from "react-data-table-component";

export const customStyles = {
  table: {
    style: {
      color: "red",
      backgroundColor: "#ffffff",
      height: `calc(100vh-200px)`,
      overflowY: "auto",
      overflowX: "hidden",
    },
  },
  header: {
    style: {
      fontSize: "8px",
      color: "#F6FFFC",
      backgroundColor: "#fdfd",
      maxHeight: "12px",
      paddingLeft: "8px",
      paddingRight: "8px",
      display: "none",
    },
  },
  rows: {
    style: {
      color: "black",
      fontWeight: 500,
    },
  },
  headCells: {
    style: {
      display: "block",
      paddingLeft: "8px",
      paddingRight: "8px",
      fontWeight: "bold",
      fontSize: "15px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};
