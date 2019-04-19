import RcRange from 'rc-slider/lib/Range';
import React from 'react';
export default class Range extends React.Component {
    render() {
        return (<div className={`${this.props.prefixCls}-wrapper`}>
        <RcRange {...this.props}/>
      </div>);
    }
}
Range.defaultProps = {
    prefixCls: 'am-slider',
};
