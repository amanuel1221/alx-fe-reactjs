import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    alert("User registered!");
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label className="block mb-1">Username:</label>
            <Field name="username" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <Field name="email" type="email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password:</label>
            <Field name="password" type="password" className="w-full p-2 border rounded" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
