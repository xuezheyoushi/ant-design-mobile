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
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
export default class Card extends React.Component {
    render() {
        const _a = this.props, { prefixCls, full, className } = _a, resetProps = __rest(_a, ["prefixCls", "full", "className"]);
        const wrapCls = classnames(prefixCls, className, {
            [`${prefixCls}-full`]: full,
        });
        return <div className={wrapCls} {...resetProps}/>;
    }
}
Card.defaultProps = {
    prefixCls: 'am-card',
    full: false,
};
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
