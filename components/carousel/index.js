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
import ReactCarousel from 'rmc-nuka-carousel';
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = (index) => {
            this.setState({
                selectedIndex: index,
            }, () => {
                if (this.props.afterChange) {
                    this.props.afterChange(index);
                }
            });
        };
        this.state = {
            selectedIndex: this.props.selectedIndex,
        };
    }
    render() {
        const _a = this.props, { infinite, selectedIndex, beforeChange, afterChange, dots } = _a, restProps = __rest(_a, ["infinite", "selectedIndex", "beforeChange", "afterChange", "dots"]);
        const { prefixCls, dotActiveStyle, dotStyle, className, vertical, } = restProps;
        const newProps = Object.assign({}, restProps, { wrapAround: infinite, slideIndex: selectedIndex, beforeSlide: beforeChange });
        let Decorators = [];
        if (dots) {
            Decorators = [
                {
                    component: ({ slideCount, slidesToScroll, currentSlide, }) => {
                        const arr = [];
                        for (let i = 0; i < slideCount; i += slidesToScroll) {
                            arr.push(i);
                        }
                        const dotDom = arr.map(index => {
                            const dotCls = classnames(`${prefixCls}-wrap-dot`, {
                                [`${prefixCls}-wrap-dot-active`]: index === currentSlide,
                            });
                            const currentDotStyle = index === currentSlide ? dotActiveStyle : dotStyle;
                            return (<div className={dotCls} key={index}>
                  <span style={currentDotStyle}/>
                </div>);
                        });
                        return <div className={`${prefixCls}-wrap`}>{dotDom}</div>;
                    },
                    position: 'BottomCenter',
                },
            ];
        }
        const wrapCls = classnames(prefixCls, className, {
            [`${prefixCls}-vertical`]: vertical,
        });
        return (<ReactCarousel {...newProps} className={wrapCls} decorators={Decorators} afterSlide={this.onChange}/>);
    }
}
Carousel.defaultProps = {
    prefixCls: 'am-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    cellAlign: 'center',
    selectedIndex: 0,
    dotStyle: {},
    dotActiveStyle: {},
};
