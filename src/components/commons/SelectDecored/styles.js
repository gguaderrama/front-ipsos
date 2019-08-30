export const styles = theme => ({
  formControl: {
    width: '100%'
  },
  // root: {
  //   color: '#233A79',
  //   '&$disabled': {
  //     color: '#919191',
  //   },
  // },
  textField: {
    margin: '0 0 5px',
  },
  notchedOutline : {
    borderWidth: "1px",
    borderColor: "#9c9c9c !important"
  }, 
  root : {
    //   borderWidth: "1px",
    // borderColor: "red !important",
    height: '11px',
    '& $notchedOutline': {
      borderColor :  "red !important"
    },
  },    
  disabled: {color: '#919191'},
})
