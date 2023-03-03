// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import {AiFillStar} from 'react-icons/ai'
// import {GoLocation} from 'react-icons/go'
// import {BsBriefcaseFill} from 'react-icons/bs'
// import {BiLinkExternal} from 'react-icons/bi'
// import Loader from 'react-loader-spinner'

// import SkillsCard from '../SkillsCard'
// import Header from '../Header'
// import SimilarJobItem from '../SimilarJobItem'
// import './index.css'

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   inProgress: 'INPROGRESS',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
// }

// class JobItemDetails extends Component {
//   state = {
//     jobItemList: {},
//     similarJobItemList: [],
//     apiStatus: apiStatusConstants.initial,
//   }

//   componentDidMount() {
//     this.getJobItem()
//   }

//   getFormattedSkillData = data => ({
//     companyLogoUrl: data.company_logo_url,
//     employmentType: data.employment_type,
//     jobDescription: data.job_description,
//     id: data.id,
//     rating: data.rating,
//     location: data.location,
//     title: data.title,
//   })

//   getFormattedData = data => ({
//     companyLogoUrl: data.company_logo_url,
//     companyWebsiteUrl: data.company_website_url,
//     employmentType: data.employment_type,
//     id: data.id,
//     jobDescription: data.job_description,
//     lifeAtCompany: {
//       description: data.life_at_company.description,
//       imageUrl: data.life_at_company.image_url,
//     },
//     location: data.location,
//     rating: data.rating,
//     title: data.title,
//     packagePerAnnum: data.package_per_annum,
//     skills: data.skills.map(eachSkill => ({
//       imageUrl: eachSkill.image_url,
//       name: eachSkill.name,
//     })),
//   })

//   getJobItem = async () => {
//     this.setState({
//       apiStatus: apiStatusConstants.inProgress,
//     })
//     const {match} = this.props
//     const {params} = match
//     const {id} = params

//     const jwtToken = Cookies.get('jwt_token')
//     const url = `https://apis.ccbp.in/jobs/${id}`
//     const options = {
//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//       method: 'GET',
//     }
//     const response = await fetch(url, options)
//     if (response.ok === true) {
//       const data = await response.json()
//       const updatedData = this.getFormattedData(data.job_details)
//       const updatedSkillData = data.similar_jobs.map(eachSimilarJob =>
//         this.getFormattedSkillData(eachSimilarJob),
//       )
//       console.log(updatedData)
//       console.log(updatedSkillData)
//       this.setState({
//         jobItemList: updatedData,
//         similarJobItemList: updatedSkillData,
//         apiStatus: apiStatusConstants.success,
//       })
//     } else {
//       this.setState({
//         apiStatus: apiStatusConstants.failure,
//       })
//     }
//   }

//   renderJobItemDetails = () => {
//     const {jobItemList, similarJobItemList} = this.state
//     const {
//       companyLogoUrl,
//       companyWebsiteUrl,
//       employmentType,
//       jobDescription,
//       location,
//       title,
//       rating,
//       packagePerAnnum,
//       lifeAtCompany,
//       skills,
//     } = jobItemList
//     const {description, imageUrl} = lifeAtCompany

