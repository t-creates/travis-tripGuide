import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";

import { baseSchema } from "@/helpers/schemas";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { registerUser, signInUser } from "@/store/actions/user.action";
import { GoogleLogoIcon, ErrorIcon } from "@/svg/icons";
import Loading from "@/components/Loading";

const SignIn = () => {
  const [checkLogin, setCheckLogin] = useState(true); // check if user is logged in
  const [formType, setFormType] = useState(false)
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const formik = useFormik({
    initialValues: {email: "demar@swack.tech", password: "Testing123"},
    validationSchema: baseSchema,
    onSubmit: (values) => {
      submitForm(values);
    }
  });

  const submitForm = (values) => {
    if (formType) {
      // register
      console.log(values, "register")
      dispatch(registerUser({values, router}))
      
    } else {
      // login
      console.log(values, "sign in")
      dispatch(signInUser({values, router}))
    }
  }

  const handleFormType = () => {
    setFormType(!formType)
  }

  useEffect(() => {
    getSession().then(session => {
      if(session) {
        router.push("/users/dashboard")
      } else {
        setCheckLogin(false)
      }
    })
  }, [])

  // console.log(formik.errors)

  return (
    <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
      {!checkLogin ?

       
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            {formType ? "Let's Go" : "Welcome Back!"}
          </h1>
          
        </div>

        <div className="mt-5">
          <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-[#316BFF] text-white text-lg shadow-sm align-middle hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            <GoogleLogoIcon fillColor="#fff" className="w-5 h-auto" />
            Sign in with Google
          </button>
          

          <div className="py-3 flex items-center text-xs text-gray-400 before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
            or continue with
          </div>

          
          <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-y-4">
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.email && formik.touched.email ? "py-3 px-4 block w-full border-red-400 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" : "py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"}
                    required aria-describedby="email-error" 
                    // {...formik.getFieldProps("email")}
                    />
                  <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <ErrorIcon />
                  </div>
                </div>
                {formik.errors.email && formik.touched.email && <p className="text-sm text-red-400 mt-2">{formik.errors.email}</p> }
              </div>
              
              <div>
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                  <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../../examples/html/recover-account.html">Forgot password?</a>
                </div>
                <div className="relative">
                  <input 
                    type="password" 
                    id="password" 
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.password && formik.touched.password ? "py-3 px-4 block w-full border-red-400 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" : "py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"} 
                    required aria-describedby="password-error"
                    // {...formik.getFieldProps("password")}
                  />
                  <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
                    <ErrorIcon />
                  </div>
                </div>
                {formik.errors.password && formik.touched.password && <p className="text-sm text-red-400 mt-2">{formik.errors.password}</p> }
              </div>
              
              <div className="flex items-center">
                <div className="flex">
                  <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                </div>
                <div className="ml-3">
                  <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                </div>
              </div>
              
              { user.loading ?
                <Loading />
               :
               <>
                <button 
                  type="submit"  
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#316BFF] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800"
                >
                    {formType ? "Sign up" : "Sign in"}
                </button>
                <div className="text-center">
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {formType ? "Already have an account? " : "Don't have an account yet? "}
                    <button className="text-blue-600 decoration-2 hover:underline font-medium"
                      type="button"
                      onClick={handleFormType}
                    >
                      {formType ? "Sign in" : "Sign up here"}
                    </button>
                  </p>
                </div>
              </>
              }
              
            </div>
          </form>
          
        </div>
      </div>
    </div>
    : 
      <Loading />    
    }
    </main>
  )
}

export default SignIn