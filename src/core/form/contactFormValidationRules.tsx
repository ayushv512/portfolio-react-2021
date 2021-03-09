
export function validate(values) {
    let errors = {}
   
    if (!values.name) {
        errors['name'] = 'Please enter your name';
    } 
    if (!values.phoneNumber) {
      errors['phoneNumber'] = 'Please enter your phone number';
    } 
    else if (!/^[0-9]+$/.test(values.phoneNumber)) {
      errors['phoneNumber'] = 'Please enter numeric characters only';
    }
    else if (!/^\d{10}$/.test(values.phoneNumber)) {
      errors['phoneNumber'] = 'Phone number must contain 10 characters ';
    }
    if (!values.email) {
      errors['email'] = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors['email'] = 'Please enter valid email address';
    }
    if (!values.message) {
        errors['message'] = 'Please enter your message';
    } 
    return errors;
};

export function validateOnBlur(values, err){
  const errors = {...err}
  if (values.phoneNumber && !/^[0-9]+$/.test(values.phoneNumber)) {
    errors['phoneNumber'] = 'Please enter numeric characters only';
  }
  else if (values.phoneNumber && !/^\d{10}$/.test(values.phoneNumber)) {
    errors['phoneNumber'] = 'Phone number must contain 10 characters ';
  }
  else if (values.phoneNumber && !/(6|7|8|9)\d{9}/.test(values.phoneNumber)) {
    errors['phoneNumber'] = 'Please enter valid phone number';
  }
  else if(values.phoneNumber){
    errors['phoneNumber'] = '';
  }
  if(values.email && !/\S+@\S+\.\S+/.test(values.email)){
    errors['email'] = 'Please enter valid email address';
  }
  else if(values.email){
    errors['email'] = '';
  }
  return errors;
}
