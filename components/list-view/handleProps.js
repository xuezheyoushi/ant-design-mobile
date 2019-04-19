var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import List from '../list';
const { Item } = List;
export default function handleProps(props, isIndexed) {
    const { renderHeader, renderFooter, renderSectionHeader, renderBodyComponent } = props, restProps = __rest(props, ["renderHeader", "renderFooter", "renderSectionHeader", "renderBodyComponent"]);
    const listPrefixCls = props.listPrefixCls;
    const extraProps = {
        renderHeader: null,
        renderFooter: null,
        renderSectionHeader: null,
        renderBodyComponent: renderBodyComponent ||
            (() => <div className={`${listPrefixCls}-body`}/>),
    };
    if (renderHeader) {
        extraProps.renderHeader = () => (<div className={`${listPrefixCls}-header`}>{renderHeader()}</div>);
    }
    if (renderFooter) {
        extraProps.renderFooter = () => (<div className={`${listPrefixCls}-footer`}>{renderFooter()}</div>);
    }
    if (renderSectionHeader) {
        extraProps.renderSectionHeader = isIndexed
            ? (sectionData, sectionID) => (<div>
            <Item prefixCls={listPrefixCls}>
              {renderSectionHeader(sectionData, sectionID)}
            </Item>
          </div>)
            : (sectionData, sectionID) => (<Item prefixCls={listPrefixCls}>
            {renderSectionHeader(sectionData, sectionID)}
          </Item>);
    }
    return { restProps, extraProps };
}
