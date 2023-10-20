
import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
  phone: Yup.string().required('Phone number is required'),
});

const initialValues = {
  name: 'Enter your name',
  email: 'Enter your email',
  password: '',
  phone: '',
};

function SignupForm() {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here, e.g., make an API request
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <form className="max-w-md mx-auto p-4 border rounded-lg shadow-lg mt-2">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold text-gray-700">Name</label>
            <Field type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" />
            <ErrorMessage name="name" component="div" className="text-red-600" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
            <Field type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" />
            <ErrorMessage name="email" component="div" className="text-red-600" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold text-gray-700">Password</label>
            <Field type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md" />
            <ErrorMessage name="password" component="div" className="text-red-600" />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold text-gray-700">Phone</label>
            <Field type="text" id="phone" name="phone" className="w-full px-3 py-2 border rounded-md" />
            <ErrorMessage name="phone" component="div" className="text-red-600" />
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-700">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </Formik>
  );
}

export default SignupForm;
