/* eslint-disable no-useless-escape */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-96 shadow-2xl p-8 rounded-xl">
          <h3 className="py-6 text-center font-bold text-xl">Sign Up</h3>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                {...register('email', { required: 'Email Address is required' })}
              />
              {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be 6 characters'
                  },
                  pattern: {
                    value:
                      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
                    message: 'Password must be strong'
                  }
                })}
              />
              <label className="label">
                <span className="label-text">
                  <Link className="hover:underline">Forgot Password?</Link>
                </span>
              </label>
              {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
            </div>
            <button className="mt-3 btn btn-primary w-full text-white">Register</button>
            <label className="label ">
              <p className="label-text mx-auto ">
                Already have an account?{' '}
                <Link to="/login" className="text-secondary hover:underline">
                  Login{' '}
                </Link>
              </p>
            </label>
            <div className="divider">OR</div>
            <button
              className="mt-4 btn  btn-outline hover:text-white hover:bg-[#3A4256] w-full"
              type="submit">
              Continue With Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
