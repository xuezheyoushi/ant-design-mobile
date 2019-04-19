import React from 'react';
import getDataAttr from '../_util/getDataAttr';
import Tabs from '../tabs';
import Tab from './Tab';
export class Item extends React.Component {
    render() {
        const { prefixCls, style } = this.props;
        return (<div className={prefixCls} style={style}>
        {this.props.children}
      </div>);
    }
}
Item.defaultProps = {
    prefixCls: 'am-tab-bar-item',
    title: '',
};
class AntTabBar extends React.Component {
    constructor() {
        super(...arguments);
        this.getTabs = () => {
            return React.Children.map(this.props.children, (c) => {
                return Object.assign({}, c.props);
            });
        };
        this.renderTabBar = () => {
            const { barTintColor, prefixCls, tintColor, unselectedTintColor, backgroundTintColor, unselectedBackgroundTintColor, hidden, tabBarPosition, } = this.props;
            const tabsData = this.getTabs();
            const content = Array.isArray(tabsData) ? tabsData.map((cProps, index) => {
                return (<Tab key={index} prefixCls={`${this.props.prefixCls}-tab`} badge={cProps.badge} dot={cProps.dot} selected={cProps.selected} icon={cProps.icon} selectedIcon={cProps.selectedIcon} title={cProps.title} tintColor={tintColor} unselectedTintColor={unselectedTintColor} backgroundTintColor={backgroundTintColor} unselectedBackgroundTintColor={unselectedBackgroundTintColor} dataAttrs={getDataAttr(cProps)} onClick={() => cProps.onPress && cProps.onPress()}/>);
            }) : null;
            let cls = `${prefixCls}-bar`;
            if (hidden) {
                cls += ` ${prefixCls}-bar-hidden-${tabBarPosition}`;
            }
            return (<div className={cls} style={{ backgroundColor: barTintColor }}>
        {content}
      </div>);
        };
    }
    render() {
        const { prefixCls, children, animated, swipeable, noRenderContent, prerenderingSiblingsNumber, tabBarPosition, } = this.props;
        const tabs = this.getTabs();
        let activeIndex = 0;
        if (Array.isArray(tabs)) {
            tabs.forEach((tab, index) => {
                if (tab.selected) {
                    activeIndex = index;
                }
            });
        }
        return (<div className={prefixCls}>
        <Tabs tabs={tabs} renderTabBar={this.renderTabBar} tabBarPosition={tabBarPosition} page={activeIndex < 0 ? undefined : activeIndex} animated={animated} swipeable={swipeable} noRenderContent={noRenderContent} prerenderingSiblingsNumber={prerenderingSiblingsNumber}>
          {children}
        </Tabs>
      </div>);
    }
}
AntTabBar.defaultProps = {
    prefixCls: 'am-tab-bar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    hidden: false,
    unselectedTintColor: '#888',
    backgroundTintColor: 'white',
    unselectedBackgroundTintColor: '#eee',
    placeholder: '正在加载',
    animated: false,
    swipeable: false,
    prerenderingSiblingsNumber: 1,
    tabBarPosition: 'bottom',
};
AntTabBar.Item = Item;
export default AntTabBar;
