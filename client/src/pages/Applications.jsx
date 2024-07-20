import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JobCard from '../components/JobCard';

const Applications = () => {
  const { user } = useSelector((state) => state.user);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    const userApplications = applications.filter(app => app.userId === user?._id);
    setAppliedJobs(userApplications);
  }, [user]);

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6 text-gray-800'>Applied Jobs</h1>
      <div className='w-full flex flex-wrap gap-4'>
        {appliedJobs.length > 0 ? (
          appliedJobs.map((job, index) => {
            const data = {
                name: job?.company.name,
                logo: job?.company.profileUrl,
                ...job,
            };
            return <JobCard key={index} job={data} />
            })
        ) : (
          <p>No jobs applied yet.</p>
        )}

      </div>
    </div>
  );
};

export default Applications;
