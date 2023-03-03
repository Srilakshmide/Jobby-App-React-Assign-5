// import {AiFillStar} from 'react-icons/ai'
// import {BsBriefcaseFill} from 'react-icons/bs'
// import {GoLocation} from 'react-icons/go'
// import './index.css'

// const SimilarJobItem = props => {
//   const {jobDetails} = props
//   const {
//     companyLogoUrl,
//     employmentType,
//     jobDescription,
//     location,
//     title,
//     rating,
//   } = jobDetails

//   return (
//     <li className="similar-list-docs">
//       <div className="logo-container">
//         <img
//           src={companyLogoUrl}
//           alt="similar job company logo"
//           className="company-logo-url"
//         />
//         <div>
//           <h1 className="company-logo-title">{title}</h1>
//           <div className="rating-container">
//             <AiFillStar className="star-icon" />
//             <p className="count-rating">{rating}</p>
//           </div>
//         </div>
//       </div>
//       <h1 className="similar-desc-heading">Description</h1>
//       <p className="similar-desc">{jobDescription}</p>
//       <div className="location-container-flex-justify">
//         <div className="responsive">
//           <GoLocation className="location-logo" />
//           <p className="location-desc">{location}</p>
//         </div>
//         <div className="responsive">
//           <BsBriefcaseFill className="location-logo-brief" />
//           <p className="location-desc">{employmentType}</p>
//         </div>
//       </div>
//     </li>
//   )
// }

// export default SimilarJobItem

import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import './index.css'

const SimilarJobItem = props => {
  const {eachSimilarJob} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = eachSimilarJob

  return (
    <div className="similar-job-card">
      <div className="logo-container">
        <img
          alt="similar job company logo"
          className="company-logo"
          src={companyLogoUrl}
        />
        <div>
          <h1 className="title-heading">{title}</h1>
          <div className="rating-container">
            <AiFillStar className="star-icon" />
            <p className="rating">{rating}</p>
          </div>
        </div>
      </div>

      <hr className="line" />
      <h1 className="similar-job-description-head">Description</h1>
      <p className="description-paragraph">{jobDescription}</p>
      <div className="location-employment-container">
        <div className="location-container">
          <IoLocationSharp className="location-icon" />
          <p className="location">{location}</p>
        </div>

        <div className="location-container">
          <BsFillBriefcaseFill className="bag-icon" />
          <p className="employment-type">{employmentType}</p>
        </div>
      </div>
    </div>
  )
}

export default SimilarJobItem
