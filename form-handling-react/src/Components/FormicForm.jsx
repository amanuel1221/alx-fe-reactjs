import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log("Formik Submitted:", values);
    alert(`User ${values.username} registered successfully!`);
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded">
      <h2 className="text-xl font-bold mb-4">User Registration (Formik)</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="mb-2">
            <Field name="username" type="text" placeholder="Username" className="border p-2 w-full" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-2">
            <Field name="email" type="email" placeholder="Email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-2">
            <Field name="password" type="password" placeholder="Password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
