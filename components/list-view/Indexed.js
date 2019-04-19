import React from 'react';
import MListView from 'rmc-list-view';
import handleProps from './handleProps';
const IndexedList = MListView.IndexedList;
export default class MIndexedList extends React.Component {
    render() {
        const { prefixCls, listPrefixCls } = this.props;
        const { restProps, extraProps } = handleProps(this.props, true);
        return (<IndexedList ref={(el) => (this.indexedListRef = el)} sectionHeaderClassName={`${prefixCls}-section-header ${listPrefixCls}-body`} sectionBodyClassName={`${prefixCls}-section-body ${listPrefixCls}-body`} {...restProps} {...extraProps}>
        {this.props.children}
      </IndexedList>);
    }
}
MIndexedList.defaultProps = {
    prefixCls: 'am-indexed-list',
    listPrefixCls: 'am-list',
    listViewPrefixCls: 'am-list-view',
};
