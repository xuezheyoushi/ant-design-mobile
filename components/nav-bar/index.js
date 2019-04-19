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
export default class NavBar extends React.Component {
    render() {
        const _a = this.props, { prefixCls, className, children, mode, icon, onLeftClick, leftContent, rightContent } = _a, restProps = __rest(_a, ["prefixCls", "className", "children", "mode", "icon", "onLeftClick", "leftContent", "rightContent"]);
        return (<div {...restProps} className={classnames(className, prefixCls, `${prefixCls}-${mode}`)}>
        <div className={`${prefixCls}-left`} role="button" onClick={onLeftClick}>
          {icon ? (
        // tslint:disable-next-line:jsx-no-multiline-js
        <span className={`${prefixCls}-left-icon`} aria-hidden="true">
              {icon}
            </span>) : null}
          {leftContent}
        </div>
        <div className={`${prefixCls}-title`}>{children}</div>
        <div className={`${prefixCls}-right`}>{rightContent}</div>
      </div>);
    }
}
NavBar.defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    onLeftClick: () => { },
};
