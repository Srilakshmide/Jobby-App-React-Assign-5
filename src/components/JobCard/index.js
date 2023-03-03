// import {AiFillStar} from 'react-icons/ai'
// import {Link} from 'react-router-dom'
// import {HiLocationMarker, HiMail} from 'react-icons/hi'
// import './index.css'

// const JobCard = props => {
//   const {jobDetails} = props
//   const {
//     title,
//     companyLogoUrl,
//     rating,
//     employmentType,
//     location,
//     id,
//     packagePerAnnum,
//     jobDescription,
//   } = jobDetails

//   return (
//     <Link to={`/jobs/${id}`} className="link-item">
//       <li className="job-list-items">
//         <div className="company-container">
//           <div>
//             <img src={companyLogoUrl} alt="company logo" className="logo-url" />
//           </div>
//           <div>
//             <h1 className="company-title">{title}</h1>
//             <div className="star-icon-container">
//               <AiFillStar className="star-icon" />
//               <p className="rating-count">{rating}</p>
//             </div>
//           </div>
//         </div>
//         <div className="location-container-flex-content">
//           <div className="location-desc">
//             <div className="star-icon-container">
//               <HiLocationMarker className="location-icon" />
//               <p className="location-desc description">{location}</p>
//             </div>
//             <div className="star-icon-container">
//               <HiMail className="location-icon left-icon" />
//               <p className="emp-type description">{employmentType}</p>
//             </div>
//           </div>
//           <div className="star-icon-container">
//             <p className="package-desc description">{packagePerAnnum}</p>
//           </div>
//         </div>
//         <hr className="line" />
//         <h1 className="desc-heading">Description</h1>
//         <p className="job-description">{jobDescription}</p>
//       </li>
//     </Link>
//   )
// }

// export default JobCard

import {BsFillStarFill, BsBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {Link} from 'react-router-dom'
import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  return (
    <Link to={`/jobs/${jobDetails.id}`} className="nav-link-item">
      <li className="job-item-card">
        <div className="company-container">
          <img
            src={jobDetails.companyLogoUrl}
            className="company-logo"
            alt="company logo"
          />
          <div>
            <h1 className="company-title">{jobDetails.title}</h1>
            <div className="star-rating">
              <BsFillStarFill className="star" />
              <p className="rating">{jobDetails.rating}</p>
            </div>
          </div>
        </div>
        <div className="company-location-job-type-salary">
          <div className="company-location-job">
            <MdLocationOn className="location-icon" />
            <p className="location">{jobDetails.location}</p>
            <BsBriefcaseFill className="employment-type-icon" />
            <p className="employment-type">{jobDetails.employmentType}</p>
          </div>
          <p className="salary">{jobDetails.packagePerAnnum}</p>
        </div>
        <hr className="job-card-line" />
        <div>
          <h1 className="job-description">Description</h1>
          <p className="job-description-text">{jobDetails.jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobCard
