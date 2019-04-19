import React from 'react';
import MListView from 'rmc-list-view';
import handleProps from './handleProps';
import IndexedList from './Indexed';
export default class ListView extends React.Component {
    constructor() {
        super(...arguments);
        this.scrollTo = (...args) => this.listviewRef.scrollTo(...args);
        this.getInnerViewNode = () => this.listviewRef.getInnerViewNode();
    }
    render() {
        const { restProps, extraProps } = handleProps(this.props, false);
        return (<MListView ref={(el) => (this.listviewRef = el)} {...restProps} {...extraProps}/>);
    }
}
ListView.defaultProps = {
    prefixCls: 'am-list-view',
    listPrefixCls: 'am-list',
};
ListView.DataSource = MListView.DataSource;
ListView.IndexedList = IndexedList;
