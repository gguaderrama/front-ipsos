import { connect } from 'react-redux'
import { withTranslate, IntlActions } from 'react-redux-multilingual'
import React, { Component, Fragment } from 'react';
import Loginform from './form';

import Logo from '../../assets/IPSOS_OPERACIONES.png'
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import { styles } from "./styles";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      valueSelect : '',
      demo : 'jnefjewn'
    }
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
  }
  componentDidMount() {
  }

  handleOnChangeInput(e, panel) {
    console.log('ingresa aqui')
    let value = e.target.value
    
    
    // this.setState({ valueSelect: e.target.value });
    this.setState({ valueSelect: value  }, () => {
      console.log( value , 'dealersOverallTotal1');
    }); 
    // IntlActions.setLocale('zh')
    if(value === 'es' || value === 'en'){
      this.props.setLanguage(value)
    }
  }
  render(){
    console.log(this.state, 'el valor del estado')
    const {
      classes 
    } = this.props;
    return(
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      
{/* 
      <p>Hey there</p> */}
    {/* {this.props.translate('LOGIN.hello')} */}
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography> */}
        <img src={Logo} alt="Logo" width="60%" />
        <FormControl className={classes.formControl}>
      {/* <InputLabel shrink htmlFor="age-label-placeholder">
          Seleccione un idioma
        </InputLabel> */}
  {/* <Select
      value={this.state.valueSelect}
      onChange={(e) => { this.handleOnChangeInput(e)}}
      input={<Input name="age" id="age-label-placeholder" />}
      displayEmpty
      name="valueSelect"
      className={classes.selectEmpty}
    >
        <MenuItem value="">
            <em>Seleccione un idioma</em>
          </MenuItem>
      
      <MenuItem value={'es'}>Español</MenuItem>
      <MenuItem value={'en'}>Inglés</MenuItem>
    </Select> */}
    </FormControl>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label=      {this.props.translate('LOGIN.email')}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label= {this.props.translate('LOGIN.password')}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label= {this.props.translate('LOGIN.remember_user')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {this.props.translate('LOGIN.button_message')}
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/* <MadeWithLove /> */}
      </Box>
    </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
     counter : state.counter
  };
};

const mapDispatch = (dispatch, props) => {
  return {
      setLanguage: (event) => dispatch(IntlActions.setLocale(event))
  }
}

// connect(mapStateToProps)

export default connect(
  mapStateToProps,
  mapDispatch
)(withStyles(styles) (withTranslate(Login)) )