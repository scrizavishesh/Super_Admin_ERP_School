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
.main-content-conatainer22{
    background-color: #fff;
    margin: 10px;
    height: 85vh;
    border-radius: 8px;
}
.form-focus:focus {
    color: #212529 !important;
    background-color: #fff !important;
    border-color: transparent !important;
    outline: none !important;
    box-shadow: none !important;
}
.form-focus-input:focus {
    color: #212529 !important;
    background-color: #fff !important;
    border-color: 1px solid #ced4da !important;
    outline: none !important;
    box-shadow: none  !important;
}
.form-control:focus {
    border-color: #ced4da !important;
}
.form-select:focus {
    border-color: #ced4da !important;
}

.header-1{
    background-color: #E5F3F2;
    /* background-color: #4af1e6; */
    border-radius: 5px;
    margin-top: 15px;
}
.input-icon img{
    object-fit: cover;
    width: 18px;
    margin-left: 7px;
    margin-top: 2px;
}
.my-button11{
    display: flex;
    justify-content: center;
    gap: 4px;
}

.my-button11 button{
    border-radius: 5px;
  border: 1px solid #ababad;
  color: #000;
}
.my-button11 button:hover{
    background-color: #008479;
    color: #fff;
}
@media only screen and (max-width: 605px) {
    .for-dislay-direction{
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
    }

}
@media only screen and (max-width: 768px) {
    .for-media-margin{
       padding: 0px 14px 0px 14px  !important;
    }
    .media-margin-top{
        margin-top: 10px;
    }

}
`;
// ## style css area end ####  

const SystemSettin = () => {
  return (
   <Container>
     <div className="container-fluid main-body p-3">
    <div className='d-flex justify-content-between for-dislay-direction' >
    <div className="breadCrum ms-2">
    <nav style={{ '--bs-breadcrumb-divider': "'>'" }}aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
            <li class="breadcrumb-item active" aria-current="page">Setting</li>
            <li class="breadcrumb-item breadcrum-li" ><Link href="#">System Setting</Link></li>
        </ol>
    </nav>
    </div>
    <div className='me-2'>
        <div class="input-group mb-3 ">
            <input type="text" class="form-control form-focus" style={{height:'34px'}} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span class="input-group-text " style={{background:'#008479', color:'#fff', cursor:'pointer',height:"34px", fontSize:'14px'}} id="basic-addon2">Search</span>
        </div>
    </div>
    </div>
    <h5 className='ms-2 margin-minus22 heading-16'>System Setting</h5>

    <div className="main-content-conatainer22 pt-1 ">
            {/* ###### copy content till here for all component ######  */}

        <div className='d-flex gap-2 header-1  mx-3 '>
                <div className="input-icon">
                    <img src="./images/Group 59.svg" alt="" />
                </div>
                <div className='mt-1'>
                    <h6>System Settings</h6>
                </div>
        </div>

        <div className="row heading-14 media-margin-top" >
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="mb-3 ps-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">System Name</label>
                    <input type="email" class="form-control form-focus-input form-control-md heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter School Name" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="mb-3 pe-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">System Title</label>
                    <input type="email" class="form-control form-focus-input form-control-md heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter System Title" />
                </div>
            </div>
        </div>

        <div className="row heading-14" style={{marginTop:'-15px'}}>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="mb-3 ps-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">Navbar Title</label>
                    <input type="email" class="form-control form-focus-input form-control-md heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter Navbar Title" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="mb-3 pe-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">System Email</label>
                    <input type="email" class="form-control form-focus-input form-control-md heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter System Email" />
                </div>
            </div>
        </div>

        <div className="row heading-14" style={{marginTop:'-15px'}}>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="mb-3 ps-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                    <input type="email" class="form-control form-focus-input form-control-md heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter Phone Number" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="mb-3 pe-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">Fax</label>
                    <input type="email" class="form-control form-focus-input form-control-md heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Fax" />
                </div>
            </div>
        </div>

        <div className="row heading-14" style={{marginTop:'-15px'}}> 
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="mb-3 ps-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">Address</label>
                    <input type="email" class="form-control form-focus-input form-control-md  heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter Address" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="mb-3 pe-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1 " class="form-label ">Frontend View</label>
                    {/* <input type="email" class="form-control form-control-sm" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter Price Subtitle" /> */}
                    <select class="form-select form-focus-input form-select-md heading-14" aria-label="Default select example" style={{borderRadius:'5px', marginTop:'-5px'}} >
                        <option selected>Yes</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                     </select>
                </div>
            </div>
        </div>

        <div className="row heading-14" style={{marginTop:'-15px'}}>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="mb-3 ps-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">Timezone</label>
                    {/* <input type="email" class="form-control form-control-sm" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter Instagram Link" /> */}
                    <select class="form-select form-focus-input form-select-md  heading-14" aria-label="Default select example" style={{borderRadius:'5px', marginTop:'-5px'}} >
                        <option selected>YUTC/GMT +5:30</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                     </select>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="mb-3 pe-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">Footer Text</label>
                    <input type="email" class="form-control form-focus-input form-control-md   heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter Footer Text" />
                </div>
            </div>
        </div>

        <div className="row heading-14" style={{marginTop:'-15px'}}>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="mb-3 ps-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">Footer Link</label>
                    <input type="email" class="form-control form-focus-input form-control-md heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter Footer Link" />
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="mb-3 pe-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">Help Link</label>
                    <input type="email" class="form-control form-focus-input form-control-md heading-14" style={{borderRadius:'5px', marginTop:'-5px'}} id="exampleFormControlInput1" placeholder="Enter Help Link" />
                </div>
            </div>
        </div>

        <div className="row heading-14" style={{marginTop:'-15px'}}>
        <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="mb-3 ps-3 pt-2 for-media-margin">
                    <label for="exampleFormControlInput1" class="form-label">System Language</label>
                    <select class="form-select form-focus-input form-select-md heading-14" aria-label="Default select example" style={{borderRadius:'5px', marginTop:'-5px'}} >
                        <option selected>English</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                     </select>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-0 pe-4">
                <div class="mb-3 ps-3 pt-2  for-media-margin">
                <label for="formFileSm" class="form-label">Update Logo</label>
                <input class="form-control form-focus-input form-control-md  heading-14" style={{borderRadius:'5px', marginTop:'-5px'}}  id="formFileSm" type="file" />
                </div>
            </div>
         
        </div>

     {/* ####### buttons ######  */}
     
        <div className="row">
            <div className='my-button11 '>
            <button type="button" class="btn btn-outline-success">Submit</button>
            <button type="button" class="btn btn-outline-success">Cancel</button>
            </div>
        </div>

     </div>
    </div>
   </Container>
  )
}

export default SystemSettin
