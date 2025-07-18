import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

type JobType = {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
};

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<JobType | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await API.get(`/jobs/${id}`);
        setJob(res.data);
      } catch (err) {
        console.error("Error fetching job:", err);
      }
    };
    fetchJob();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post("/applications", {
        ...formData,
        jobId: job?._id,
      });
      alert("Application submitted!");
    } catch (err) {
      console.error("Failed to submit application:", err);
    }
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Type:</strong> {job.type}</p>

      <form onSubmit={handleSubmit}>
        <h3>Apply Now</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="resume"
          placeholder="Resume Link"
          value={formData.resume}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobPage;
