import React, { useState } from 'react';
const RegForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    let fname_length;
    if(formState.firstName.length < 2 && formState.firstName.length > 0){
        fname_length=<p>First Name must be atleast 2 characteres or more.</p>
    }
    let lname_length;
    if(formState.lastName.length < 2 && formState.lastName.length > 0){
        lname_length=<p>Last Name must be atleast 2 characteres or more.</p>
    }
    let email_length;
    if(formState.email.length < 5 && formState.email.length > 0){
        email_length=<p>Email must be atleast 5 characteres or more.</p>
    }
    let password_length;
    if(formState.password.length < 8 && formState.password.length > 0){
        password_length=<p>Password length must be atleast 8 characters</p>
    }
    let conpass;
    if(formState.password !== formState.confirmPassword){
        conpass=<p>Confirm Password must match password!</p>
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
            <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <p>{fname_length}</p>
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <p>{lname_length}</p>
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <p>{email_length}</p>
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <p>{password_length}</p>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <p>{conpass}</p>
                <br/>   
                <input type="submit" />
            </form>
            <p>First Name: {formState.firstName}</p>
            <p>Last Name: {formState.lastName}</p>
            <p>Email: {formState.email}</p>
            <p>password: {formState.password}</p>
            <p>Confirm Password: {formState.confirmPassword}</p>
        </div>
    )
}
export default RegForm;