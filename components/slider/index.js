import RcSlider from 'rc-slider/lib/Slider';
import React from 'react';
export default class Slider extends React.Component {
    render() {
        return (<div className={`${this.props.prefixCls}-wrapper`}>
        <RcSlider {...this.props}/>
      </div>);
    }
}
Slider.defaultProps = {
    prefixCls: 'am-slider',
};
