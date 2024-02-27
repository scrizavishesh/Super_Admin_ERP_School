import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// ## style css area start ####  

const Container = styled.div`
  .breadcrum-li a{
  text-decoration: none;
  margin-top: 5px;
  color: #008479;
  }
  .main-body{
    background-color: #F2F3F6;
    
  }
  .main-content-conatainer{
    background-color: #fff;
    margin: 10px;
    border-radius: 15px;
    height: 100vh;
    box-shadow: 0px 2px 4px rgba(0, 0, 20, 0.08), 0px 1px 2px rgba(0, 0, 20, 0.08);
}
.form-focus:focus{
    color: #212529 !important;
    background-color: #fff !important; 
    border-color: transparent !important;
    outline: none !important;
    box-shadow: none  !important;
}
.margin-minus22{
    margin-top: -18px;
    font-size: 16px;
}
.my-div{
    border: 1px solid #E4E7EB ;
    border-radius: 10px;
}
.second-border{
    padding: 14px;
    border: 1px solid #000000 ;
    border-radius: 10px;
    font-size: 14px;
}
.my-hover-effect p:hover{
    border: 0.5px solid #000000;
    padding: 8px;
    border-radius: 4px;
}
.my-grp-btn{
    margin-top: -2px;
    height: 32px;
}
.my-grp-btn img{
    width: 18px;
    margin-top: -10px;
}
  /* ########## media query ###########  */
  @media only screen and (max-width: 605px) {
    .for-dislay-direction{
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
    }

}
`;
// ## style css area end ####  

const ManageFaq = () => {
  return (
   <Container>
     <div className="container-fluid main-body p-3">
    <div className='d-flex justify-content-between for-dislay-direction'>
    <div className="breadCrum ms-2">
    <nav style={{ '--bs-breadcrumb-divider': "'>'" }}aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
            <li class="breadcrumb-item active" aria-current="page">Setting</li>
            <li class="breadcrumb-item breadcrum-li" ><Link href="#">Manage Faq</Link></li>
        </ol>
    </nav>
    </div>
    <div className='me-2'>
        <div class="input-group mb-3 ">
            <input type="text" class="form-control " style={{height:'34px'}} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span class="input-group-text " style={{background:'#008479', color:'#fff', cursor:'pointer',height:"34px", fontSize:'14px'}} id="basic-addon2">Search</span>
        </div>
    </div>
    </div>
    <h5 className='ms-2 margin-minus22'>Manage Faq </h5>

    <div className="main-content-conatainer pt-1 ">
            {/* ###### copy content till here for all component ######  */}

        <div className="first-border my-div mx-3 mt-3">
    
            <div className='d-flex justify-content-between  '>
                <div className='ps-3 pt-3'>
                    <p>What is Scriza School ERP?</p>
                </div>
                    <div class="btn-group my-grp-btn" role="group" aria-label="Basic example" >
                        <button type="button" class="btn btn-primary" style={{backgroundColor:'#008479', border:'1px solid #008479', borderRadius:'0%',}}>
                            <img src="./images/Vector.svg" alt="" />
                        </button>
                        <button type="button" class="btn btn-primary"  style={{backgroundColor:'#008479', border:'1px solid #008479', borderRadius:'0px 8px 0px 0px  ',}}>
                        <img src="./images/Expanded.svg" alt="" />
                        </button>
                    </div>
            </div>

            <div className=" mx-3  pb-3 my-hover-effect" style={{fontSize:'14px'}}>
            <p>School ERP is a collection of programs designed to assist schools in administering their executive responsibilities on a day-to-day basis. School ERP is an updated version of School ERP ERP (Enterprise Resource Planning). Also, School ERP 8 is designed for SAAS (Software as a Service) projects.</p>  
            </div>

        </div>

        <div className="first-border my-div mx-3 mt-3">
        
            <div className='d-flex justify-content-between  '>
                <div className='ps-3 pt-3'>
                    <p>How can I get developed my customer features?</p>
                </div>
                    <div class="btn-group my-grp-btn" role="group" aria-label="Basic example" >
                        <button type="button" class="btn btn-primary" style={{backgroundColor:'#008479', border:'1px solid #008479', borderRadius:'0%',}}>
                            <img src="./images/Group 60.svg" alt="" />
                        </button>
                        <button type="button" class="btn btn-primary"  style={{backgroundColor:'#008479', border:'1px solid #008479', borderRadius:'0px 8px 0px 0px  ',}}>
                        <img src="./images/Expanded.svg" alt="" />
                        </button>
                    </div>
            </div>

            <div className=" mx-3 my-hover-effect" style={{fontSize:'14px'}}>
                <p>Custom features do not coming with product support. You can contact our support center and send us details about your requirement. If our schedule is open, we can give you a quotation and take your project according to the contract.</p>
            </div>

        </div>

        <div className="first-border my-div mx-3 mt-3">
        
            <div className='d-flex justify-content-between  '>
                <div className='ps-3 pt-3'>
                    <p>Which license to choose for my client project?</p>
                </div>
                    <div class="btn-group my-grp-btn" role="group" aria-label="Basic example" >
                        <button type="button" class="btn btn-primary" style={{backgroundColor:'#008479', border:'1px solid #008479', borderRadius:'0%',}}>
                            <img src="./images/Group 60.svg" alt="" />
                        </button>
                        <button type="button" class="btn btn-primary"  style={{backgroundColor:'#008479', border:'1px solid #008479', borderRadius:'0px 8px 0px 0px  ',}}>
                        <img src="./images/Expanded.svg" alt="" />
                        </button>
                    </div>
            </div>

            <div className=" mx-3 my-hover-effect" style={{fontSize:'14px'}}>
            <p>If you use academy LMS for a commercial project of a client, you will be required extended license.</p>     
            </div>

        </div>

        <div className="first-border my-div mx-3 mt-3 ">
        
        <div className='d-flex justify-content-between '>
            <div className='ps-3 pt-3'>
                <p>How much time will I get developer support?</p>
            </div>
                <div class="btn-group my-grp-btn" role="group" aria-label="Basic example" >
                    <button type="button" class="btn btn-primary" style={{backgroundColor:'#008479', border:'1px solid #008479', borderRadius:'0%',}}>
                        <img src="./images/Group 60.svg" alt="" />
                    </button>
                    <button type="button" class="btn btn-primary"  style={{backgroundColor:'#008479', border:'1px solid #008479', borderRadius:'0px 8px 0px 0px  ',}}>
                    <img src="./images/Expanded.svg" alt="" />
                    </button>
                </div>
        </div>

        <div className=" mx-3 my-hover-effect" style={{fontSize:'14px'}}>
        <p>By default, you are entitled to developer support for 6 months from the date of your purchase. Later on anytime you can renew the support pack if you need developer support. If you don’t need any developer support, you don’t need to buy it.</p>     
        </div>

        </div>

    </div>


    </div>
   </Container>
  )
}

export default ManageFaq
