

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
var button = require('primereact/button');

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
function DataRenderer(_a) {
    var 
    // @ts-ignore
    Component = _a.component, 
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
DataRenderer.defaultProps = {
    row: false,
    center: false,
    flex: false,
    around: false,
    between: false,
    margin: false,
    sizing: false,
    styles: {},
    styleContainer: {},
    component: function () {
        return null;
    },
    headerComponent: function () {
        return null;
    },
    style: {}
};
// @ts-ignore
DataRenderer.propTypes = {
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

___$insertStyle(".Logo {\n  font-size: 40px;\n  font-family: Pacifico-Regular;\n  /* font-family:Fab-Felt; */\n  letter-spacing: 10;\n  color: #d9e3ea;\n  text-align: center;\n  margin-top: 100px;\n  margin-bottom: 100px;\n  text-decoration: none;\n}\n\n.Logo:hover {\n  color: #ccd5db;\n}\n\n.textStyle {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #d9e3ea;\n  margin: 0px 15px;\n  text-decoration: none;\n}\n\n.textStyle:hover {\n  text-decoration: none;\n  color: #b6bec4;\n}\n\n.textStyleLink {\n  text-decoration: none;\n}\n\n.textStyleLink:hover {\n  text-decoration: none;\n}");

function Navbar(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "fluid-container", style: { backgroundColor: props.bgColor, color: "#d9e3ea", padding: "2.5% 5%", display: "flex", justifyContent: "space-between", alignItems: "center" } },
            React.createElement("div", { style: { textDecoration: "none", fontSize: 30 }, onClick: props.handleLogoClick },
                React.createElement("text", { className: "Logo" }, "Affy")),
            React.createElement("div", { style: { display: "flex", justifyContent: "center", alignItems: "center", height: "30px" } },
                React.createElement("div", { className: "textStylediv", onClick: props.handleSignUpClick },
                    React.createElement("text", { className: "textStyle" }, "Sign up")),
                React.createElement("div", { onClick: props.handleSignInClick },
                    React.createElement(button.Button, { label: "Sign in" }))))));
}

/**
 * Component that alerts if you click outside of it
 *  <OutsideAlerter Action ={props.setCardVisible}>
 *  </OutsideAlerter>
 */
var OutsideAlerter = /** @class */ (function (_super) {
    __extends(OutsideAlerter, _super);
    function OutsideAlerter(props) {
        var _this = _super.call(this, props) || this;
        _this.setWrapperRef = _this.setWrapperRef.bind(_this);
        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
        return _this;
    }
    OutsideAlerter.prototype.componentDidMount = function () {
        document.addEventListener('mousedown', this.handleClickOutside);
    };
    OutsideAlerter.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.handleClickOutside);
    };
    /**
     * Set the wrapper ref
     */
    // @ts-ignore
    OutsideAlerter.prototype.setWrapperRef = function (node) {
        // @ts-ignore
        this.wrapperRef = node;
    };
    /**
     * Alert if clicked on outside of element
     */
    // @ts-ignore
    OutsideAlerter.prototype.handleClickOutside = function (event) {
        // @ts-ignore
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            // @ts-ignore
            this.props.Action(false);
        }
    };
    OutsideAlerter.prototype.render = function () {
        return React.createElement("div", { ref: this.setWrapperRef }, this.props.children);
    };
    return OutsideAlerter;
}(React.Component));
// @ts-ignore
OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired,
};

exports.DataRenderer = DataRenderer;
exports.Navbar = Navbar;
exports.OutsideAlerter = OutsideAlerter;
//# sourceMappingURL=index.js.map
