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
export default class CardHeader extends React.Component {
    render() {
        const _a = this.props, { prefixCls, className, title, thumb, thumbStyle, extra } = _a, restProps = __rest(_a, ["prefixCls", "className", "title", "thumb", "thumbStyle", "extra"]);
        const wrapCls = classnames(`${prefixCls}-header`, className);
        return (<div className={wrapCls} {...restProps}>
        <div className={`${prefixCls}-header-content`}>
          {typeof thumb === 'string' ? (
        // tslint:disable-next-line:jsx-no-multiline-js
        <img style={thumbStyle} src={thumb}/>) : (thumb)}
          {title}
        </div>
        {extra ? (
        // tslint:disable-next-line:jsx-no-multiline-js
        <div className={`${prefixCls}-header-extra`}>{extra}</div>) : null}
      </div>);
    }
}
CardHeader.defaultProps = {
    prefixCls: 'am-card',
    thumbStyle: {},
};