//     return (
//       <div className="full-job-item-container">
//         <div className="job-items-container">
//           <div className="logo-image-container">
//             <img
//               src={companyLogoUrl}
//               alt="job details company logo"
//               className="company-logo-justify"
//             />
//             <div className="title-container">
//               <h1 className="company-title-head">{title}</h1>
//               <div className="rating-container">
//                 <AiFillStar className="star-icon" />
//                 <p className="count-rating">{rating}</p>
//               </div>
//             </div>
//           </div>
//           <div className="location-type-salary-container">
//             <div className="location-container">
//               <div className="responsive">
//                 <GoLocation className="location-logo" />
//                 <p className="location-desc">{location}</p>
//               </div>
//               <div className="responsive">
//                 <BsBriefcaseFill className="location-logo-brief" />
//                 <p className="location-desc">{employmentType}</p>
//               </div>
//             </div>
//             <p className="package-desc">{packagePerAnnum}</p>
//           </div>
//           <hr className="line" />
//           <div className="description-container">
//             <h1 className="desc-heading">Description</h1>
//             <a className="visit-link" href={companyWebsiteUrl}>
//               Visit
//               <BiLinkExternal className="bi-link" />
//             </a>
//           </div>
//           <p className="job-story-desc">{jobDescription}</p>
//           <h1 className="skill-heading">Skills</h1>
//           <ul className="skill-container">
//             {skills.map(eachSkill => (
//               <SkillsCard key={eachSkill.id} skillDetails={eachSkill} />
//             ))}
//           </ul>
//           <h1 className="life-company-heading">Life at company</h1>
//           <div className="life-at-company-container">
//             <p className="life-company-desc">{description}</p>
//             <img
//               src={imageUrl}
//               alt="life at company"
//               className="company-logo"
//             />
//           </div>
//         </div>
//         <h1 className="similar-job-heading">Similar Jobs</h1>
//         <ul className="similar-cards">
//           {similarJobItemList.map(eachItem => (
//             <SimilarJobItem key={eachItem.id} jobDetails={eachItem} />
//           ))}
//         </ul>
//       </div>
//     )
//   }

//   renderFailureView = () => (
//     <div className="render-loading-view">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
//         alt="failure view"
//         className="failure-view"
//       />
//       <h1 className="failure-heading">Oops! Something Went Wrong </h1>
//       <p className="failure-desc">
//         We cannot seem to find the page you are looking for
//       </p>
//       <button
//         type="button"
//         data-testid="button"
//         className="job-item-failure-button"
//         onClick={this.getJobItem}
//       >
//         Retry
//       </button>
//     </div>
//   )

//   renderLoadingView = () => (
//     <div className="profile-loader-container" data-testid="loader">
//       <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
//     </div>
//   )

//   renderJobViews = () => {
//     const {apiStatus} = this.state

//     switch (apiStatus) {
//       case apiStatusConstants.success:
//         return this.renderJobItemDetails()
//       case apiStatusConstants.inProgress:
//         return this.renderLoadingView()
//       case apiStatusConstants.failure:
//         return this.renderFailureView()
//       default:
//         return null
//     }
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         <div className="get-products-details-container">
//           {this.renderJobViews()}
//         </div>
//       </>
//     )
//   }
// }

// export default JobItemDetails

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import EachJobDetails from '../EachJobDetails'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobItemDetails extends Component {
  state = {
    jobDetailsList: {},
    similarJobsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getJobDetails()
  }

  formattedData = data => ({
    id: data.id,
    companyLogoUrl: data.company_logo_url,
    companyWebsiteUrl: data.company_website_url,
    employmentType: data.employment_type,
    jobDescription: data.job_description,
    lifeAtCompany: data.life_at_company,
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
    skills: data.skills.map(eachItem => ({
      name: eachItem.name,
      imageUrl: eachItem.image_url,
    })),
    title: data.title,
  })

  formattedSimilarData = eachItem => ({
    id: eachItem.id,
    companyLogoUrl: eachItem.company_logo_url,
    employmentType: eachItem.employment_type,
    jobDescription: eachItem.job_description,
    location: eachItem.location,
    rating: eachItem.rating,
    title: eachItem.title,
  })

  getJobDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const jobDetailsApiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(jobDetailsApiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = this.formattedData(fetchedData.job_details)
      const updatedSimilarJobDetails = fetchedData.similar_jobs.map(eachItem =>
        this.formattedSimilarData(eachItem),
      )

      this.setState({
        jobDetailsList: updatedData,
        similarJobsList: updatedSimilarJobDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  retryJobItemDetails = () => this.getJobDetails()

  renderFailureView = () => (
    <div>
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button onClick={this.retryJobItemDetails} className="btn" type="button">
        Retry
      </button>
    </div>
  )

  renderSuccessView = () => {
    const {jobDetailsList, similarJobsList} = this.state

    return (
      <EachJobDetails
        jobDetailsList={jobDetailsList}
        similarJobsList={similarJobsList}
      />
    )
  }

  renderJobDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="job-deta-container">
        <Header />
        <div className="job-details">{this.renderJobDetails()}</div>
      </div>
    )
  }
}

export default JobItemDetails
