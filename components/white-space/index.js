import classnames from 'classnames';
import React from 'react';
export default class WhiteSpace extends React.Component {
    render() {
        const { prefixCls, size, className, style, onClick } = this.props;
        const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);
        return <div className={wrapCls} style={style} onClick={onClick}/>;
    }
}
WhiteSpace.defaultProps = {
    prefixCls: 'am-whitespace',
    size: 'md',
};
