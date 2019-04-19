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
import RcCheckbox from 'rc-checkbox';
import React from 'react';
export default class Checkbox extends React.Component {
    render() {
        const _a = this.props, { className, style } = _a, restProps = __rest(_a, ["className", "style"]);
        const { prefixCls, children } = restProps;
        const wrapCls = classnames(`${prefixCls}-wrapper`, className);
        // Todo: wait for https://github.com/developit/preact-compat/issues/422, then we can remove class below
        if ('class' in restProps) {
            /* tslint:disable:no-string-literal */
            delete restProps['class'];
        }
        const mark = (<label className={wrapCls} style={style}>
        <RcCheckbox {...restProps}/>
        {children}
      </label>);
        if (this.props.wrapLabel) {
            return mark;
        }
        return <RcCheckbox {...this.props}/>;
    }
}
Checkbox.defaultProps = {
    prefixCls: 'am-checkbox',
    wrapLabel: true,
};
