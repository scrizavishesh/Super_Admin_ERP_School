import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'


// ## style css area #### 

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
    box-shadow: 0px 2px 4px rgba(0, 0, 20, 0.08), 0px 1px 2px rgba(0, 0, 20, 0.08);
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
.form-select:focus {
    border-color: #ced4da !important;
}
.header-1{
    background-color: #E5F3F2;
    /* background-color: #4af1e6; */
    border-radius: 5px;
    margin-top: 15px;
}
.header-1 h6{
    margin-top: 2px;
}
.input-icon img{
    object-fit: cover;
    width: 18px;
    margin-left: 7px;
    margin-top: 4px;
}

.margin-minus{
    margin-top: -18px;
}
.margin-minus{
    font-size: 16px;
}
.forInput::placeholder{
    color: #ADADBD;
  }
.my-option{
    min-height: 3rem !important;
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





const PaymentSetting = () => {
    return (
        <Container>
            <div className="container-fluid main-body p-3">
                <div className='d-flex justify-content-between for-dislay-direction'>
                    <div className="breadCrum ms-2">
                        <nav style={{ '--bs-breadcrumb-divider': "'>'" }} aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page">Home</li>
                                <li class="breadcrumb-item active" aria-current="page">Setting</li>
                                <li class="breadcrumb-item breadcrum-li" ><Link href="#">Payment Settings</Link></li>
                            </ol>
                        </nav>
                    </div>
                    <div className='me-2'>
                        <div class="input-group mb-3 ">
                            <input type="text" class="form-control form-focus" style={{ height: '34px' }} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text " style={{ background: '#008479', color: '#fff', cursor: 'pointer', height: "34px", fontSize:'14px' }} id="basic-addon2">Search</span>
                        </div>
                    </div>
                </div>

                <h5 className='ms-2 margin-minus'>Payment Settings </h5>

                <div className="main-content-conatainer pt-1 ">

                    <div className='d-flex gap-2 header-1  mx-3'>
                        <div className="input-icon ">
                            <img src="./images/134157_money_cashier_dollar_currency_icon 1.svg" alt="" />
                        </div>
                        <div className='mt-1'>
                            <h6>Currency</h6>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-6 mx-3 mt-2">
                            <h6 className='size-1 heading-14'>Currency</h6>
                            <select class="form-select form-select-md form-focus-input forInput" style={{ color: '#ADADBD' }} aria-label="Small select example">
                                <option selected className='my-option'>USD</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <button type="button" class="btn btn-secondary mt-3" style={{ backgroundColor: '#008479' }}>Update Currency</button>

                        </div>
                    </div>

                    <div className='d-flex gap-2 header-1  mx-3 '>
                        <div className="input-icon">
                            <img src="./images/website.svg" alt="" />
                        </div>
                        <div className='mt-1'>
                            <h6>Offline Payment Instruction</h6>
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 heading-14">
                        <div className="col-6 ">
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Offline Payment Instruction Image/PDF</label>
                                <input class="form-control form-focus-input  form-select-md forInput" style={{ borderRadius: '5px', }} type="file" id="formFile" />
                                <button type="button" class="btn btn-secondary mt-3" style={{ backgroundColor: '#008479' }}>Submit</button>

                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Offline Payment Instruction</label>
                                <input type="email" class="form-control form-focus-input form-control-lg $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="You can make payments using your mobile banking number." />
                            </div>
                        </div>

                    </div>

                    <div className='d-flex gap-2 header-1  mx-3 '>
                        <div className="input-icon">
                            <img src="./images/367638_paypal_icon 1.svg" alt="" />
                        </div>
                        <div className='mt-1'>
                            <h6>Paypal settings</h6>
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 heading-14">
                        <div className="col-6 ">
                            <h6 className='size-1'>Active1</h6>
                            <select class="form-select form-select-md form-focus-input forInput" style={{ color: '#ADADBD' }} aria-label="Small select example">
                                <option selected >No</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-6 ">
                            <h6 className='size-1'>Active</h6>
                            <select class="form-select form-select-md form-focus-input forInput" style={{ color: '#ADADBD' }} aria-label="Small select example">
                                <option selected >Test</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>

                    <div className="row mt-2 mx-2  heading-14">
                        <div className="col-6 ">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Client ID (Sandbox)</label>
                                <input type="email" class="form-control form-focus-input form-select-lg  forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="snd_cl_id_xxxxxxxxxxxxx" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Client Secrect (Sandbox)</label>
                                <input type="email" class="form-control form-focus-input form-select-lg  forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="snd_cl_sid_xxxxxxxxxxxx" />
                            </div>
                        </div>
                    </div>

                    <div className="row  mx-2 heading-14" >
                        <div className="col-6 ">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Client ID (Live)</label>
                                <input type="email" class="form-control form-focus-input form-select-lg  forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="lv_cl_id_xxxxxxxxxxxxxxx" />
                                <button type="button" class="btn btn-secondary mt-3" style={{ backgroundColor: '#008479' }}>Update Paypal</button>

                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Client Secrect (Live)</label>
                                <input type="email" class="form-control form-focus-input form-select-lg  forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="lv_cl_sid_xxxxxxxxxxxxxx" />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex gap-2 header-1  mx-3 '>
                        <div className="input-icon">
                            <img src="./images/Group 64.svg" alt="" />
                        </div>
                        <div className='mt-1'>
                            <h6>Paytm settings</h6>
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 heading-14">  
                        <div className="col-6 ">
                            <h6 className='size-1'>Active</h6>
                            <select class="form-select form-select-md form-focus-input forInput" style={{ color: '#ADADBD' }} aria-label="Small select example">
                                <option selected >No</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-6 ">
                            <h6 className='size-1'>Active</h6>
                            <select class="form-select form-select-md form-focus-input forInput" style={{ color: '#ADADBD' }} aria-label="Small select example">
                                <option selected >Sandbox</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>

                    <div className="row mt-2 mx-2 heading-14">
                        <div className="col-6 ">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Test Public Key</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="pk_test_xxxxxxxxxxxxx" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Test Sectect Key</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="sk_test_xxxxxxxxxxxxxx" />
                            </div>
                        </div>
                    </div>

                    <div className="row  mx-2 heading-14" >
                        <div className="col-6 ">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Live Public Key</label>
                                <input type="email" class="form-control form-focus-input form-select-md  $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="pk_live_xxxxxxxxxxxxxx" />
                                <button type="button" class="btn btn-secondary mt-3" style={{ backgroundColor: '#008479' }}>Update Stripe</button>

                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Live Secrect Key</label>
                                <input type="email" class="form-control form-focus-input  form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="sk_live_xxxxxxxxxxxxxx" />
                            </div>
                        </div>
                    </div>

                    <div className='d-flex gap-2 header-1  mx-3 '>
                        <div className="input-icon">
                            <img src="./images/Group.svg" alt="" />
                        </div>
                        <div className='mt-1'>
                            <h6>Paytm settings</h6>
                        </div>
                    </div>

                    <div className="row mt-3 mx-2 heading-14">
                        <div className="col-6 ">
                            <h6 className='size-1'>Active</h6>
                            <select class="form-select form-focus-input form-select-md forInput" style={{ color: '#ADADBD' }} aria-label="Small select example">
                                <option selected >No</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-6 ">
                            <h6 className='size-1'>Active</h6>
                            <select class="form-select form-focus-input form-select-md forInput" style={{ color: '#ADADBD' }} aria-label="Small select example">
                                <option selected >Test</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>

                    <div className="row mt-2 mx-2 heading-14">
                        <div className="col-6 ">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Test Merchant Id</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="tm_id_xxxxxxxxxxxx" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Test Merchant Key</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="tm_key_xxxxxxxxxx" />
                            </div>
                        </div>
                    </div>

                    <div className="row  mx-2 heading-14" >
                        <div className="col-6 ">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Live Merchant Id</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="tm_id_xxxxxxxxxxxx" />
                                {/* <button type="button" class="btn btn-secondary mt-3" style={{backgroundColor:'#008479'}}>Update Stripe</button> */}

                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Live Merchant Key</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="Live Merchant Key" />
                            </div>
                        </div>
                    </div>

                    <div className="row  mx-2 heading-14" >
                        <div className="col-6 ">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Environment</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="provide-a-environment" />

                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Merchant_Website</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="merchant-website" />
                            </div>
                        </div>
                    </div>

                    <div className="row  mx-2 heading-14" >
                        <div className="col-6 ">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Channel</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="provide-channel-type" />
                                <button type="button" class="btn btn-secondary mt-3" style={{ backgroundColor: '#008479' }}>Update Paytm</button>

                            </div>
                        </div>
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Industry_type</label>
                                <input type="email" class="form-control form-focus-input form-select-md $input-btn-padding-y-sm forInput" style={{ borderRadius: '5px', fontSize: '13px' }} id="exampleFormControlInput1" placeholder="provide-industry-type" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Container>
    )
}

export default PaymentSetting
