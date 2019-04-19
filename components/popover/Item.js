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
import TouchFeedback from 'rmc-feedback';
export default class Item extends React.Component {
    render() {
        const _a = this.props, { children, className, prefixCls, icon, disabled, firstItem, activeStyle } = _a, restProps = __rest(_a, ["children", "className", "prefixCls", "icon", "disabled", "firstItem", "activeStyle"]);
        const cls = classnames(`${prefixCls}-item`, className, {
            [`${prefixCls}-item-disabled`]: disabled,
        });
        let activeClass = `${prefixCls}-item-active `;
        if (firstItem) {
            activeClass += `${prefixCls}-item-fix-active-arrow`;
        }
        return (<TouchFeedback disabled={disabled} activeClassName={activeClass} activeStyle={activeStyle}>
        <div className={cls} {...restProps}>
          <div className={`${prefixCls}-item-container`}>
            {icon ? (
        // tslint:disable-next-line:jsx-no-multiline-js
        <span className={`${prefixCls}-item-icon`} aria-hidden="true">
                {icon}
              </span>) : null}
            <span className={`${prefixCls}-item-content`}>{children}</span>
          </div>
        </div>
      </TouchFeedback>);
    }
}
Item.defaultProps = {
    prefixCls: 'am-popover',
    disabled: false,
};
Item.myName = 'PopoverItem';
