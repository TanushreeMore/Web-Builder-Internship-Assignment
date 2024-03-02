import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start">

      <section className="bg-dark text-white pt-1">
        <div className="row mt-3">

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Categories</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto bg-secondary  mt-2" style={{ height: '2px', width: '60%' }} />
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              className="f-links text-white">Web Builder</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              className="f-links text-white">Hosting</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              className="f-links text-white">Data Center</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              className="f-links text-white">Robotic-Automation</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto bg-secondary  mt-2" style={{ height: '2px', width: '60%' }} />
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              className="f-links text-white">Contact</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              className="f-links text-white">Privacy Policy</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              className="f-links text-white">Terms Of Service</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              className="f-links text-white">Categories</a>
            </p>
            <p>
              {/* eslint-disable-next-line */}
              <a href="#"
              className="f-links text-white">About</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5 pt-5">
            <h5 className="text-uppercase fw-bold">
              United States 
              <span><KeyboardArrowDownIcon /></span>
            </h5>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
          </div>

        </div>
      </section>

    </footer>
  );
};

export default Footer;
