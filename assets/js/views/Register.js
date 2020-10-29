import React from "react"
import { useFormik } from "formik"
import classNames from "classnames/dedupe"

const validate = (values) => {
  const errors = {}

  if (/^ *$/.test(values.name)) {
    errors.name = "Required"
  } else if (values.name.length < 3) {
    errors.name = "Must be at least 3 characters"
  }

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  if (/^ *$/.test(values.password)) {
    errors.password = "Required"
  } else if (values.password.length < 6) {
    errors.password = "Must be at least 6 characters"
  }

  return errors
}

const Register = () => {
  const addUser = (data) => {
    return fetch("/api/users/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate,
    onSubmit: (values, { resetForm }) => {
      addUser(values)
      resetForm()
    },
  })

  return (
    <>
      <h2 className="title is-5">Rejestracja</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="name" className="label">
            Nazwa uytkownika
          </label>
          <div className="control">
            <input
              name="name"
              className={classNames("input", {
                "is-danger": formik.errors.name,
              })}
              placeholder="name..."
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          {formik.errors.name ? (
            <p className="help is-danger">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            Adres e-mail
          </label>
          <div className="control">
            <input
              name="email"
              className={classNames("input", {
                "is-danger": formik.errors.email,
              })}
              placeholder="Email..."
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email ? (
            <p className="help is-danger">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            Hasło
          </label>
          <div className="control">
            <input
              name="password"
              className={classNames("input", {
                "is-danger": formik.errors.password,
              })}
              placeholder="password..."
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password ? (
            <p className="help is-danger">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="field">
          <div className="control mt-5">
            <button
              type="submit"
              className={classNames("button", {
                "is-loading": formik.isSubmitting,
              })}
              disabled={formik.isSubmitting}
            >
              Zarejestruj się
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Register
