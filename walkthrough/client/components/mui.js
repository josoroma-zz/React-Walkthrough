import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import CustomTheme from 'client/components/mui/theme';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import NavigationMoreVert from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LinkMenuItem from 'material-ui/lib/menu/link-menu-item';

const Header = React.createClass({
  //the key passed through context must be called "muiTheme"
  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(CustomTheme),
    };
  },

  render() {
    return (
      <div>
        <AppBar
          title="React Walkthrough"
          iconElementLeft={<div></div>}
          iconElementRight={
            <a href="http://www.josoroma.com">
              <IconButton><NavigationMoreVert /></IconButton>
            </a>
          } />
      </div>
      );
    },
});

module.exports = Header;

ReactDOM.render(
  <Header />,
  document.getElementById('nav')
);
