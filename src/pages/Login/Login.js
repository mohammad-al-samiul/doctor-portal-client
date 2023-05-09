import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full mt-8 flex justify-center items-center">
      <div className="shadow-2xl w-96  p-8 rounded-xl">
        <h3 className="text-center text-xl font-bold pb-8">Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register('email', { required: 'Email Address is required' })}
              type="text"
              className="input input-bordered w-full "
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be 6 characters' }
              })}
              type="text"
              className="input input-bordered w-full "
            />
            <label className="label">
              <Link className="label-text hover:underline">Fogot Password?</Link>
            </label>
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
          </div>

          <div className="">
            <button className="mt-4 btn text-white btn-primary  w-full" type="submit">
              Login
            </button>
          </div>
          <label className="label text-center">
            <span className="mx-auto mt-2 label-text ">
              New to Doctors Portal?{' '}
              <Link className="text-secondary hover:underline bold" to="/register">
                Create New Account
              </Link>
            </span>
          </label>
          <div className="divider">OR</div>
          <div>
            <button
              className="mt-4 btn  btn-outline hover:text-white hover:bg-[#3A4256] w-full"
              type="submit">
              Continue With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
