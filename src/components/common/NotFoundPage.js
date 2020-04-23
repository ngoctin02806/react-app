import React from 'react';
import '../../styles/NotFoundPage.css';

function NotFoundPage(props) {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{height: '100vh', backgroundColor: '#219aff'}}>
           <div className="d-flex align-items-center" style={{color: '#fff'}}>
               <div className="mr-2 page-404">404</div>
               <div className="not-found">NOT FOUND !</div>
           </div>
        </div>
    );
}

export default NotFoundPage;