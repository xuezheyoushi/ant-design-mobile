import React from 'react';
import PropTypes from 'prop-types';
import RPullToRefresh from 'rmc-pull-to-refresh';
import { getComponentLocale } from '../_util/getLocale';
import Icon from '../icon';
export default class PullToRefresh extends React.Component {
    render() {
        // tslint:disable-next-line:variable-name
        const { activateText, deactivateText, finishText } = getComponentLocale(this.props, this.context, 'PullToRefresh', () => require('./locale/zh_CN'));
        const ind = Object.assign({ activate: activateText, deactivate: deactivateText, release: <Icon type="loading"/>, finish: finishText }, this.props.indicator);
        return <RPullToRefresh {...this.props} indicator={ind}/>;
    }
}
PullToRefresh.defaultProps = {
    prefixCls: 'am-pull-to-refresh',
};
PullToRefresh.contextTypes = {
    antLocale: PropTypes.object,
};
