import classnames from 'classnames';
import React from 'react';
import TouchFeedback from 'rmc-feedback';
import getDataAttr from '../_util/getDataAttr';
import Icon from '../icon';
export default class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            const { disabled, onChange } = this.props;
            if (disabled) {
                return;
            }
            const isSelect = this.state.selected;
            this.setState({
                selected: !isSelect,
            }, () => {
                if (onChange) {
                    onChange(!isSelect);
                }
            });
        };
        this.onTagClose = () => {
            if (this.props.onClose) {
                this.props.onClose();
            }
            this.setState({
                closed: true,
            }, this.props.afterClose);
        };
        this.state = {
            selected: props.selected,
            closed: false,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({
                selected: nextProps.selected,
            });
        }
    }
    render() {
        const { children, className, prefixCls, disabled, closable, small, style, } = this.props;
        const wrapCls = classnames(className, prefixCls, {
            [`${prefixCls}-normal`]: !disabled && (!this.state.selected || small || closable),
            [`${prefixCls}-small`]: small,
            [`${prefixCls}-active`]: this.state.selected && !disabled && !small && !closable,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-closable`]: closable,
        });
        const closableDom = closable && !disabled && !small ? (<TouchFeedback activeClassName={`${prefixCls}-close-active`}>
          <div className={`${prefixCls}-close`} role="button" onClick={this.onTagClose} aria-label="remove tag">
            <Icon type="cross-circle" size="xs" aria-hidden="true"/>
          </div>
        </TouchFeedback>) : null;
        return !this.state.closed ? (<div {...getDataAttr(this.props)} className={wrapCls} onClick={this.onClick} style={style}>
        <div className={`${prefixCls}-text`}>{children}</div>
        {closableDom}
      </div>) : null;
    }
}
Tag.defaultProps = {
    prefixCls: 'am-tag',
    disabled: false,
    selected: false,
    closable: false,
    small: false,
    onChange() { },
    onClose() { },
    afterClose() { },
};
