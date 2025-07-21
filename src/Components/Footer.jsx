import React from 'react'

const footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-md-3 mb-4">
            <h5 className="text-info mb-3">NewsBoard</h5>
            <p>
              From politics to sports, we bring you the latest headlines.
              Updated hourly. Delivered with clarity.
              Made for readers who care about real news.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="text-info mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Categories</a></li>
              <li><a href="#" className="text-light text-decoration-none">Search</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="text-info mb-3">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://www.facebook.com/profile.php?id=100010763266353" className="text-light fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/sandeep._saini._" className="text-light fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/sandeepsaini123001" className="text-light fs-5" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="text-info mb-3">Developers</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/Sandeepsaini123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  GitHub 
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center mt-3">
  <small>
    &copy; {new Date().getFullYear()} NewsBoard. Built with React &amp; NewsAPI.
  </small>
  <br />
 <small className="text-light">
  Developed by Sandeep Saini
</small>
</div>

      </div>
    </footer>
  )
}

export default footer
