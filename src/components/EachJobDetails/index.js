import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {BiLinkExternal} from 'react-icons/bi'
import {BsFillBriefcaseFill} from 'react-icons/bs'

import SkillsCard from '../SkillsCard'
import SimilarJobItem from '../SimilarJobItem'

import './index.css'

const EachJobDetails = props => {
  const {jobDetailsList, similarJobsList} = props
  const {
    companyLogoUrl,
    companyWebsiteUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    skills,
    lifeAtCompany,
  } = jobDetailsList

  return (
    <li>
      <div className="job-details-card">
        <div>
          <div className="web-site-logo-container">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="company-logo"
            />
            <div>
              <h1 className="title-heading ">{title}</h1>
              <div className="rating-container">
                <AiFillStar className="star" />
                <p className="rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-employment-type-container">
            <div className="employment-type-container">
              <IoLocationSharp className="location-icon" />
              <p className="location">{location}</p>
              <BsFillBriefcaseFill className="bag-icon" />
              <p className="employment-type">{employmentType}</p>
            </div>
            <p className="package">{packagePerAnnum}</p>
          </div>
          <hr className="line" />
          <div className="description-view-container">
            <h1 className="description">Description</h1>
            <a
              className="anchor-container"
              rel="noreferrer"
              target="_blank"
              href={companyWebsiteUrl}
            >
              <p className="visit">Visit </p>
              <BiLinkExternal className="visit-icon" />
            </a>
          </div>
          <p className="description-paragraph">{jobDescription}</p>
          <h1 className="skills-heading">Skills </h1>
          <ul className="skill-ul-container">
            {skills.map(eachItem => (
              <SkillsCard skillsItem={eachItem} key={eachItem.name} />
            ))}
          </ul>
          <h1 className="life-at-company-head">Life at Company </h1>
          <div className="life-at-container">
            <p className="description-paragraph">{lifeAtCompany.description}</p>
            <img alt="life at company" src={lifeAtCompany.image_url} />
          </div>
        </div>
      </div>
      <h1 className="similar-job-head">Similar Jobs </h1>
      <ul className="similar-jobs-container">
        {similarJobsList.map(eachItem => (
          <SimilarJobItem eachSimilarJob={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </li>
  )
}

export default EachJobDetails
