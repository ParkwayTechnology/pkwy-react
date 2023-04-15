import * as React from "react"
import { Button } from 'primereact/button';
import "./NavbarStyles.scss";

export default function Navbar(props: { bgColor: any; handleLogoClick: any; handleSignUpClick: any; handleSignInClick: any; }) {

  return (
   <>
    <div className="fluid-container" style={{backgroundColor:props.bgColor, color:"#d9e3ea", padding:"2.5% 5%", display: "flex", justifyContent: "space-between", alignItems:"center"}}>
          <div
            style={{ textDecoration: "none", fontSize: 30 }}
            onClick={props.handleLogoClick}
          >
            <text className={"Logo"}>Affy</text>
          </div>

          <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"30px"}}>
          <div className="textStylediv" onClick={props.handleSignUpClick}>
              <text className="textStyle">Sign up</text>
            </div>
            <div onClick={props.handleSignInClick}>
              <Button  label="Sign in" />
            </div>
          </div>

        </div>
   </>
  );
}