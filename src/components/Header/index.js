// import Cookies from 'js-cookie'
// import {withRouter, Link} from 'react-router-dom'
// import './index.css'

// const Header = props => {
//   const onClickLogout = () => {
//     const {history} = props
//     Cookies.remove('jwt_token')
//     history.replace('/login')
//   }

//   return (
//     <nav className="navbar-container">
//       <div>
//         <Link to="/" className="link-item">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
//             alt="website logo"
//             className="logo"
//           />
//         </Link>
//       </div>
//       <ul className="header-list-items">
//         <Link to="/" className="link-item">
//           <li className="home heading">Home</li>
//         </Link>
//         <Link to="/jobs" className="link-item">
//           <li className="heading home">Jobs</li>
//         </Link>
//       </ul>
//       <div>
//         <button type="button" className="logout-btn" onClick={onClickLogout}>
//           Logout
//         </button>
//       </div>
//     </nav>
//   )
// }

// export default withRouter(Header)

import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-content-for-desktop">
          <Link to="/" className="nav-link-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="nav-website-logo"
            />
          </Link>

          <ul className="nav-list-items">
            <Link to="/" className="nav-link-item">
              <li className="nav-list-item">Home</li>
            </Link>
            <Link to="/jobs" className="nav-link-item">
              <l1 className="nav-list-item">Jobs</l1>
            </Link>
          </ul>
          <div>
            <button
              type="button"
              className="logout-button"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="nav-for-mobile">
          <Link to="/" className="nav-link-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="nav-website-logo-mobile"
            />
          </Link>
          <ul className="nav-list-for-mobile">
            <Link to="/" className="nav-link-item">
              <li className="nav-list-item">
                <AiFillHome />
              </li>
            </Link>
            <Link to="/jobs" className="nav-link-item">
              <li className="nav-list-item">
                <BsFillBriefcaseFill />
              </li>
            </Link>
            <li className="nav-list-item" onClick={onClickLogout}>
              <FiLogOut />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
