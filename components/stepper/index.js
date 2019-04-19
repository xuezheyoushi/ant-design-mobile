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
import RMCInputNumber from 'rmc-input-number';
import Icon from '../icon';
export default class Stepper extends React.Component {
    render() {
        const _a = this.props, { className, showNumber } = _a, restProps = __rest(_a, ["className", "showNumber"]);
        const stepperClass = classnames(className, {
            ['showNumber']: !!showNumber,
        });
        return (<RMCInputNumber upHandler={<Icon type="plus" size="xxs"/>} downHandler={<Icon type="minus" size="xxs"/>} {...restProps} ref={el => (this.stepperRef = el)} className={stepperClass}/>);
    }
}
Stepper.defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
    readOnly: false,
    showNumber: false,
    focusOnUpDown: false,
};
