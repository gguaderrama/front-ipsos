import { connect } from "react-redux";
import { withTranslate, IntlActions } from "react-redux-multilingual";
import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";

class TabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: 0,
      activeTabIndex: 0,
      tabsComponents: this.props.tabsSpread
    };
    this.setValue = this.setValue.bind(this);
  }
  componentDidMount() {}

  handleChange(newValue) {
    this.setValue(newValue);
  }
  setValue(newValue) {
    this.setState({
      activeTabIndex: newValue
    });
  }

  a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
  }

  render() {
    const { classes } = this.props;
    const { tabsComponents } = this.state;
    const TabPanel = props => {
      const { children, value, index, ...other } = props;

      return (
        <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          <Box p={3}>{children}</Box>
        </Typography>
      );
    };
    const { activeTabIndex } = this.state;

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            TabIndicatorProps={{
              style: {
                top: 0,
                height: 3,
                backgroundColor: "#00AFA9"
              }
            }}
            value={activeTabIndex}
            indicatorColor="primary"
            // textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {tabsComponents &&
              tabsComponents[0] &&
              tabsComponents[0].tabs.map((text, index) => (
                <Tab  style = {{    color: '#636363',
                   fontWeight: '550'}}
                  disabled = { index === activeTabIndex ? true : false}
                  label={text.name}
                  key={index}
                  onClick={event => this.handleChange(index)}
                />
              ))}
          </Tabs>
        </AppBar>

        {tabsComponents &&
          tabsComponents[0] &&
          tabsComponents[0].component.map((text, index) => (
            <TabPanel key={index} value={activeTabIndex} index={index} >
              {text.component}
            </TabPanel>
          ))}
      </div>
    );
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
)(withTranslate(TabsComponent));
