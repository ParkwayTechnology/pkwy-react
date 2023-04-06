

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var PropTypes = _interopDefault(require('prop-types'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// @ts-ignore
function List(_a) {
    var 
    // @ts-ignore
    Component = _a.renderItem, 
    // @ts-ignore
    header = _a.headerComponent, 
    // @ts-ignore
    data = _a.data, 
    // @ts-ignore
    row = _a.row, 
    // @ts-ignore
    flex = _a.flex, 
    // @ts-ignore
    center = _a.center, 
    // @ts-ignore
    between = _a.between, 
    // @ts-ignore
    around = _a.around, 
    // @ts-ignore
    margin = _a.margin, 
    // @ts-ignore
    styles = _a.styles, 
    // @ts-ignore
    sizing = _a.sizing, 
    // @ts-ignore
    styleContainer = _a.styleContainer;
    var styleList = __assign({}, (row && styleProps.row), (flex && styleProps.flex), (center && styleProps.center), (between && styleProps.spaceBetween), (around && styleProps.around), (margin && styleProps.margin), styles);
    var stylePanel = __assign({}, (margin && styleProps.margin), (center && styleProps.panelCenter), (sizing && styleProps.sizing), styleContainer);
    console.log("row:", row);
    console.log("styleList", styleList);
    console.log("header", header);
    React.useEffect(function () { }, []);
    return (React.createElement("div", { style: stylePanel },
        header ? header() : null,
        React.createElement("div", { style: styleList }, data.map(function (item, index) { return (React.createElement(Component, __assign({ key: index }, item))); }))));
}
// @ts-ignore
List.defaultProps = {
    row: false,
    center: false,
    flex: false,
    around: false,
    between: false,
    margin: false,
    sizing: false,
    styles: {},
    styleContainer: {},
    renderItem: function () {
        return null;
    },
    headerComponent: function () {
        return null;
    },
    style: {}
};
// @ts-ignore
List.propTypes = {
    row: PropTypes.bool,
    sizing: PropTypes.bool,
    styles: PropTypes.object,
    styleContainer: PropTypes.object,
    center: PropTypes.bool,
    margin: PropTypes.bool,
    around: PropTypes.bool,
    between: PropTypes.bool,
    flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};
var styleProps = {
    row: {
        display: "flex",
        flexDirection: "row"
    },
    flex: {
        flex: 1
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    spaceBetween: {
        justifyContent: "space-between"
    },
    around: {
        justifyContent: "space-around"
    },
    margin: {
    // marginLeft: "10%",
    // marginRight: "10%",
    // maxWidth: "850px"
    },
    sizing: {
        maxWidth: "1250px",
        minWidth: "380px"
    },
    panelCenter: {
        margin: "auto"
    }
};

var index = { List: List };

exports.default = index;
//# sourceMappingURL=index.js.map
