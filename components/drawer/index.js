import RmcDrawer from 'rmc-drawer';
import React from 'react';
export default class Drawer extends React.Component {
    render() {
        return <RmcDrawer {...this.props}/>;
    }
}
Drawer.defaultProps = {
    prefixCls: 'am-drawer',
    enableDragHandle: false,
};
