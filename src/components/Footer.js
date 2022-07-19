import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>



            </section>


            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                This website is totally open source. You can use, modify and redistribute it under the terms of the <a href="https://github.com/adrien-wicht/profile/blob/main/LICENSE">GPL license</a>.
                {/* <a className='text-reset fw-bold' href='https://github.com/adrien-wicht/profile/blob/main/LICENSE'>
                    GNU GENERAL PUBLIC LICENSE
                </a> */}
            </div>
        </MDBFooter>
    );
}