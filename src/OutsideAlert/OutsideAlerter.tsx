import * as React from "react"
// @ts-ignore
import PropTypes from "prop-types";

/**
 * Component that alerts if you click outside of it
 *  <OutsideAlerter Action ={props.setCardVisible}>
 *  </OutsideAlerter>
 */
export default class OutsideAlerter extends React.Component {
  constructor(props:any) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  // @ts-ignore
  setWrapperRef(node) {
    // @ts-ignore
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  // @ts-ignore
  handleClickOutside(event) {
    // @ts-ignore
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      // @ts-ignore
      this.props.Action(false)
    }
  }

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}
// @ts-ignore
OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};
