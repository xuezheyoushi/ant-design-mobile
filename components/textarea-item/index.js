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
import TouchFeedback from 'rmc-feedback';
import { IS_IOS } from '../_util/exenv';
function noop() { }
function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}
const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;
function countSymbols(text = '') {
    return text.replace(regexAstralSymbols, '_').length;
}
export default class TextareaItem extends React.Component {
    constructor(props) {
        super(props);
        this.focus = () => {
            this.textareaRef.focus();
        };
        this.reAlignHeight = () => {
            const textareaDom = this.textareaRef;
            textareaDom.style.height = ''; // 字数减少时能自动减小高度
            textareaDom.style.height = `${textareaDom.scrollHeight}px`;
        };
        this.onChange = (e) => {
            const value = e.target.value;
            if ('value' in this.props) {
                this.setState({ value: this.props.value });
            }
            else {
                this.setState({ value });
            }
            const { onChange } = this.props;
            if (onChange) {
                onChange(value);
            }
            // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用
            this.componentDidUpdate();
        };
        this.onBlur = (e) => {
            this.debounceTimeout = setTimeout(() => {
                if (document.activeElement !== this.textareaRef) {
                    this.setState({
                        focus: false,
                    });
                }
            }, 100);
            const value = e.currentTarget.value;
            if (this.props.onBlur) {
                // fix autoFocus item blur with flash
                setTimeout(() => {
                    // fix ios12 wechat browser click failure after input
                    if (document.body) {
                        document.body.scrollTop = document.body.scrollTop;
                    }
                }, 100);
                this.props.onBlur(value);
            }
        };
        this.onFocus = (e) => {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
            this.setState({
                focus: true,
            });
            const value = e.currentTarget.value;
            if (this.props.onFocus) {
                this.props.onFocus(value);
            }
        };
        this.onErrorClick = () => {
            if (this.props.onErrorClick) {
                this.props.onErrorClick();
            }
        };
        this.clearInput = () => {
            this.setState({
                value: '',
            });
            if (this.props.onChange) {
                this.props.onChange('');
            }
        };
        this.state = {
            focus: false,
            value: props.value || props.defaultValue || '',
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: fixControlledValue(nextProps.value),
            });
        }
    }
    componentDidMount() {
        if (this.props.autoHeight) {
            this.reAlignHeight();
        }
    }
    componentDidUpdate() {
        if (this.props.autoHeight && this.state.focus) {
            this.reAlignHeight();
        }
    }
    componentWillUnmount() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
    }
    render() {
        const _a = this.props, { prefixCls, prefixListCls, editable, style, clear, children, error, className, count, labelNumber, title, onErrorClick, autoHeight, defaultValue } = _a, otherProps = __rest(_a, ["prefixCls", "prefixListCls", "editable", "style", "clear", "children", "error", "className", "count", "labelNumber", "title", "onErrorClick", "autoHeight", "defaultValue"]);
        const { disabled } = otherProps;
        const { value, focus } = this.state;
        const hasCount = count > 0 && this.props.rows > 1;
        const wrapCls = classnames(className, `${prefixListCls}-item`, `${prefixCls}-item`, {
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-item-single-line`]: this.props.rows === 1 && !autoHeight,
            [`${prefixCls}-error`]: error,
            [`${prefixCls}-focus`]: focus,
            [`${prefixCls}-has-count`]: hasCount,
        });
        const labelCls = classnames(`${prefixCls}-label`, {
            [`${prefixCls}-label-2`]: labelNumber === 2,
            [`${prefixCls}-label-3`]: labelNumber === 3,
            [`${prefixCls}-label-4`]: labelNumber === 4,
            [`${prefixCls}-label-5`]: labelNumber === 5,
            [`${prefixCls}-label-6`]: labelNumber === 6,
            [`${prefixCls}-label-7`]: labelNumber === 7,
        });
        const characterLength = countSymbols(value);
        const lengthCtrlProps = {};
        if (count > 0) {
            // Note: If in the iOS environment of dev-tools, It will fail.
            if (IS_IOS) {
                const entValue = value ? value.replace(regexAstralSymbols, '_') : '';
                const entLen = entValue ? entValue.split('_').length - 1 : 0;
                lengthCtrlProps.maxLength =
                    count + entLen - characterLength + (value ? value.length : 0);
            }
            else {
                lengthCtrlProps.maxLength =
                    count - characterLength + (value ? value.length : 0);
            }
        }
        return (<div className={wrapCls}>
        {title && <div className={labelCls}>{title}</div>}
        <div className={`${prefixCls}-control`}>
          <textarea ref={el => (this.textareaRef = el)} {...lengthCtrlProps} {...otherProps} value={value} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} readOnly={!editable} style={style}/>
        </div>
        {clear &&
            editable &&
            value &&
            characterLength > 0 && (<TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
              <div className={`${prefixCls}-clear`} onClick={this.clearInput}/>
            </TouchFeedback>)}
        {error && (<div className={`${prefixCls}-error-extra`} onClick={this.onErrorClick}/>)}
        {hasCount && (<span className={`${prefixCls}-count`}>
            <span>{value ? characterLength : 0}</span>/{count}
          </span>)}
      </div>);
    }
}
TextareaItem.defaultProps = {
    prefixCls: 'am-textarea',
    prefixListCls: 'am-list',
    autoHeight: false,
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    rows: 1,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onErrorClick: noop,
    error: false,
    labelNumber: 5,
};
