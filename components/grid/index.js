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
import Carousel from '../carousel';
import Flex from '../flex';
export default class Grid extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            initialSlideWidth: 0,
        };
        this.renderCarousel = (rowsArr, pageCount, rowCount) => {
            const { prefixCls } = this.props;
            const carouselMaxRow = this.props.carouselMaxRow;
            const pagesArr = [];
            for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
                const pageRows = [];
                for (let ii = 0; ii < carouselMaxRow; ii++) {
                    const rowIndex = pageIndex * carouselMaxRow + ii;
                    if (rowIndex < rowCount) {
                        pageRows.push(rowsArr[rowIndex]);
                    }
                    else {
                        // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
                        pageRows.push(<div key={`gridline-${rowIndex}`}/>);
                    }
                }
                pagesArr.push(<div key={`pageitem-${pageIndex}`} className={`${prefixCls}-carousel-page`}>
          {pageRows}
        </div>);
            }
            return pagesArr;
        };
        this.renderItem = (dataItem, index, columnNum, renderItem) => {
            const { prefixCls } = this.props;
            let itemEl = null;
            if (renderItem) {
                itemEl = renderItem(dataItem, index);
            }
            else {
                if (dataItem) {
                    const { icon, text } = dataItem;
                    itemEl = (<div className={`${prefixCls}-item-inner-content column-num-${columnNum}`}>
            {React.isValidElement(icon) ? (icon) : (<img className={`${prefixCls}-icon`} src={icon}/>)}
            <div className={`${prefixCls}-text`}>{text}</div>
          </div>);
                }
            }
            return <div className={`${prefixCls}-item-content`}>{itemEl}</div>;
        };
        this.getRows = (rowCount, dataLength) => {
            // tslint:disable:prefer-const
            let { columnNum, data, renderItem, prefixCls, onClick, activeStyle, activeClassName, itemStyle, } = this.props;
            const rowsArr = [];
            columnNum = columnNum;
            const rowWidth = `${100 / columnNum}%`;
            const colStyle = Object.assign({ width: rowWidth }, itemStyle);
            for (let i = 0; i < rowCount; i++) {
                const rowArr = [];
                for (let j = 0; j < columnNum; j++) {
                    const dataIndex = i * columnNum + j;
                    let itemEl;
                    if (dataIndex < dataLength) {
                        const el = data && data[dataIndex];
                        itemEl = (<TouchFeedback key={`griditem-${dataIndex}`} activeClassName={activeClassName ? activeClassName : `${prefixCls}-item-active`} activeStyle={activeStyle}>
              <Flex.Item className={`${prefixCls}-item`} onClick={() => onClick && onClick(el, dataIndex)} style={colStyle}>
                {this.renderItem(el, dataIndex, columnNum, renderItem)}
              </Flex.Item>
            </TouchFeedback>);
                    }
                    else {
                        itemEl = (<Flex.Item key={`griditem-${dataIndex}`} className={`${prefixCls}-item ${prefixCls}-null-item`} style={colStyle}/>);
                    }
                    rowArr.push(itemEl);
                }
                rowsArr.push(<Flex justify="center" align="stretch" key={`gridline-${i}`}>
          {rowArr}
        </Flex>);
            }
            return rowsArr;
        };
    }
    componentDidMount() {
        this.setState({
            initialSlideWidth: document.documentElement.clientWidth,
        });
    }
    render() {
        const _a = this.props, { prefixCls, className, data, hasLine, isCarousel, square, activeStyle, activeClassName } = _a, restProps = __rest(_a, ["prefixCls", "className", "data", "hasLine", "isCarousel", "square", "activeStyle", "activeClassName"]);
        let { columnNum, carouselMaxRow, onClick, renderItem } = restProps, restPropsForCarousel = __rest(restProps, ["columnNum", "carouselMaxRow", "onClick", "renderItem"]);
        const { initialSlideWidth } = this.state;
        columnNum = columnNum;
        carouselMaxRow = carouselMaxRow;
        const dataLength = (data && data.length) || 0;
        let rowCount = Math.ceil(dataLength / columnNum);
        let rowsArr;
        let renderEl;
        if (isCarousel) {
            if (initialSlideWidth < 0) {
                // carousel  server render. because carousel dependes on document
                return null;
            }
            if (rowCount % carouselMaxRow !== 0) {
                rowCount = rowCount + carouselMaxRow - rowCount % carouselMaxRow;
            }
            const pageCount = Math.ceil(rowCount / carouselMaxRow);
            rowsArr = this.getRows(rowCount, dataLength);
            let carouselProps = {};
            if (pageCount <= 1) {
                carouselProps = {
                    dots: false,
                    dragging: false,
                    swiping: false,
                };
            }
            renderEl = (<Carousel initialSlideWidth={initialSlideWidth} {...restPropsForCarousel} {...carouselProps}>
          {this.renderCarousel(rowsArr, pageCount, rowCount)}
        </Carousel>);
        }
        else {
            rowsArr = this.getRows(rowCount, dataLength);
            renderEl = rowsArr;
        }
        const cls = classnames(prefixCls, className, {
            [`${prefixCls}-square`]: square,
            [`${prefixCls}-line`]: hasLine,
            [`${prefixCls}-carousel`]: isCarousel,
        });
        return <div className={cls}>{renderEl}</div>;
    }
}
Grid.defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    prefixCls: 'am-grid',
    square: true,
    itemStyle: {},
};
