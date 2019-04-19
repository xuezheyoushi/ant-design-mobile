var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import classnames from 'classnames';
import React from 'react';
import TouchFeedback from 'rmc-feedback';
import { IS_IOS } from '../_util/exenv';
export class KeyboardItem extends React.Component {
    render() {
        const _a = this.props, { prefixCls, onClick, className, disabled, children, tdRef, label, iconOnly } = _a, restProps = __rest(_a, ["prefixCls", "onClick", "className", "disabled", "children", "tdRef", "label", "iconOnly"]);
        let value = children;
        if (className === 'keyboard-delete') {
            value = 'delete';
        }
        else if (className === 'keyboard-hide') {
            value = 'hide';
        }
        else if (className === 'keyboard-confirm') {
            value = 'confirm';
        }
        const wrapCls = classnames(`${prefixCls}-item`, className);
        return (<TouchFeedback activeClassName={`${prefixCls}-item-active`}>
        <td ref={tdRef} 
        // tslint:disable-next-line:jsx-no-multiline-js
        onClick={e => {
            onClick(e, value);
        }} className={wrapCls} {...restProps}>
          {children}
          {iconOnly && <i className="sr-only">{label}</i>}
        </td>
      </TouchFeedback>);
    }
}
KeyboardItem.defaultProps = {
    prefixCls: 'am-number-keyboard',
    onClick: () => { },
    disabled: false,
};
class CustomKeyboard extends React.Component {
    constructor() {
        super(...arguments);
        this.onKeyboardClick = (e, value = '') => {
            e.nativeEvent.stopImmediatePropagation();
            if (value === 'confirm' && this.confirmDisabled) {
                return null;
            }
            else {
                if (this.linkedInput) {
                    this.linkedInput.onKeyboardClick(value);
                }
            }
        };
        this.renderKeyboardItem = (item, index) => {
            return (<KeyboardItem onClick={this.onKeyboardClick} key={`item-${item}-${index}`}>
        {item}
      </KeyboardItem>);
        };
    }
    render() {
        const { prefixCls, confirmLabel, backspaceLabel, cancelKeyboardLabel, wrapProps, header, } = this.props;
        const wrapperCls = classnames(`${prefixCls}-wrapper`, `${prefixCls}-wrapper-hide`);
        return (<div className={wrapperCls} ref={el => (this.antmKeyboard = el)} {...wrapProps}>
        {header && React.cloneElement(header, { onClick: this.onKeyboardClick })}
        <table>
          <tbody>
            <tr>
              {['1', '2', '3'].map((item, index) => 
        // tslint:disable-next-line:jsx-no-multiline-js
        this.renderKeyboardItem(item, index))}
              <KeyboardItem className="keyboard-delete" rowSpan={2} onClick={this.onKeyboardClick} {...this.getAriaAttr(backspaceLabel)}/>
            </tr>
            <tr>
              {['4', '5', '6'].map((item, index) => 
        // tslint:disable-next-line:jsx-no-multiline-js
        this.renderKeyboardItem(item, index))}
            </tr>
            <tr>
              {['7', '8', '9'].map((item, index) => 
        // tslint:disable-next-line:jsx-no-multiline-js
        this.renderKeyboardItem(item, index))}
              <KeyboardItem className="keyboard-confirm" rowSpan={2} onClick={this.onKeyboardClick} tdRef={el => (this.confirmKeyboardItem = el)}>
                {confirmLabel}
              </KeyboardItem>
            </tr>
            <tr>
              {['.', '0'].map((item, index) => 
        // tslint:disable-next-line:jsx-no-multiline-js
        this.renderKeyboardItem(item, index))}
              <KeyboardItem className="keyboard-hide" onClick={this.onKeyboardClick} {...this.getAriaAttr(cancelKeyboardLabel)}/>
            </tr>
          </tbody>
        </table>
      </div>);
    }
    getAriaAttr(label) {
        if (IS_IOS) {
            return { label, iconOnly: true };
        }
        else {
            return { role: 'button', 'aria-label': label };
        }
    }
}
CustomKeyboard.defaultProps = {
    prefixCls: 'am-number-keyboard',
};
export default CustomKeyboard;
