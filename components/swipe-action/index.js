import classnames from 'classnames';
import Swipeout from 'rc-swipeout';
import React from 'react';
class SwipeAction extends React.Component {
    render() {
        const { className, style, prefixCls, left = [], right = [], autoClose, disabled, onOpen, onClose, children, } = this.props;
        const wrapClass = classnames(prefixCls, className);
        return left.length || right.length ? (<div style={style} className={className}>
        <Swipeout prefixCls={prefixCls} left={left} right={right} autoClose={autoClose} disabled={disabled} onOpen={onOpen} onClose={onClose}>
          {children}
        </Swipeout>
      </div>) : (<div style={style} className={wrapClass}>
        {children}
      </div>);
    }
}
SwipeAction.defaultProps = {
    prefixCls: 'am-swipe',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() { },
    onClose() { },
};
export default SwipeAction;
