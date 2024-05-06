import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.password)) {
    errors.password = `Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number`;
  }

  // return the errors object
  return errors;
}

const App = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: ''
    },
    validate, // validate function
    onSubmit: values => {
      console.log(values);
    }
  });

  const style = {
    color: 'red',
    fontWeight: 'italic'
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input 
          type='text'
          placeholder='Name...'
          name='name'
          id='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>
      { formik.errors.name ? <div style={style}>{formik.errors.name}</div> : null }

      <div>
        <input 
          type="email"
          placeholder='Email...'
          name='email'
          id='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      { formik.errors.email ? <div style={style}>{formik.errors.email}</div> : null }

      <div>
        <input 
          type='password'
          placeholder='Password...'
          name='password'
          id='password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      { formik.errors.password ? <div style={style}>{formik.errors.password}</div> : null }
      <button type='submit'>Signup</button>
    </form>
  )
}

export default App;