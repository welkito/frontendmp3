import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { Link, Routes, Route, Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { login } from "store/slices/auth/slices";

export default function SignIn() {
  const {role} = useSelector(state =>{
    return{
      role : state?.auth?.role
    }
  })
  const dispatch = useDispatch()
  const username = useRef(null)
  const password = useRef(null)
  // const navigate = useNavigate()
  const onSubmit = () =>{
    const usernameValue = username.current.value;
    const passwordValue = password.current.value;
      dispatch(login({username : usernameValue, password : passwordValue}))
  }

  const token = localStorage.getItem("token")
  return (
    <div className="mt-8 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
            {(role === 1 && token) &&(
              <Navigate to="/admin/home" replace />)
            }
           

      <div className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
    {/* username */}
      <div className="mb-3">
        <label
          className={`text-sm text-navy-700 dark:text-white ${"ml-1.5 font-medium"}`}
        >
          Username*
        </label>
        <input
          type="text"
          ref={username}
          placeholder="Are you Admin or Cashier?"
          className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
          "border-gray-200 dark:!border-white/10 dark:text-white"}`}
        />
      </div>
      {/* password */}
        <div className="mb-3">
        <label
          className={`text-sm text-navy-700 dark:text-white ${"ml-1.5 font-medium"}`}
        >
          Password*
        </label>
        <input
          type="password"
          ref={password}
          placeholder = "Min. 8 characters"
          className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
          "border-gray-200 dark:!border-white/10 dark:text-white"}`}
        />
      </div>
        {/* <Link to="/admin" className="mt-0 w-max lg:pt-10"> */}
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={onSubmit}
        >
          Sign In
        </button>
        {/* </Link> */}

      </div>
    </div>
  );
}
