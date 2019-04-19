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
import List from '../list';
import Radio from './Radio';
const ListItem = List.Item;
function noop() { }
export default class RadioItem extends React.Component {
    render() {
        const _a = this.props, { listPrefixCls, onChange, disabled, radioProps, onClick } = _a, otherProps = __rest(_a, ["listPrefixCls", "onChange", "disabled", "radioProps", "onClick"]);
        const { prefixCls, className, children } = otherProps;
        const wrapCls = classnames(`${prefixCls}-item`, className, {
            [`${prefixCls}-item-disabled`]: disabled === true,
        });
        // Note: if not omit `onChange`, it will trigger twice on check listitem
        if (!disabled) {
            otherProps.onClick = onClick || noop;
        }
        const extraProps = {};
        ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(i => {
            if (i in this.props) {
                extraProps[i] = this.props[i];
            }
        });
        return (<ListItem {...otherProps} prefixCls={listPrefixCls} className={wrapCls} extra={<Radio {...radioProps} {...extraProps}/>}>
        {children}
      </ListItem>);
    }
}
RadioItem.defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list',
    radioProps: {},
};
