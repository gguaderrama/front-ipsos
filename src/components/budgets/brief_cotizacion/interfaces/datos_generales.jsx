import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import { useStyles } from "../estilos/stylebrief";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from "../../../commons/TextFieldDecored";
import TextAreaDecored from "../../../commons/TextAreaDecored";
import DatePickerDecored from "../../../commons/DatePickerDecored";
import * as actions from "../../../../actions";
import TableDecored from "../../../commons/TableDecored";
import { Link } from "react-router-dom";

class DatosGeneralesBrief extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: this.props.datosGenerales,
      flagPush: false,
      tableData: [
        { id: 1, name: "Elisa Gomez", age: 26 },
        { id: 2, name: "Bob Dylan", age: 53 },
        { id: 3, name: "Gloria Mendez", age: 25 },
        { id: 4, name: "Angel Linsley", age: 15 }
      ],
      columns: [
        {
          Header: "ID",
          accessor: "id", // String-based value accessors!
          width: 100
        },
        {
          Header: "Name",
          accessor: "name", // String-based value accessors!
          Cell: props =>  <Link to="/budgets">{props.original.name}</Link>,
        },
        {
          Header: "Age",
          accessor: "age",
          // Cell: props =>  <Link to="/">{props.original.age}</Link>  // Custom cell components!
        }
      ]
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillUnmount() {
    if (this.state.allData !== "") {
      this.props.setDatosGenerales(this.state.allData);
    }
  }
  componentDidMount() {}

  handleOnChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(name, "este es el nombre");
    console.log(value, "este es el valor");
    let fillValue = value;
    if (typeof fillValue === "string") {
      fillValue = fillValue.toUpperCase();
    }
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: fillValue // update the value of specific key
      }
    }));
  }

  handleOnChangeDate(date, name) {
    this.setState(prevState => ({
      allData: {
        // object that we want to update
        ...prevState.allData, // keep all other key-value pairs
        [name]: date // update the value of specific key
      }
    }));
  }


  handleOnDelete(event){
    console.log(event.target.value)
  }
  render() {
    const { allData } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <div>
          <TableDecored
            addButton={true}
            Allactions={true}
            nameButtonAdd={"Agregar"}
            tableData={this.state.tableData}
            columns={this.state.columns}
            handleOnDelete= {(event) => {this.handleOnDelete(event)}}
          />
        </div>
        <br/>
        <div style={{ width: "48%", float: "left" }}>
          <TextFieldDecored
            style={{ width: "100%", marginRight: "3%" }}
            name="nombre_estudio"
            value={allData.nombre_estudio}
            label="Nombre de estudio"
            maxLength="40"
            readonly="true"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
          />
          <TextFieldDecored
            style={{ width: "47%", marginRight: "3%" }}
            // variant= "filled"
            name="job"
            value={allData.job}
            maxLength="40"
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            label="Job"
          />
          <DatePickerDecored
            style={{ width: "47%", marginRight: "3%" }}
            label="Fecha"
            name="fecha_brief"
            handleOnChange={event => {
              this.handleOnChangeDate(event, "fecha_brief");
            }}
            value={allData.fecha_brief}
          />
          <TextFieldDecored
            style={{ width: "100%", marginRight: "6%" }}
            name="director"
            value={allData.director}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.director}
            maxLength="40"
            label="Director"
          />
          <TextFieldDecored
            style={{ width: "100%", marginRight: "6%" }}
            name="gerente"
            value={allData.gerente}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.gerente}
            maxLength="40"
            label="Gerente"
          />
          <TextFieldDecored
            style={{ width: "100%", marginRight: "6%" }}
            name="unidad_negocio"
            value={allData.unidad_negocio}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            maxLength="40"
            label="Unidad de negocio"
          />
          <TextFieldDecored
            style={{ width: "100%", marginRight: "6%" }}
            name="tipo_estudio"
            value={allData.tipo_estudio}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            maxLength="40"
            label="Tipo de estudio"
          />
        </div>
        <div style={{ width: "48%", float: "right" }}>
          <TextAreaDecored
            style={{ width: "100%", marginRight: "3%" }}
            label="Objetivos"
            name="objetivos"
            value={allData.objetivos}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.objetivos}
            maxLength="40"
            rows={2}
          />
          <TextAreaDecored
            style={{ width: "100%", marginRight: "3%" }}
            name="poblacion_objetivos"
            value={allData.poblacion_objetivos}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.poblacion_objetivos}
            label="Población Objetivos"
            rows={2}
          />
          <TextAreaDecored
            style={{ width: "100%", marginRight: "3%" }}
            name="filtros"
            value={allData.filtros}
            handleOnChange={event => {
              this.handleOnChange(event);
            }}
            value={allData.filtros}
            label="Filtros"
            rows={2}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    datosGenerales: state.datosGenerales.datos_generales
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    setDatosGenerales: value => dispatch(actions.datosGenerales(value))
    // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};

// connect(mapStateToProps)

export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(DatosGeneralesBrief)));
