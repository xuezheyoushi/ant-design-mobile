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
import PropTypes from 'prop-types';
import React from 'react';
import TouchFeedback from 'rmc-feedback';
import { getComponentLocale } from '../_util/getLocale';
import CustomInput from './CustomInput';
import Input from './Input';
function noop() { }
function normalizeValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value + '';
}
class InputItem extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = (e) => {
            const el = e.target;
            const { value: rawVal, selectionEnd: prePos } = el;
            const { value: preCtrlVal = '' } = this.state;
            const { type } = this.props;
            let ctrlValue = rawVal;
            switch (type) {
                case 'bankCard':
                    ctrlValue = rawVal.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                    break;
                case 'phone':
                    ctrlValue = rawVal.replace(/\D/g, '').substring(0, 11);
                    const valueLen = ctrlValue.length;
                    if (valueLen > 3 && valueLen < 8) {
                        ctrlValue = `${ctrlValue.substr(0, 3)} ${ctrlValue.substr(3)}`;
                    }
                    else if (valueLen >= 8) {
                        ctrlValue = `${ctrlValue.substr(0, 3)} ${ctrlValue.substr(3, 4)} ${ctrlValue.substr(7)}`;
                    }
                    break;
                case 'number':
                    ctrlValue = rawVal.replace(/\D/g, '');
                    break;
                case 'text':
                case 'password':
                default:
                    break;
            }
            this.handleOnChange(ctrlValue, ctrlValue !== rawVal, () => {
                switch (type) {
                    case 'bankCard':
                    case 'phone':
                    case 'number':
                        // controlled input type needs to adjust the position of the caret
                        try {
                            // set selection may throw error (https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange)
                            el.selectionStart = el.selectionEnd = this.calcPos(prePos || 0, preCtrlVal, rawVal, ctrlValue, [' '], /\D/g);
                        }
                        catch (error) {
                            console.warn('Set selection error:', error);
                        }
                        break;
                    default:
                        break;
                }
            });
        };
        this.handleOnChange = (value, isMutated = false, adjustPos = noop) => {
            const { onChange } = this.props;
            if (!('value' in this.props)) {
                this.setState({ value });
            }
            else {
                this.setState({ value: this.props.value });
            }
            if (onChange) {
                if (isMutated) {
                    setTimeout(() => {
                        onChange(value);
                        adjustPos();
                    });
                }
                else {
                    onChange(value);
                    adjustPos();
                }
            }
            else {
                adjustPos();
            }
        };
        this.onInputFocus = (value) => {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
            this.setState({
                focus: true,
            });
            if (this.props.onFocus) {
                this.props.onFocus(value);
            }
        };
        this.onInputBlur = (value) => {
            if (this.inputRef) {
                // this.inputRef may be null if customKeyboard unmount
                this.debounceTimeout = window.setTimeout(() => {
                    if (document.activeElement !== (this.inputRef && this.inputRef.inputRef)) {
                        this.setState({
                            focus: false,
                        });
                    }
                }, 200);
            }
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
        this.clearInput = () => {
            if (this.props.type !== 'password' && this.props.updatePlaceholder) {
                this.setState({
                    placeholder: this.props.value,
                });
            }
            this.setState({
                value: '',
            });
            if (this.props.onChange) {
                this.props.onChange('');
            }
            this.focus();
        };
        // this is instance method for user to use
        this.focus = () => {
            if (this.inputRef) {
                this.inputRef.focus();
            }
        };
        // calculate the position of the caret
        this.calcPos = (prePos, preCtrlVal, rawVal, ctrlVal, placeholderChars, maskReg) => {
            const editLength = rawVal.length - preCtrlVal.length;
            const isAddition = editLength > 0;
            let pos = prePos;
            if (isAddition) {
                const additionStr = rawVal.substr(pos - editLength, editLength);
                let ctrlCharCount = additionStr.replace(maskReg, '').length;
                pos -= (editLength - ctrlCharCount);
                let placeholderCharCount = 0;
                while (ctrlCharCount > 0) {
                    if (placeholderChars.indexOf(ctrlVal.charAt(pos - ctrlCharCount + placeholderCharCount)) === -1) {
                        ctrlCharCount--;
                    }
                    else {
                        placeholderCharCount++;
                    }
                }
                pos += placeholderCharCount;
            }
            return pos;
        };
        this.state = {
            placeholder: props.placeholder,
            value: normalizeValue(props.value || props.defaultValue),
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('placeholder' in nextProps && !nextProps.updatePlaceholder) {
            this.setState({
                placeholder: nextProps.placeholder,
            });
        }
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value,
            });
        }
    }
    componentWillUnmount() {
        if (this.debounceTimeout) {
            window.clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
    }
    render() {
        const props = Object.assign({}, this.props);
        delete props.updatePlaceholder;
        const { prefixCls, prefixListCls, editable, style, clear, children, error, className, extra, labelNumber, type, onExtraClick, onErrorClick, moneyKeyboardAlign, moneyKeyboardWrapProps, moneyKeyboardHeader, onVirtualKeyboardConfirm } = props, restProps = __rest(props, ["prefixCls", "prefixListCls", "editable", "style", "clear", "children", "error", "className", "extra", "labelNumber", "type", "onExtraClick", "onErrorClick", "moneyKeyboardAlign", "moneyKeyboardWrapProps", "moneyKeyboardHeader", "onVirtualKeyboardConfirm"]);
        const { name, disabled, maxLength } = restProps;
        const { value } = this.state;
        // tslint:disable-next-line:variable-name
        const _locale = getComponentLocale(this.props, this.context, 'InputItem', () => require('./locale/zh_CN'));
        const { confirmLabel, backspaceLabel, cancelKeyboardLabel, } = _locale;
        const { focus, placeholder, } = this.state;
        const wrapCls = classnames(`${prefixListCls}-item`, `${prefixCls}-item`, `${prefixListCls}-item-middle`, className, {
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-error`]: error,
            [`${prefixCls}-focus`]: focus,
            [`${prefixCls}-android`]: focus,
        });
        const labelCls = classnames(`${prefixCls}-label`, {
            [`${prefixCls}-label-2`]: labelNumber === 2,
            [`${prefixCls}-label-3`]: labelNumber === 3,
            [`${prefixCls}-label-4`]: labelNumber === 4,
            [`${prefixCls}-label-5`]: labelNumber === 5,
            [`${prefixCls}-label-6`]: labelNumber === 6,
            [`${prefixCls}-label-7`]: labelNumber === 7,
        });
        const controlCls = `${prefixCls}-control`;
        let inputType = 'text';
        if (type === 'bankCard' || type === 'phone') {
            inputType = 'tel';
        }
        else if (type === 'password') {
            inputType = 'password';
        }
        else if (type === 'digit') {
            inputType = 'number';
        }
        else if (type !== 'text' && type !== 'number') {
            inputType = type;
        }
        let patternProps;
        if (type === 'number') {
            patternProps = {
                pattern: '[0-9]*',
            };
        }
        let classNameProps;
        if (type === 'digit') {
            classNameProps = {
                className: 'h5numInput',
            };
        }
        return (<div className={wrapCls}>
        <div className={`${prefixListCls}-line`}>
          {children ? <div className={labelCls}>{children}</div> : null}
          <div className={controlCls}>
            {type === 'money' ? (<CustomInput value={normalizeValue(value)} type={type} ref={el => (this.inputRef = el)} maxLength={maxLength} placeholder={placeholder} onChange={this.onInputChange} onFocus={this.onInputFocus} onBlur={this.onInputBlur} onVirtualKeyboardConfirm={onVirtualKeyboardConfirm} disabled={disabled} editable={editable} prefixCls={prefixCls} style={style} confirmLabel={confirmLabel} backspaceLabel={backspaceLabel} cancelKeyboardLabel={cancelKeyboardLabel} moneyKeyboardAlign={moneyKeyboardAlign} moneyKeyboardWrapProps={moneyKeyboardWrapProps} moneyKeyboardHeader={moneyKeyboardHeader}/>) : (<Input {...patternProps} {...restProps} {...classNameProps} value={normalizeValue(value)} defaultValue={undefined} ref={(el) => (this.inputRef = el)} style={style} type={inputType} maxLength={maxLength} name={name} placeholder={placeholder} onChange={this.onInputChange} onFocus={this.onInputFocus} onBlur={this.onInputBlur} readOnly={!editable} disabled={disabled}/>)}
          </div>
          {clear &&
            editable &&
            !disabled &&
            (value && `${value}`.length > 0) ? (<TouchFeedback activeClassName={`${prefixCls}-clear-active`}>
              <div className={`${prefixCls}-clear`} onClick={this.clearInput}/>
            </TouchFeedback>) : null}
          {error ? (<div className={`${prefixCls}-error-extra`} onClick={onErrorClick}/>) : null}
          {extra !== '' ? (<div className={`${prefixCls}-extra`} onClick={onExtraClick}>
              {extra}
            </div>) : null}
        </div>
      </div>);
    }
}
InputItem.defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'text',
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    onVirtualKeyboardConfirm: noop,
    labelNumber: 5,
    updatePlaceholder: false,
    moneyKeyboardAlign: 'right',
    moneyKeyboardWrapProps: {},
    moneyKeyboardHeader: null,
};
InputItem.contextTypes = {
    antLocale: PropTypes.object,
};
export default InputItem;
