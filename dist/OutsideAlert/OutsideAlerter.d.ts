import * as React from "react";
/**
 * Component that alerts if you click outside of it
 *  <OutsideAlerter Action ={props.setCardVisible}>
 *  </OutsideAlerter>
 */
export default class OutsideAlerter extends React.Component {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**
     * Set the wrapper ref
     */
    setWrapperRef(node: any): void;
    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event: any): void;
    render(): JSX.Element;
}
