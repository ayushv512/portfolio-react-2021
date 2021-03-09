import React, {useState, useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';

import useForm from '../../core/form/useForm';
import { ThemeContext } from 'styled-components';
import {validate, validateOnBlur} from '../../core/form/contactFormValidationRules';

// import { Axios, database } from '../../firebase/firebaseConfig';
import { ContactForm } from "./style";

export default function ContactFormComponent ( props ){
      const themeContext = useContext(ThemeContext);
      const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexDirection :'column',
        },
        textField: {
          margin: theme.spacing(1),
          //backgroundColor: themeContext.white,
          backgroundColor: '#FFF',
          '& .MuiFormLabel-root':{
            fontFamily: "'Inter', sans-serif"
          },
          '& .MuiInputBase-root':{
            fontFamily: "'Inter', sans-serif"
          },
          '& .MuiOutlinedInput-root.Mui-focused fieldset': {
            //borderColor: `${themeContext.red} !important`
              borderColor: '#000'
          },
          '& .MuiFormLabel-root.Mui-focused': {
            //color: `${themeContext.red} !important`
            color: '#000'
          },
          '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.23)'
          },
          '& .MuiFormLabel-root.Mui-error': {
            color: 'rgba(0, 0, 0, 0.54)'
          },
          '& .MuiFormHelperText-root.Mui-error':{
            margin: '0px',
            background: '#eeeeee4a'
          }
        },
        button: {
          margin: theme.spacing(1),
          //backgroundColor: themeContext.red,
          backgroundColor: themeContext.green,
          fontFamily:"'Inter', sans-serif",
          opacity: 0.9,
          '&:hover': { 
            // boxShadow: `0 2px 4px 0 ${themeContext.text.secondary}`,
            //backgroundColor: themeContext.red,
            backgroundColor: themeContext.green,
            opacity: 1
          }
        },
        alertMsg:{
          margin: theme.spacing(1),
          display: 'flex',
          justifyContent :'center'
        }
    }));
    const [successMsg, setSuccess] = useState(true);
    const [failureMsg, setFailure] = useState(true);
    const classes = useStyles();
    const {
        values,
        errors,
        setValues,
        handleBlur,
        handleChange,
        handleSubmit,
      } = useForm(sendQuery, validate, validateOnBlur );


    function sendQuery(){
        // Axios.post(
        //   'https://us-central1-pratiraksha4ever-project.cloudfunctions.net/submitForm',
        //   values
        // )
        // .then(() => {
        //   database.ref().child('users').push({
        //       'Name': values['name'],
        //       'Phone Number': values['phoneNumber'],
        //       'Email': values['email'],
        //       'Message': values['message'],
        //       'time': new Date()
        //   });
        //   setValues({});
        //   setSuccess(false);
        //   setTimeout(() => {
        //     setSuccess(true);
        //   }, 5000)
        // })
        // .catch(() => {
        //   setFailure(false);
        //   setTimeout(() => {
        //     setFailure(true);
        //   }, 5000)
        // })
        
    }
    return ( 
        <>
            <ContactForm className={classes.root} onSubmit={handleSubmit} noValidate> 
                 <TextField
                   error = {errors['name'] ? true : false }
                   name="name"
                   label="Name"
                   placeholder ="Enter your name"
                   helperText= {errors['name'] }
                   onChange={handleChange}
                   variant="outlined"
                   value={values['name'] || ''}
                   className={classes.textField}
                 />
                <TextField
                   error = { errors['phoneNumber'] ? true : false}
                   name="phoneNumber"
                   label="Phone number"
                   placeholder ="Enter your phone number"
                   helperText= { errors['phoneNumber']}
                   onBlur={handleBlur}
                   onChange={handleChange}
                   variant="outlined"
                   value={values['phoneNumber'] || ''}
                   className={classes.textField}
                   inputProps={{ maxLength: 10 }}
                 />
                <TextField
                   error = { errors['email'] ? true : false }
                   name="email"
                   label="Email"
                   placeholder ="Enter your email"
                   helperText= { errors['email'] }
                   onBlur={handleBlur}
                   onChange={handleChange}
                   variant="outlined"
                   value={values['email'] || ''}
                   className={classes.textField}
                />
                <TextField
                   error = { errors['message'] ? true : false  }
                   name="message"
                   label="Message"
                   placeholder ={props.messageMaxLength ? "Enter your message ( Max 450 characters )" : "Enter your message ( Max 150 characters )"}
                   helperText= { errors['message'] }
                   onChange={handleChange}
                   variant="outlined"
                   value={values['message'] || ''}
                   className={classes.textField}
                   multiline
                   rows={props.messageRows || 4}
                   inputProps={{ maxLength: props.messageMaxLength || 150 }}
                />
                {/* <div hidden={successMsg}>
                  <Alert 
                    severity="success"
                    className={classes.alertMsg}>
                    Successfully sent!
                  </Alert>
                </div>
                <div hidden={failureMsg}>
                  <Alert 
                    severity="error"
                    className={classes.alertMsg}>
                    Something went wrong. Please try again!
                  </Alert>
                </div> */}
                <Button 
                    variant="contained" 
                    color="primary"
                    type="submit"
                    children= "Send message"
                    className={classes.button}
                /> 
            </ContactForm>
        </>
     );
}

