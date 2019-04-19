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
export default class CardFooter extends React.Component {
    render() {
        const _a = this.props, { prefixCls, content, className, extra } = _a, restProps = __rest(_a, ["prefixCls", "content", "className", "extra"]);
        const wrapCls = classnames(`${prefixCls}-footer`, className);
        return (<div className={wrapCls} {...restProps}>
        <div className={`${prefixCls}-footer-content`}>{content}</div>
        {extra && <div className={`${prefixCls}-footer-extra`}>{extra}</div>}
      </div>);
    }
}
CardFooter.defaultProps = {
    prefixCls: 'am-card',
};
