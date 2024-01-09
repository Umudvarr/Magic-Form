import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>Magic Form</h1>
        <p>Build form in react without the tears.</p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            agree: false,
            favoriteColor: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is require!"),
            email: Yup.string()
              .email("It's not correct Email Account.")
              .required("Email is require!"),
            agree: Yup.boolean().required("You must accept the rules!"),
            failureMessage: Yup.string()
              .required("Come on, everyone has favorite colors.")
              .oneOf(["red", "green", "blue"]),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            setTimeout(() => {
              resetForm();
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
            dirty,
            touched,
            isSubmitting,
          }) => (
            <form onsubmit="handleSubmit">
              <h3>Log in</h3>
              <label for="name">Name</label>
              <input
                type="text"
                placeholder="Name..."
                id="name"
                className="input"
                value={values.name}
                onChange={handleChange}
              />

              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <label for="email" className="topMargin">
                Email
              </label>
              <input
                type="email"
                placeholder="exapmle@gmail.com"
                id="email"
                className="input"
                value={values.email}
                onChange={handleChange}
              />

              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="favoriteColor" className="topMargin">
                Favorite Color
              </label>
              <select
                id="favoriteColor"
                value={values.favoriteColor}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "130px",
                  padding: "10px 15px",
                  margin: "0 10px",
                  outline: "none",
                }}
              >
                <option value="" label="Choose a color" />
                <option value="red" label="Red" />
                <option value="green" label="Green" />
                <option value="blue" label="Blue" />
              </select>

              {errors.favoriteColor && touched.favoriteColor && (
                <div className="input-feedback">{errors.favoriteColor}</div>
              )}

              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label className="checkbox-label" htmlFor="agree">
                  I agree with the Contract..
                </label>
              </div>

              <button type="submit" disabled={!dirty}>
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default App;
