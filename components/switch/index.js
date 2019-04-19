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
export default class Switch extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (e) => {
            const checked = e.target.checked;
            if (this.props.onChange) {
                this.props.onChange(checked);
            }
        };
        this.onClick = (e) => {
            if (this.props.onClick) {
                let val;
                // tslint:disable-next-line:prefer-conditional-expression
                if (e && e.target && e.target.checked !== undefined) {
                    val = e.target.checked;
                }
                else {
                    val = this.props.checked;
                }
                this.props.onClick(val);
            }
        };
    }
    render() {
        const _a = this.props, { prefixCls, name, checked, disabled, className, platform, color } = _a, restProps = __rest(_a, ["prefixCls", "name", "checked", "disabled", "className", "platform", "color"]);
        const wrapCls = classnames(prefixCls, className, {
            [`${prefixCls}-android`]: platform === 'android',
        });
        const fackInputCls = classnames('checkbox', {
            [`checkbox-disabled`]: disabled,
        });
        const globalProps = Object.keys(restProps).reduce((prev, key) => {
            if (key.substr(0, 5) === 'aria-' ||
                key.substr(0, 5) === 'data-' ||
                key === 'role') {
                prev[key] = restProps[key];
            }
            return prev;
        }, {});
        const style = this.props.style || {};
        if (color && checked) {
            style.backgroundColor = color;
        }
        return (<label className={wrapCls}>
        <input type="checkbox" name={name} className={`${prefixCls}-checkbox`} disabled={disabled} checked={checked} onChange={this.onChange} value={checked ? 'on' : 'off'} {...(!disabled ? { onClick: this.onClick } : {})} {...globalProps}/>
        <div className={fackInputCls} style={style} {...(disabled ? { onClick: this.onClick } : {})}/>
      </label>);
    }
}
Switch.defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange() { },
    platform: 'ios',
    onClick() { },
};
