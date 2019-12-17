import { Menu, Icon } from 'antd';
import React from 'react';
const { SubMenu } = Menu;

class NavBar extends React.Component {
    
  
    render() {
      return (
        <Menu  mode="horizontal">
          <Menu.Item key="new">
            new trip
          </Menu.Item>
          <Menu.Item key="used">
            my trip
          </Menu.Item>
        </Menu>
      );
    }
  }
  
export default NavBar;