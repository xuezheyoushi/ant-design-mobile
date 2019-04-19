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
import Tooltip from 'rmc-tooltip';
import Item from './Item';
function recursiveCloneChildren(children, cb = (ch, _) => ch) {
    return React.Children.map(children, (child, index) => {
        const newChild = cb(child, index);
        if (typeof newChild !== 'string' &&
            typeof newChild !== 'number' &&
            newChild &&
            newChild.props &&
            newChild.props.children) {
            return React.cloneElement(newChild, {}, recursiveCloneChildren(newChild.props.children, cb));
        }
        return newChild;
    });
}
export default class Popover extends React.Component {
    render() {
        const _a = this.props, { overlay, onSelect = () => { } } = _a, restProps = __rest(_a, ["overlay", "onSelect"]);
        const overlayNode = recursiveCloneChildren(overlay, (child, index) => {
            const extraProps = { firstItem: false };
            if (child &&
                typeof child !== 'string' &&
                typeof child !== 'number' &&
                child.type &&
                // Fixme: not sure where the `myName` came from.
                child.type.myName === 'PopoverItem' &&
                !child.props.disabled) {
                extraProps.onClick = () => onSelect(child, index);
                extraProps.firstItem = index === 0;
                return React.cloneElement(child, extraProps);
            }
            return child;
        });
        const wrapperNode = (<div className={`${this.props.prefixCls}-inner-wrapper`}>
        {overlayNode}
      </div>);
        return <Tooltip {...restProps} overlay={wrapperNode}/>;
    }
}
Popover.defaultProps = {
    prefixCls: 'am-popover',
    placement: 'bottomRight',
    align: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click'],
};
Popover.Item = Item;
