var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
export default class View extends React.Component {
    render() {
        const props = Object.assign({}, this.props);
        if (Array.isArray(props.style)) {
            let style = {};
            props.style.forEach(s => {
                style = Object.assign({}, style, s);
            });
            props.style = style;
        }
        const { Component = 'div' } = props, restProps = __rest(props, ["Component"]);
        return <Component {...restProps}/>;
    }
}
View.defaultProps = {
    Component: 'div',
};
