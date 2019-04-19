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
export default class Badge extends React.Component {
    render() {
        // tslint:disable:prefer-const
        let _a = this.props, { className, prefixCls, children, text, size, overflowCount, dot, corner, hot } = _a, restProps = __rest(_a, ["className", "prefixCls", "children", "text", "size", "overflowCount", "dot", "corner", "hot"]);
        overflowCount = overflowCount;
        text =
            typeof text === 'number' && text > overflowCount
                ? `${overflowCount}+`
                : text;
        // dot mode don't need text
        if (dot) {
            text = '';
        }
        const scrollNumberCls = classnames({
            [`${prefixCls}-dot`]: dot,
            [`${prefixCls}-dot-large`]: dot && size === 'large',
            [`${prefixCls}-text`]: !dot && !corner,
            [`${prefixCls}-corner`]: corner,
            [`${prefixCls}-corner-large`]: corner && size === 'large',
        });
        const badgeCls = classnames(prefixCls, className, {
            [`${prefixCls}-not-a-wrapper`]: !children,
            [`${prefixCls}-corner-wrapper`]: corner,
            [`${prefixCls}-hot`]: !!hot,
            [`${prefixCls}-corner-wrapper-large`]: corner && size === 'large',
        });
        return (<span className={badgeCls}>
        {children}
        {(text || dot) && (
        // tslint:disable-next-line:jsx-no-multiline-js
        <sup className={scrollNumberCls} {...restProps}>
            {text}
          </sup>)}
      </span>);
    }
}
Badge.defaultProps = {
    prefixCls: 'am-badge',
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false,
};
