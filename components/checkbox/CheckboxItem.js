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
import Checkbox from './Checkbox';
const ListItem = List.Item;
// tslint:disable-next-line:no-empty
function noop() { }
export default class CheckboxItem extends React.Component {
    render() {
        const _a = this.props, { listPrefixCls, onChange, disabled, checkboxProps, onClick } = _a, restProps = __rest(_a, ["listPrefixCls", "onChange", "disabled", "checkboxProps", "onClick"]);
        const { prefixCls, className, children } = restProps;
        const wrapCls = classnames(`${prefixCls}-item`, className, {
            [`${prefixCls}-item-disabled`]: disabled === true,
        });
        // Note: if not omit `onChange`, it will trigger twice on check listitem
        if (!disabled) {
            restProps.onClick = onClick || noop;
        }
        const extraProps = {};
        ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(i => {
            if (i in this.props) {
                extraProps[i] = this.props[i];
            }
        });
        return (<ListItem {...restProps} prefixCls={listPrefixCls} className={wrapCls} thumb={<Checkbox {...checkboxProps} {...extraProps}/>}>
        {children}
      </ListItem>);
    }
}
CheckboxItem.defaultProps = {
    prefixCls: 'am-checkbox',
    listPrefixCls: 'am-list',
    checkboxProps: {},
};
