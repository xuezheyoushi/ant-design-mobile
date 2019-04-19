var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import classnames from 'classnames';
import React from 'react';
export default class FlexItem extends React.Component {
    render() {
        const _a = this.props, { children, className, prefixCls, style } = _a, restProps = __rest(_a, ["children", "className", "prefixCls", "style"]);
        const wrapCls = classnames(`${prefixCls}-item`, className);
        return (<div className={wrapCls} style={style} {...restProps}>
        {children}
      </div>);
    }
}
FlexItem.defaultProps = {
    prefixCls: 'am-flexbox',
};
