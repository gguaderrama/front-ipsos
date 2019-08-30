import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import DatePickerDecored from "../DatePickerDecored";
import TextFieldDecored from "../TextFieldDecored";
import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import AlertDialog from "../Dialog";
class TabledDecored extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
    this.handleClickOpenModal = this.handleClickOpenModal.bind(this);
  }
  filterCaseInsensitive(filter, row) {
    const id = filter.pivotId || filter.id;
    if(typeof(row[id]) === 'string'){
      return row[id] !== undefined
        ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
        : true;
    }
    if(typeof(row[id]) === 'number'){
      return row[id] !== undefined
        ? String(row[id]).startsWith(filter.value)
        : true;
    }
  }

  handleClickOpenModal() {
    this.setState({
      openModal: !this.state.openModal
    });
  }

  render() {
    const {
      addButton = false,
      Allactions = true,
      handleOnAdd = e => console.log("Add Table:>", e),
      handleOnDelete = e => console.log("Delete Table:>", e),
      handleOnEdit = e => console.log("Edit Table:>", e),
      nameButtonAdd = "AGREGAR",
      tableData = [
        { name: "Tanner Linsley", age: 26 },
        { name: "Bob Dylan", age: 53 },
        { name: "Gloria Mendez", age: 25 },
        { name: "Angel Linsley", age: 15 }
      ],
      columns = [
        {
          Header: "Name",
          accessor: "name" // String-based value accessors!
        },
        {
          Header: "Age",
          accessor: "age",
          Cell: props => <span className="number">{props.value}</span> // Custom cell components!
        }
      ]
    } = this.props;

    let actions = [
      {
        Header: "Acciones",
        width: 100,
        accessor: "age",
        sortable: false,
        filterable: false,
        Cell: row => (
          <div style={{ textAlign: "center" }}>
            <IconButton onClick={handleOnEdit}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={this.handleClickOpenModal}>
              <DeleteIcon style={{ color: "#d32f2f" }} />
            </IconButton>
          </div>
        )
      }
    ];
    let tableColumns = columns;
    if (Allactions === true) {
      tableColumns = [...tableColumns, ...actions];
    }
    return (
      <div>
        <AlertDialog
          open={this.state.openModal}
          handleCloseDialog={() => {
            this.handleClickOpenModal();
          }}
          handleOnDelete = { handleOnDelete}
        />
        {addButton ? (
          <div
            style={{
              width: "10%",
              float: "right",
              marginBottom: "1%",
              textAlign: "right"
            }}
          >
            <Button variant="contained" color="primary" onClick={handleOnAdd}>
              {nameButtonAdd || ""}
            </Button>
            <br />
          </div>
        ) : (
          <div />
        )}
        <div className="tablas">
          <ReactTable
            data={tableData}
            columns={tableColumns}
            defaultPageSize={5}
            loading={false}
            sortable={true}
            className="-striped -highlight"
            nextText="Siguiente"
            previousText="Anterior"
            noDataText="No hay datos"
            pageText="Página"
            ofText="de"
            filterable={true}
            defaultFilterMethod={(filter, row) =>
              this.filterCaseInsensitive(filter, row)
            }
            rowsText="filas"
          />
        </div>
      </div>
    );
  }
}

export default TabledDecored;
