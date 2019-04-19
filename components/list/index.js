var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import React from 'react';
import Item from './ListItem';
export default class List extends React.Component {
    render() {
        const _a = this.props, { prefixCls, children, className, style, renderHeader, renderFooter } = _a, restProps = __rest(_a, ["prefixCls", "children", "className", "style", "renderHeader", "renderFooter"]);
        const wrapCls = classnames(prefixCls, className);
        return (<div className={wrapCls} style={style} {...restProps}>
        {renderHeader ? (<div className={`${prefixCls}-header`}>
            {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
          </div>) : null}
        {children ? (<div className={`${prefixCls}-body`}>{children}</div>) : null}
        {renderFooter ? (<div className={`${prefixCls}-footer`}>
            {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
          </div>) : null}
      </div>);
    }
}
List.Item = Item;
List.defaultProps = {
    prefixCls: 'am-list',
};
