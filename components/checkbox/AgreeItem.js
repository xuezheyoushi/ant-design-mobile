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
import getDataAttr from '../_util/getDataAttr';
import Checkbox from './Checkbox';
export default class AgreeItem extends React.Component {
    render() {
        const _a = this.props, { style } = _a, restProps = __rest(_a, ["style"]);
        const { prefixCls, className } = restProps;
        const wrapCls = classnames(`${prefixCls}-agree`, className);
        return (<div {...getDataAttr(restProps)} className={wrapCls} style={style}>
        <Checkbox {...restProps} className={`${prefixCls}-agree-label`}/>
      </div>);
    }
}
AgreeItem.defaultProps = {
    prefixCls: 'am-checkbox',
};
