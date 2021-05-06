import React from 'react'
import logo from './logo.png';
import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import { Display4 } from 'baseui/typography'
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { Menu } from '../Navbar';
import './style.css';

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [currentPage , setCurrentPage] = React.useState("")
  return (
    <>
    <Menu/>
    <div className="mainContainer">
      <div className="container">
        <Card>
          <StyledBody>
            <img src={logo} className="logo" alt="logo"></img>
            <Display4 marginTop="scale500" marginBottom="scale700" className="center"> { currentPage === 'Signup' ?  "Register Now": "Welcome Back!" }</Display4>
            <Input
              style={{ borderRadius: '10px' }}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className="input"
              clearOnEscape
            />
            <br></br>
             <Input
              value={password}
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="input"
              clearOnEscape
            />
            <br></br>
            <p style={{ 
              color: 'rgb(255 153 27)' ,
              float: 'right' ,
              fontWeight: '600' , 
              cursor: 'pointer'
              }}>Forgot password?</p>
          </StyledBody>
          <StyledAction>
            <Button
              overrides={{
                BaseButton: { style: { width: "50%", borderRadius: '7px' } }
              }}
            >
             {currentPage !== 'Signup' ?  "Login" : "Signup" }
          </Button>
          <br></br>
          <br></br>
          <p className="center">{ currentPage !== 'Signup' ?  "Don't have an account?" : "Already have an account?"} 
          <span onClick={(e) => { setCurrentPage("Signup") }} style={{ color: '#00adff' , cursor: 'pointer' }}>SignUp</span></p>
          </StyledAction>
          <br></br>
          <br></br>
          <p className="center">All Rights are reserved by Shivaang Naturals</p>
        </Card>
      </div>
    </div>
    </>
  )
}

export default Login;
