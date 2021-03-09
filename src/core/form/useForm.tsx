import { useState, useEffect } from 'react';

const useForm = (callback, validate, validateOnBlur) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((changeValues) => ({ ...changeValues, [event.target.name]: event.target.value }));
  };

  const handleBlur = () => {
    const validationErrors = validateOnBlur(values, errors);
    setErrors(validationErrors);
    setIsSubmitting(false);
  };

  return {
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    values,
    errors,
  };
};

export default useForm;
