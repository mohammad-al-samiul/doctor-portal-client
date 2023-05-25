import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Spinner from '../../../Components/Button/Spinner/Spinner';

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const handleAddDoctor = (data) => {
    console.log(data);
  };

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentSpecialty`);
      const data = await res.json();
      return data;
    }
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-96">
      <form onSubmit={handleSubmit(handleAddDoctor)}>
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
        <div>
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register('specialty', { required: 'Specialty is required' })}
            className="select select-bordered w-full font-normal ">
            {specialties.map((specialty) => (
              <option key={specialty._id} defaultValue={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full"
            {...register('image', { required: 'Image is required' })}
          />
          {errors.image && <p className="text-red-600">{errors.image?.message}</p>}
        </div>

        <button className="mt-3 btn btn-primary w-full text-white">Register</button>
      </form>
    </div>
  );
};

export default AddDoctor;
