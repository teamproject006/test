import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Version() {
  return (
    <MDBFooter style={{ backgroundColor: 'rgb(254, 242, 244)' }} className='text-center text-lg-start text-muted'   >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: 'rgb(254, 242, 244)' }}>
        <div className='me-5 d-none d-lg-block'>
         
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''  style={{ backgroundColor: 'rgb(254, 242, 244)' }}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
              Farhni 
              </h6>
              <p>
              Your wedding team and everything in between.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Service </h6>
              <p>
                <a href='#!' className='text-reset' >
                 Room Party
              </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Wedding Dress & Suit
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                   Hairdressing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Wedding Cars 
                </a>
              </p>

                <p>
                <a href='#!' className='text-reset'>
                       Florist </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our partners</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Maison Fondant
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Flora
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Glof Carthage 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Cite Ghazella, Ariana, Tunisia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Farhni@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 216 71 858 585
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 216 71 858 585
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgb(254, 242, 244)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' >
          Farhni.tn
        </a>
      </div>
    </MDBFooter>
  );
}