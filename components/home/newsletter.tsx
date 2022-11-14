import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewsLetter = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {email: ""},
    validationSchema: Yup.object({
      email: Yup
      .string().required("Please include a valid email address")
      .email("This is an invalid email address")
    }),
    onSubmit: async (values, {resetForm}) => {
      setLoading(true);
      console.log(values);
      //resetForm();
      //setLoading(false);
    }
  });
  // console.log(formik);
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-2xl bg-[#316BFF] py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">Get our pro offers</h2>
            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
              Create a visual identity for your company, and an overall brand
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form onSubmit={formik.handleSubmit} className="sm:flex bg-white p-2 rounded-sm">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className={formik.errors.email && formik.touched.email ? "w-full rounded-sm bg-red-100 border-red-400 px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 focus:ring-offset-white focus:border-white" : "w-full rounded-sm border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 focus:ring-offset-white focus:border-white"}
                placeholder="Type your email here"
                // {...formik.getFieldProps("email")}
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-sm border border-transparent bg-[#353945] px-5 py-3 text-base font-medium text-white hover:bg-[#3B3E44] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            {formik.errors.email && formik.touched.email && <p className="text-sm text-red-100 mt-2" >{formik.errors.email}</p> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter;