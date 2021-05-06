import {Form ,Col, Button}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';  



  
      
export const Adduser= (props) => {  
const initialFieldValues = {  
    // currentId:'',
        FirstName: '',  
        LastName: ''  
    }  

    var [values, setValues] = useState(initialFieldValues)  
  
    useEffect(() => {
        if (props.currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.userObjects[props.currentId]
            })    
    }, [props.currentId, props.userObjects])                   


    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    } 
  
    const handleFormSubmit = e => {  
        e.preventDefault()  
        props.addOrEdit(values);  
    }  
   
    return (
        <div>
            <Form autoComplete="off" onChange={handleFormSubmit}>
                <input value={props.currentId === "" ? "Add user Info" : "Update user Info"}/>
            <Form.Row >
                <Col>
                <Form.Control placeholder="First name" value={values.FirstName} onChange={handleInputChange} id='firstname'/>
                </Col>
                <Col>
                <Form.Control placeholder="Last name"  value={values.LastName} onChange={handleInputChange} id='lastname'/>
                </Col>
            </Form.Row>
            <Button variant="primary" type="submit" >    Submit  </Button>
            </Form>

        </div>
    )
}

