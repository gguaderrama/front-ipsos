import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component } from "react";
import { useStyles } from "../estilos/stylebrief";
import { withStyles } from "@material-ui/core/styles";
import TextFieldDecored from '../../../commons/TextFieldDecored';
import TextAreaDecored from '../../../commons/TextAreaDecored';
class DatosGeneralesBrief extends Component {
  constructor(props) {
    super(props);
    this.state = {
  };

  this.handleOnChange = this.handleOnChange.bind(this);

  }
  componentDidMount() {}

  handleOnChange(event) {
console.log(event.target.name, 'test', event.target.value, 'prueba')
  //   if(!event.target)
  //   return null;

  // if(panelRelated === 'gestion')
  //   this.setState({disabledList:['scheduledDate']});
  // // eslint-disable-next-line
  // if(panelRelated === 'gestion' && event.target.value === 'CITA' || event.target.value === 'LLDP')
  //   this.setState({disabledList:[]});

  // if(!panelRelated)
  //   return this.setState({[event.target.name]:event.target.value});
  // //
  // this.setState({
  //   [panelRelated]:{ [event.target.name]:event.target.value}
  // });
  }





  setValue(newValue) {
  }
  render() {
    return(
      <div style={{width : '100%'}}>
      <div style={{width : '48%', float : 'left'}}>
            <TextFieldDecored  style={{width:'100%', 'marginRight': '3%'}} placeholder="Nombre de estudio" value={''}  label={null} 
            handleOnChange = { (event) => {this.handleOnChange(event)}}
            />
            <TextFieldDecored  style={{width:'47%', 'marginRight': '3%'}} placeholder="Job" value={''}  label={null} />
            <TextFieldDecored  style={{width:'47%', 'marginRight': '3%'}} placeholder="Fecha" value={''}  label={null} />
            <TextFieldDecored  style={{width:'100%', 'marginRight': '6%'}} placeholder="Director" value={''}  label={null} />
            <TextFieldDecored  style={{width:'100%', 'marginRight': '6%'}} placeholder="Gerente" value={''}  label={null} />
            <TextFieldDecored  style={{width:'100%', 'marginRight': '6%'}} placeholder="Unidad de negocio" value={''}  label={null} />
            <TextFieldDecored  style={{width:'100%', 'marginRight': '6%'}} placeholder="Tipo de estudio" value={''}  label={null} />
      </div>
    <div style={{width : '48%',  float : 'right'}}>
           <TextAreaDecored  style={{width:'100%', 'marginRight': '3%'}} placeholder="Objetivos" value={''}  label={null} rows = {4} />
           <TextAreaDecored  style={{width:'100%', 'marginRight': '3%'}} placeholder="Población Objetivos" value={''}  label={null} rows = {4} />
           <TextAreaDecored  style={{width:'100%', 'marginRight': '3%'}} placeholder="Filtros" value={''}  label={null} rows = {4} />
     </div>

      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    // menu_admin: state.MenuAdmin.menu
  };
};
const mapDispatch = (dispatch, props) => {
  return {
    // setLanguage: event => dispatch(IntlActions.setLocale(event)),
    // menuAdminFuncion: value => dispatch(actions.menu_admin(value))
  };
};

// connect(mapStateToProps)

export default connect(
  // { ...actions },
  mapStateToProps,
  mapDispatch
)(withStyles(useStyles)(withTranslate(DatosGeneralesBrief)));
