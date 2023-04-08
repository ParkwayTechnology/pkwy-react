import * as React from "react"
import { useEffect } from "react";
// @ts-ignore
import PropTypes from "prop-types";
// @ts-ignore
export default function DataRenderer({
  // @ts-ignore
  component: Component,
  // @ts-ignore
  headerComponent: header,
  // @ts-ignore
  data,
  // @ts-ignore
  row,
  // @ts-ignore
  flex,
  // @ts-ignore
  center,
  // @ts-ignore
  between,
  // @ts-ignore
  around,
  // @ts-ignore
  margin,
  // @ts-ignore
  styles,
  // @ts-ignore
  sizing,
  // @ts-ignore
  styleContainer
}) {
  let styleList = {
    ...(row && styleProps.row),
    ...(flex && styleProps.flex),
    ...(center && styleProps.center),
    ...(between && styleProps.spaceBetween),
    ...(around && styleProps.around),
    ...(margin && styleProps.margin),

    ...styles
  };
  let stylePanel = {
    ...(margin && styleProps.margin),
    ...(center && styleProps.panelCenter),
    ...(sizing && styleProps.sizing),
    ...styleContainer
  };

  console.log(`row:`, row);
  console.log("styleList", styleList);
  console.log("header", header);
  useEffect(() => {}, []);

  return (
    <div style={stylePanel}>
      {header ? header() : null}
      <div style={styleList}>
        {data.map((item:any, index:any) => (
          <Component key={index} {...item} />
        ))}
      </div>
    </div>
  );
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
  component: () => {
    return null;
  },
  headerComponent: () => {
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

const styleProps = {
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

