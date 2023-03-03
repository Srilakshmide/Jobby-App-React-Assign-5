// import Cookies from 'js-cookie'
// import {Redirect, Link} from 'react-router-dom'
// import Header from '../Header'

// import './index.css'

// const Home = () => {
//   const jwtToken = Cookies.get('jwt_token')
//   if (jwtToken === undefined) {
//     return <Redirect to="/login" />
//   }

//   return (
//     <>
//       <Header />
//       <div className="home-container">
//         <div className="responsive-container">
//           <h1 className="main-heading">Find the Job that Fits Your Life</h1>
//           <p className="description">
//             Millions of people are searching for jobs, salary information,
//             company reviews. Find the job that fits your abilities and
//             potential.
//           </p>
//           <Link to="/jobs" className="link-item">
//             <button type="button" className="find-jobs-btn">
//               Find Jobs
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Home

import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <div className="home-content-bg">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>

          <p className="home-description">
            Millions of people are searching for jobs,salary information,
            company reviews.Find the job that fits your abilities and potential.
          </p>

          <Link to="/jobs" className="nav-link-item">
            <button type="button" className="find-jobs-btn">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default Home
