import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import './Footer.css';

export default function Version() {
  return (
    <MDBFooter className='custom-footer'>
      <section className='custom-footer-section'>
        <div className='custom-footer-social-icons'>
          <a href='/' className='custom-footer-icon'>
            <MDBIcon fab icon='facebook-f' />
          </a>
          <a href='/' className='custom-footer-icon'>
            <MDBIcon fab icon='twitter' />
          </a>
          <a href='/' className='custom-footer-icon'>
            <MDBIcon fab icon='google' />
          </a>
          <a href='/' className='custom-footer-icon'>
            <MDBIcon fab icon='instagram' />
          </a>
          <a href='/' className='custom-footer-icon'>
            <MDBIcon fab icon='linkedin' />
          </a>
          <a href='/' className='custom-footer-icon'>
            <MDBIcon fab icon='github' />
          </a>
        </div>
      </section>

      <section className='custom-footer-section custom-footer-content-section'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='3' lg='4' xl='3' className='mb-4'>
              <h6 className='custom-footer-heading'>
                <MDBIcon icon='gem' className='me-2' />
                Farhni
              </h6>
              <p className='custom-footer-text'>
                Your wedding team and everything in between.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mb-4'>
              <h6 className='custom-footer-heading'>Our Services</h6>
              <ul className='custom-footer-list'>
                <li>
                  <a href='/' className='custom-footer-link'>
                    Room Party
                  </a>
                </li>
                <li>
                  <a href='/' className='custom-footer-link'>
                    Wedding Dress & Suit
                  </a>
                </li>
                <li>
                  <a href='/' className='custom-footer-link'>
                    Hairdressing
                  </a>
                </li>
                <li>
                  <a href='/' className='custom-footer-link'>
                    Wedding Cars
                  </a>
                </li>
                <li>
                  <a href='/' className='custom-footer-link'>
                    Florist
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mb-4'>
              <h6 className='custom-footer-heading'>Our Partners</h6>
              <ul className='custom-footer-list'>
                <li>
                  <a href='/' className='custom-footer-link'>
                    Maison Fondant
                  </a>
                </li>
                <li>
                  <a href='/' className='custom-footer-link'>
                    Flora
                  </a>
                </li>
                <li>
                  <a href='/' className='custom-footer-link'>
                    Glof Carthage
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mb-4'>
              <h6 className='custom-footer-heading'>Contact</h6>
              <ul className='custom-footer-contact-list'>
                <li>
                  <MDBIcon icon='home' className='me-2' />
                  Cite Ghazella, Ariana, Tunisia
                </li>
                <li>
                  <MDBIcon icon='envelope' className='me-2' />
                  Farhni@gmail.com
                </li>
                <li>
                  <MDBIcon icon='phone' className='me-2' />
                  +216 71 858 585
                </li>
                <li>
                  <MDBIcon icon='print' className='me-2' />
                  +216 71 858 585
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='custom-footer-bottom'>
        <p className='custom-footer-bottom-text'>
          © 2023 Farhni.tn. All rights reserved.
        </p>
      </div>
    </MDBFooter>
  );
}
