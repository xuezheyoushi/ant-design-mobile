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
export default class Flex extends React.Component {
    render() {
        const _a = this.props, { direction, wrap, justify, align, alignContent, className, children, prefixCls, style } = _a, restProps = __rest(_a, ["direction", "wrap", "justify", "align", "alignContent", "className", "children", "prefixCls", "style"]);
        const wrapCls = classnames(prefixCls, className, {
            [`${prefixCls}-dir-row`]: direction === 'row',
            [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
            [`${prefixCls}-dir-column`]: direction === 'column',
            [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',
            [`${prefixCls}-nowrap`]: wrap === 'nowrap',
            [`${prefixCls}-wrap`]: wrap === 'wrap',
            [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',
            [`${prefixCls}-justify-start`]: justify === 'start',
            [`${prefixCls}-justify-end`]: justify === 'end',
            [`${prefixCls}-justify-center`]: justify === 'center',
            [`${prefixCls}-justify-between`]: justify === 'between',
            [`${prefixCls}-justify-around`]: justify === 'around',
            [`${prefixCls}-align-start`]: align === 'start',
            [`${prefixCls}-align-center`]: align === 'center',
            [`${prefixCls}-align-end`]: align === 'end',
            [`${prefixCls}-align-baseline`]: align === 'baseline',
            [`${prefixCls}-align-stretch`]: align === 'stretch',
            [`${prefixCls}-align-content-start`]: alignContent === 'start',
            [`${prefixCls}-align-content-end`]: alignContent === 'end',
            [`${prefixCls}-align-content-center`]: alignContent === 'center',
            [`${prefixCls}-align-content-between`]: alignContent === 'between',
            [`${prefixCls}-align-content-around`]: alignContent === 'around',
            [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',
        });
        return (<div className={wrapCls} style={style} {...restProps}>
        {children}
      </div>);
    }
}
Flex.defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center',
};
