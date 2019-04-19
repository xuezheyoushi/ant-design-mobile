import React from 'react';
import { DefaultTabBar as RMCDefaultTabBar, Tabs as RMCTabs, } from 'rmc-tabs';
export class DefaultTabBar extends RMCDefaultTabBar {
}
DefaultTabBar.defaultProps = Object.assign({}, RMCDefaultTabBar.defaultProps, { prefixCls: 'am-tabs-default-bar' });
export default class Tabs extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.renderTabBar = (props) => {
            const { renderTab } = this.props;
            return <DefaultTabBar {...props} renderTab={renderTab}/>;
        };
    }
    render() {
        return <RMCTabs renderTabBar={this.renderTabBar} {...this.props}/>;
    }
}
Tabs.DefaultTabBar = DefaultTabBar;
Tabs.defaultProps = {
    prefixCls: 'am-tabs',
};
