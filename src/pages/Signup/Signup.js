import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit } = useForm();
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
              <input type="text" className="input input-bordered w-full" {...register('name')} />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" className="input input-bordered w-full" {...register('email')} />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                {...register('password')}
              />
              <label className="label">
                <span className="label-text">
                  <Link className="hover:underline">Forgot Password?</Link>
                </span>
              </label>
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
