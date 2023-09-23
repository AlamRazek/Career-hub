import { MdLocationPin } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] ml-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex ">
          <h2 className="flex my-4">
            <MdLocationPin className="text-2xl mr-2"></MdLocationPin> {location}
          </h2>
          <h2 className="flex my-4 ml-5">
            <AiFillDollarCircle className="text-2xl mr-2"></AiFillDollarCircle>
            {salary}
          </h2>
        </div>
        <Link to={`/job/${id}`}>
          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Job;
