import RcCollapse, { Panel } from 'rc-collapse';
import React from 'react';
export default class Accordion extends React.Component {
    render() {
        return <RcCollapse {...this.props}/>;
    }
}
Accordion.Panel = Panel;
Accordion.defaultProps = {
    prefixCls: 'am-accordion',
};
