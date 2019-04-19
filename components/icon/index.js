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
import loadSprite from './loadSprite';
export default class Icon extends React.Component {
    componentDidMount() {
        loadSprite();
    }
    render() {
        const _a = this.props, { type, className, size } = _a, restProps = __rest(_a, ["type", "className", "size"]);
        const cls = classnames(className, 'am-icon', `am-icon-${type}`, `am-icon-${size}`);
        return (<svg className={cls} {...restProps}>
        <use xlinkHref={`#${type}`}/>
      </svg>);
    }
}
Icon.defaultProps = {
    size: 'md',
};
