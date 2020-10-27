import React from "react"
import { useFormik } from 'formik';
import classNames from "classnames/dedupe"

const validate = (values) => {
  const errors = {};

  if (/^ *$/.test(values.username)) {
    errors.username = 'Required';
  } else if (values.username.length < 3) {
    errors.username = 'Must be at least 3 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (/^ *$/.test(values.password)) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be at least 6 characters';
  }

  return errors;
};

const Register = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })

  return (
    <>
      <h2 className="title is-5">Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="username" className="label">Username</label>
          <div className="control">
            <input
              name="username"
              className={classNames('input', {'is-danger': formik.errors.username})}
              placeholder="Username..."
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          {formik.errors.username ? <p className="help is-danger">{formik.errors.username}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="email" className="label">Email</label>
          <div className="control">
            <input
              name="email"
              className={classNames('input', {'is-danger': formik.errors.email})}
              placeholder="Email..."
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email ? <p className="help is-danger">{formik.errors.email}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="email" className="label">Password</label>
          <div className="control">
            <input
              name="password"
              className={classNames('input', {'is-danger': formik.errors.password})}
              placeholder="password..."
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password ? <p className="help is-danger">{formik.errors.password}</p> : null}
        </div>
        <div className="field">
          <div className="control mt-5">
            <button type="submit" className={classNames('button is-primary', {'is-loading': formik.isSubmitting})} disabled={formik.isSubmitting}>
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Register
