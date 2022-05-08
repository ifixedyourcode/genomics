import Banner from './images/AnimeBanner.gif'
import { FaMapPin } from 'react-icons/fa'
import { FaHourglassHalf } from 'react-icons/fa'
import { FaHandHoldingMedical } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-warning navbar-dark py-3 fixed-top  ">
        <div className="container">
          <a href="#" className="navbar-brand">
            CORNERSTONE GENOMICS
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#learn" className="nav-link text-white">
                  NEWS
                </a>
              </li>
              <li className="nav-item ">
                <a href="#questions" className="nav-link text-white">
                  TEAM
                </a>
              </li>
              <li className="nav-item ">
                <a href="#instructors" className="nav-link text-white">
                  CAREER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-dark text-light text-center text-sm-start background-main  ">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between   ">
            <div>
              <h1 className="text-dark">
                Finding answers to disease
                <span className="text-info"> can’t wait.</span>
              </h1>
              <p className="lead my-4 text-dark">
                Digital tools that dramatically accelerate research in human and
                wildlife biology.
              </p>
              <button
                className="btn btn-warning btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Learn More
              </button>
            </div>
            <img src={Banner} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-primary p-2 text-center">
        <div className="container">
          <h4>Early support comes from the National Science Foundation.</h4>
        </div>
      </section>

      <section className="bg-white text-dark text-center shadow-lg Pad50 ">
        <div className="container ">
          <h1 className="text-center">
            Innovative science, informed by nature.
          </h1>
          <p className="lead ">
            Cornerstone Genomics is developing CodeXome ®: a cloud-platform with
            novel datasets and toolkits to enhance the discovery of answers for
            biomedicine and wildlife conservation researchers.
          </p>
          <div className="d-sm-flex align-items-center justify-content-between m-4  ">
            <div className="outline p-sm-2 mx-sm-2 text-warning my-5 shadow">
              <h1 className='pt-2'>
                <FaMapPin />
              </h1>
              <h1>Accurate</h1>
              <p className="px-4">
                Proprietary tools facilitate a precise and refined list of
                biologically meaningful targets. Map how genes change while
                retaining function.
              </p>
            </div>
            <div className="outline p-sm-2 mx-sm-2 text-warning my-5 shadow">
              <h1 className='pt-2'>
                <FaHourglassHalf />
              </h1>
              <h1>Fast</h1>
              <p className="px-4">
                Breakthrough technology cuts through dense, noisy data quickly
                to let you complete genome analysis in record time.
              </p>
            </div>
            <div className="outline p-sm-2 mx-sm-2 text-warning my-5 shadow">
              <h1 className='pt-2'>
                <FaHandHoldingMedical />
              </h1>
              <h1>Actionable</h1>
              <p className="px-4">
                With a curated set of results at your fingertips, you can get to
                work on finding the answers to genomics questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary">
        <div className="container">
          <div className="d-flex justify-content-between text-sm-left">
            <div>
              <p className="lead  ">A Woman-Owned Small Business</p>
              <p className="w-50 ">
                In early 2023, Cornerstone Genomics will launch the digital
                tools that dramatically accelerate wildlife and human biology
                research. Because finding answers to disease can’t wait.
              </p>
            </div>
            <div>
              <a href="#" className="nav-link text-warning ">
                About
              </a>
              <a href="#" className="nav-link text-warning">
                Contact
              </a>
            </div>
          </div>
          <p className=" lead text-center">
            Copyright © 2022 - All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
