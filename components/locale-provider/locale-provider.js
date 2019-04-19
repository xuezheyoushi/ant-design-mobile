import PropTypes from 'prop-types';
import React from 'react';
export default class LocaleProvider extends React.Component {
    getChildContext() {
        return {
            antLocale: Object.assign({}, this.props.locale, { exist: true }),
        };
    }
    render() {
        return React.Children.only(this.props.children);
    }
}
LocaleProvider.propTypes = {
    locale: PropTypes.object,
};
LocaleProvider.childContextTypes = {
    antLocale: PropTypes.object,
};
