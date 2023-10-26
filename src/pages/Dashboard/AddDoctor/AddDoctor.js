/* eslint-disable no-undef */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../Components/Button/Spinner/Spinner';

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_image_bb;
  // console.log(imageHostKey);
  const handleAddDoctor = (data) => {
    const photo = data.image[0];
    // console.log(photo);
    const formData = new FormData();
    formData.append('image', photo);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            photo: imgData.data.url
          };
          console.log(doctor);
          fetch(`https://doctors-portal-server-chi-seven.vercel.app/doctors`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                navigate('/dashboard/managedoctor');
              }
            });
        }
      });
  };

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-chi-seven.vercel.app/appointmentSpecialty`
      );
      const data = await res.json();
      return data;
    }
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="lg:w-96 px-8">
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

        <button className="mt-3 btn btn-primary w-full text-white">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
