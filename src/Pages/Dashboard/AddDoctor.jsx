import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';
import Title from '../Title/Title';

const AddDoctor = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgStorageKey = '38c11282e9730e96bcbadae736068ef6';

  const { data: services, isLoading } = useQuery('services', () =>
    fetch(`https://gentle-plains-18586.herokuapp.com/service`).then((res) =>
      res.json()
    )
  );

  const onSubmit = async ({ image, name, email, specialty }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', image[0]);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(({ data, success }) => {
        if (success) {
          const img = data.url;
          const doctor = { name, email, specialty, image: img };
          fetch('https://gentle-plains-18586.herokuapp.com/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then(({ insertedId }) => {
              if (insertedId) {
                toast.success('Doctor profile was created successfully!');
                setLoading(false);
                reset();
              } else {
                toast.error('Failed to add the doctor!');
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Title title="Add Doctor" />
      <div className="flex justify-center items-center h-96 mt-20">
        <form
          className="w-1/4 shadow-md px-10 rounded-md py-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-semibold">Add doctor</h2>
          <div className="w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className={`input input-bordered w-full max-w-xs ${
                errors?.name?.message ? 'input-error' : ''
              }`}
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is required!',
                },
                pattern: {
                  value: /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
                  message: 'Name must be of atleast 4 characters',
                },
              })}
            />
            <label className="label">
              {errors.name?.type === 'required' && (
                <span className="label-text-alt text-red-600">
                  {errors?.name?.message}
                </span>
              )}
            </label>
            <p>
              {errors.name?.type === 'pattern' && (
                <span className="label-text-alt text-red-600">
                  {errors?.name?.message}
                </span>
              )}
            </p>
          </div>
          {/* Email field Start */}
          <div className="w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className={`input input-bordered w-full max-w-xs ${
                errors?.email?.message ? 'input-error' : ''
              }`}
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email address required!',
                },
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Provide a valid email',
                },
              })}
            />
            <label className="label">
              {errors.email?.type === 'required' && (
                <span className="label-text-alt text-red-600">
                  {errors?.email?.message}
                </span>
              )}
            </label>
            <p>
              {errors.email?.type === 'pattern' && (
                <span className="label-text-alt text-red-600">
                  {errors?.email?.message}
                </span>
              )}
            </p>
          </div>
          {/* Email field end */}
          <div className="w-full max-w-xs">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register('specialty')}
              className="select w-full input-bordered my-4 max-w-xs"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full max-w-xs py-2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              className={`input ml-[-15px] w-full max-w-xs ${
                errors?.image?.message ? 'input-error' : ''
              }`}
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is required!',
                },
              })}
            />
            <label className="label">
              {errors.image?.type === 'required' && (
                <span className="label-text-alt text-red-600">
                  {errors?.image?.message}
                </span>
              )}
            </label>
          </div>

          <button
            disabled={loading}
            className={`btn w-full max-w-xs text-white ${loading && 'loading'}`}
            type="submit"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
