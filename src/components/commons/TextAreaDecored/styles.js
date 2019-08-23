export const styles = theme => ({
    formControl: {},
    textField: {
      margin: '0 0 5px',
      borderRadius: '6px',
      fontSize: '15.5px',
      color : '#e8e8e8',
      fontFamily: `"Roboto", "Helvetica", "Arial", "sans-serif"` 
    },
    closeButton: {},
    button: {},
    pre: {},
    divContainer: {},
    divButttonContainer: {},
    //
    textFieldFilled: {
      fontSize: '17px',
      borderRadius: '6px',
      backgroundColor: '#fdfdfd',
      border: 'solid 1px #9B9B9B',
      color : '#e8e8e8',
      borderRadius: 4,
      fontFamily: "Roboto"
    },
    'textarea::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'blue'
    },
    root: {
      borderRadius: 4,
      '&$disabled': {
        borderRadius: 4
      }
    },
    disabled: {},
  })