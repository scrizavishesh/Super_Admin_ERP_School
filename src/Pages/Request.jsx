import React, { useState } from 'react'
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
    /* height: 60vh; */
    border-radius: 15px;

}
.margin-minus22{
    margin-top: -18px;
    font-size: 16px;
}
th, td{
  padding: 10px;
}
.my-td-style-yellow span{
  background-color: #FFEED3;
    color: #FF914C;
    padding: 3px 12px 3px 12px;
    border-radius: 15%;
}
.my-td-style-green span{
  background-color:#E6FFE2;
  color: #00A67E;
  padding: 3px 12px 3px 12px;
  border-radius: 15%;
}
.my-button-drop{
  line-height: 13px !important;
  background-color: #D9D9D9 !important;
  border: 1px solid #D9D9D9 !important;
  color: #000;
}
.pagination-a{
  background-color: #f2f0f0;
  color: #000;
  padding: 0.00175rem 0.25rem;
  margin-left: 0px !important;
}
.form-focus:focus {
    color: #212529 !important;
    background-color: #fff !important;
    border-color: #E4E7EB !important;
    outline: none !important;
    box-shadow: none !important;
}
.page-link-1122 {
    /* padding: 0.00175rem 0.05rem; */
    padding: 0rem 0rem;
}
.pagination-a a{
  gap: 2px;
}
.my-pagina li a:hover{
  background-color: #008479;
  color: #fff;
  border: none;
}
.input-bg{
  background-color: #F2F3F6;
}
.label-color{
  color: #bbbec1;
}
.cont-drop-btn button:hover{
  background-color: transparent;
  color: #000;
  cursor: pointer;
  border: none;
}


.my-button11{
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-top: 30px;
}

.my-button11 button{
    border-radius: 5px;
  border: 1px solid #ababad;
  color: #000;
font-size: 12px;
}
.my-button11 button:hover{
    background-color: #008479;
    color: #fff;
}
.my-button22{
    display: flex;
    gap: 4px;
    margin-top: 4px;
}

.my-button22 button{
    border-radius: 5px;
  border: 1px solid #ababad;
  color: #000;
font-size: 12px;
}
.my-button22 button:hover{
    background-color: #008479;
    color: #fff;
}
.my-grey{
  color: #ADADBD;
}

.my-div-class p{
  border: 1px solid #ADADBD;
  padding: 10px;
  border-radius: 4px;
  background-color: #F2F3F6;
  color: #ADADBD;
  border: 1px solid #F2F3F6;
}
.my-div-class span a{
    text-decoration: none;
}
/* ########## media query ###########  */
 @media only screen and (max-width: 735px) {
  .for-media-query{
    display: flex;
    flex-direction: column;
  }
}
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

const [show1, setShow1] = useState(true)
const [hide2, setHide2] = useState(false)
const [reply, setReply] = useState(false)


const UpdateHandleBtn = (e) =>{

if(show1 === true && hide2 === false){
  setShow1(false)
  setHide2(true)
} else{
  setShow1(true)
}
}

const Replyhandle = (e) =>{
if(hide2 === true && reply === false){
setHide2(false)
setReply(true)
} else{
  setHide2(true)
}
}

  return (
   <Container>
     <div className="container-fluid main-body p-3">

    <div className='d-flex justify-content-between for-dislay-direction'>
    <div className="breadCrum ms-2">
    <nav style={{ '--bs-breadcrumb-divider': "'>'" }}aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
            {/* <li class="breadcrumb-item active" aria-current="page">Setting</li> */}
            <li class="breadcrumb-item breadcrum-li" ><Link href="#">Request</Link></li>
        </ol>
    </nav>
    </div>

    <div className='d-flex g-1 for-media-query'>
    <form class="row g-2 me-2">
        <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="password" class="form-control form-focus form-control-sm" style={{fontSize:'15px'}} id="inputPassword2" placeholder="01/01/2024 - 02/10/2024" />
        </div>
        <div class="col-auto my-logo-logo">
            <button type="submit" class="btn btn-primary mb-3 heading-14" style={{backgroundColor:'#008479', border:'1px solid #008479', fontSize:'12.5px'}}>
              <img src="./images/Vector (1).svg" alt=""  /> Filter</button>
        </div>
   </form>
    <div className='me-2'>
        <div class="input-group mb-3 ">
            <input type="text" class="form-control form-focus" style={{height:'34px'}} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span class="input-group-text " style={{background:'#008479', color:'#fff', cursor:'pointer',height:"34px",fontSize:'14px'}} id="basic-addon2">Search</span>
        </div>
    </div>
    </div>
   
    </div>
    <h5 className='ms-2 margin-minus22'>Request Report</h5>

    <div className="main-content-conatainer pt-1 ">
            {/* ###### copy content till here for all component ######  */}

   <div className="table-container px-3 table-responsive">
     
   <table class="table table-sm ">
  <thead className=''>
    <tr className='heading-16 '>
      <th className=''>#</th>
      <th>Req ID</th>
      <th>Date  &nbsp;<img src="./images/Vector (2).svg" alt="" /></th>
      <th>Description</th>
      <th>Email</th>
      <th>Contact No</th>
      <th>Status &nbsp;<img src="./images/Vector (2).svg" alt="" /></th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody>
    <tr className='heading-14' >
      <td>1.</td>
      <td>SCR152</td>
      <td>01 Feb 2024</td>
      <td>Lorem Ipsum is simply dummy Text...</td>
      <td>xyz12@gmail.com</td>
      <td>+91 9999999999</td>
      <td className='my-td-style-yellow'><span>New</span></td>
      <td>
      <div class="dropdown my-button-show">
          <button class="btn btn-secondary dropdown-togg my-button-drop heading-14" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Action <img src="./images/Vector (3).svg" alt="" />
          </button>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Edit</Link></li>
            <li><a class="dropdown-item" href="#">View Detail</a></li>
            <li><a class="dropdown-item" href="#">Delete</a></li>
          </ul>
      </div>
      </td>
    </tr>
    <tr className='heading-14' style={{backgroundColor:'#F2F3F6'}}>
      <td>1.</td>
      <td>SCR152</td>
      <td>01 Feb 2024</td>
      <td>Lorem Ipsum is simply dummy Text...</td>
      <td>xyz12@gmail.com</td>
      <td>+91 9999999999</td>
      <td className='my-td-style-green'><span>In progress</span></td>
      <td>
      <div class="dropdown my-button-show ">
          <button class="btn btn-secondary dropdown-togg my-button-drop heading-14" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Action <img src="./images/Vector (3).svg" alt="" />
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </div>
      </td>
    </tr>
    <tr className='heading-14'>
      <td>1.</td>
      <td>SCR152</td>
      <td>01 Feb 2024</td>
      <td>Lorem Ipsum is simply dummy Text...</td>
      <td>xyz12@gmail.com</td>
      <td>+91 9999999999</td>
      <td className='my-td-style-green'><span>In progress</span></td>
      <td>
      <div class="dropdown my-button-show">
          <button class="btn btn-secondary dropdown-togg my-button-drop heading-14" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Action <img src="./images/Vector (3).svg" alt="" />
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </div>
      </td>
    </tr>
    <tr className='heading-14' style={{backgroundColor:'#F2F3F6'}}>
      <td>1.</td>
      <td>SCR152</td>
      <td>01 Feb 2024</td>
      <td>Lorem Ipsum is simply dummy Text...</td>
      <td>xyz12@gmail.com</td>
      <td>+91 9999999999</td>
      <td className='my-td-style-green'><span>In progress</span></td>
      <td>
      <div class="dropdown my-button-show">
          <button class="btn btn-secondary dropdown-togg my-button-drop heading-14" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Action <img src="./images/Vector (3).svg" alt="" />
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </div>
      </td>
    </tr>
    <tr className='heading-14'>
      <td>1.</td>
      <td>SCR152</td>
      <td>01 Feb 2024</td>
      <td>Lorem Ipsum is simply dummy Text...</td>
      <td>xyz12@gmail.com</td>
      <td>+91 9999999999</td>
      <td className='my-td-style-green'><span>In progress</span></td>
      <td>
      <div class="dropdown my-button-show">
          <button class="btn btn-secondary dropdown-togg my-button-drop heading-14" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Action <img src="./images/Vector (3).svg" alt="" />
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </div>
      </td>
    </tr>
    <tr className='heading-14' style={{backgroundColor:'#F2F3F6'}}>
      <td>1.</td>
      <td>SCR152</td>
      <td>01 Feb 2024</td>
      <td>Lorem Ipsum is simply dummy Text...</td>
      <td>xyz12@gmail.com</td>
      <td>+91 9999999999</td>
      <td className='my-td-style-green'><span>In progress</span></td>
      <td>
      <div class="dropdown my-button-show">
          <button class="btn btn-secondary dropdown-togg my-button-drop heading-14" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Action <img src="./images/Vector (3).svg" alt="" />
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </div>
      </td>
    </tr>
    <tr className='heading-14' >
      <td>1.</td>
      <td>SCR152</td>
      <td>01 Feb 2024</td>
      <td>Lorem Ipsum is simply dummy Text...</td>
      <td>xyz12@gmail.com</td>
      <td>+91 9999999999</td>
      <td className='my-td-style-green'><span>In progress</span></td>
      <td>
      <div class="dropdown my-button-show">
          <button class="btn btn-secondary dropdown-togg my-button-drop heading-14" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Action <img src="./images/Vector (3).svg" alt="" />
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
      </div>
      </td>
    </tr>
      
  </tbody>
  </table>
   </div>

    <div className="row ">
      <div className='d-flex justify-content-between px-5'>
      <div className=''>
      <p>Showing 1 to 10 entries</p>
    </div>
      <div >
          <nav aria-label="Page navigation example">
            <ul class="pagination my-pagina " >
              <li class="page-item">
                <a class="page-link pagination-a" href="#" aria-label="Previous">
                  <span aria-hidden="true"><img src="./images/Vector (4).svg" alt="" /></span>
                </a>
                &nbsp;
              </li>
              &nbsp;
              <li class="page-item"><a class="page-link pagination-a" href="#">1</a></li>&nbsp;
              <li class="page-item"><a class="page-link pagination-a" href="#">2</a></li>&nbsp;
              <li class="page-item"><a class="page-link pagination-a" href="#">3</a></li>&nbsp;
              <li class="page-item"><a class="page-link pagination-a" href="#">4</a></li>&nbsp;
              <li class="page-item"><a class="page-link pagination-a" href="#">5</a></li>&nbsp;
              <li class="page-item">
                <a class="page-link pagination-a" href="#" aria-label="Next" >
                  <span aria-hidden="true"><img src="./images/Vector (5).svg" alt="" /></span>
                </a>
              </li>
            </ul>
          </nav>
      </div>
      </div>

    </div>
        </div>
                 {/* ########################## edit offcanvas  start ################  */}
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

                  {
                    show1 && (
                      <div className="container-fluid">
                         <div class="offcanvas-header">
                          <Link  data-bs-dismiss="offcanvas" ><img src="./images/Vector (6).svg" alt="" /></Link>
                          <h5 class="offcanvas-title heading-16" id="offcanvasRightLabel">Request Edit</h5>
                        </div>
                        <hr className='' style={{marginTop:'-3px'}}/>
                      <div className="inputs">

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label label-color ">ID</label>
                        <input type="email" class="form-control form-focus input-bg label-color" style={{marginTop:'-4px'}} id="exampleFormControlInput1" placeholder="SCR152" /> 
                        </div>
                      </div>

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label label-color ">Date</label>
                        <input type="email" class="form-control form-focus " style={{marginTop:'-4px'}} id="exampleFormControlInput1" placeholder="01 Feb 2023" /> 
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label label-color ">Email</label>
                        <input type="email" class="form-control form-focus input-bg label-color" style={{marginTop:'-4px'}} id="exampleFormControlInput1" placeholder="xyz12@gmail.com" /> 
                        </div>

                        <div class="mb-3 my-div-class" >
                          <label for="exampleFormControlTextarea1" class="form-label label-color">Req. Message</label>
                          {/* <textarea class="form-control heading-14" id="exampleFormControlTextarea1"  placeholder='Lorem Ipsumis simply dummy text ofthe printing and type setting industry.Lorem Ipsum has been the industrysstandard dummy text ever since the1500 when an unknown printer tooka galley of type and scrambled it to makea type specimen book'></textarea> */}
                          <p className='heading-14'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.!</p>
                        </div>
                          <div>
                          <label for="exampleFormControlTextarea1" class="form-label label-color">Contact No</label>
                        <div class="input-group mb-3 cont-drop-btn">
                            <button class="btn btn-outline-secondary dropdown-toggle" style={{border:'1px solid #ced4da'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">+91</button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                              <li><hr class="dropdown-divider" /> </li>
                              <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            <input type="number" class="form-control form-focus" aria-label="Text input with dropdown button" />
                        </div>
                          </div>
                      <div>
                      <label for="exampleFormControlTextarea1" class="form-label label-color">Status</label>
                      <select class="form-select form-focus" aria-label="Default select example">
                            <option selected>In Progress</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                      </div>
                            <div className='my-button11 '>
                      <button type="button" class="btn btn-outline-success" onClick={(e)=>{UpdateHandleBtn()}}>Update</button>
                      <button type="button" class="btn btn-outline-success">Cancel</button>
                      </div>
                    </div>
                    )
                  }

                {/* ########## after click ##########  */}

                  {
                    hide2 && (
                      <div className="container-fluid">
                         <div class="offcanvas-header">
                          <Link  data-bs-dismiss="offcanvas" ><img src="./images/Vector (6).svg" alt="" /></Link>
                          <h5 class="offcanvas-title heading-16" id="offcanvasRightLabel">Request View</h5>
                        </div>
                        <hr className='' style={{marginTop:'-3px'}}/>
                      <div class="mb-3 my-div-class">
                          <label for="exampleFormControlTextarea1" class="form-label label-color">Req. Message</label>
                          {/* <textarea class="form-control heading-14" id="exampleFormControlTextarea1"  placeholder=' Lorem Ipsumis simply dummy text ofthe printing and type setting industry.Lorem Ipsum has been the industrysstandard dummy text ever since the1500 when an unknown printer tooka galley of type and scrambled it to makea type specimen book  ' ></textarea> */}
                          <p className='heading-14'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.!
                           <br /> <span><Link href="" onClick={()=>{Replyhandle()}}>Reply</Link></span></p>

                      </div>
                      <div className='d-flex justify-content-between heading-14 mt-4 my-grey'>
                          <div>
                            <p className='ps-1 '>ID</p>
                          </div>
                          <div className='d-flex'>
                            <div className='my-td-style-green'><span>In progress</span></div> &nbsp; &nbsp;
                            <div><p>SCR152</p></div>
                          </div>
                      </div>
                      <hr className='' style={{marginTop:'4px'}}/>
                      <div className='d-flex justify-content-between heading-14 mt-4 my-grey'>
                          <div>
                            <p className='ps-1'>Date</p>
                          </div>
                          <div className='d-flex'>
                            <div><p>01 Feb 2023</p></div>
                          </div>
                      </div>
                      <hr className='' style={{marginTop:'4px'}}/>
                      <div className='d-flex justify-content-between heading-14 mt-4 my-grey'>
                          <div>
                            <p className='ps-1'>Email</p>
                          </div>
                          <div className='d-flex'>
                            <div><p>xyz12@gmail.com</p></div>
                          </div>
                      </div>
                      <hr className='' style={{marginTop:'4px'}}/>
                      <div className='d-flex justify-content-between heading-14 mt-4 my-grey'>
                          <div>
                            <p className='ps-1'>Contact No</p>
                          </div>
                          <div className='d-flex'>
                            <div><p>+91 9999999999</p></div>
                          </div>
                      </div>
                      <hr className='' style={{marginTop:'4px'}}/>
                      <div className='my-button11 '>
                    <button type="button" class="btn btn-outline-success" data-bs-dismiss="offcanvas" aria-label="Close">Back</button>
                    </div>

                  </div>
                    )
                  }
              {/* ################  then Again After click start ###############  */}
                {
                  reply && (
                    <div className="container-fluid">
                         <div class="offcanvas-header">
                          <Link  data-bs-dismiss="offcanvas" ><img src="./images/Vector (6).svg" alt="" /></Link>
                          <h5 class="offcanvas-title heading-16" id="offcanvasRightLabel">Request View</h5>
                        </div>
                        <hr className='' style={{marginTop:'-3px'}}/>
                      <div class="mb-3 my-div-class">
                          <label for="exampleFormControlTextarea1" class="form-label label-color">Req. Message</label>
                          <p className='heading-14'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.! 
                            <textarea class="form-control form-focus heading-14 mt-3" id="exampleFormControlTextarea1 " rows="3"  placeholder='Reply here....' ></textarea>

                            <div className='my-button22 '>
                              <button type="button" class="btn btn-outline-success" >Send</button>
                              <button type="button" class="btn btn-outline-success">Cancel</button>
                            </div>
                          </p>
                        

                      </div>
                      <div className='d-flex justify-content-between heading-14 mt-4 my-grey'>
                          <div>
                            <p className='ps-1 '>ID</p>
                          </div>
                          <div className='d-flex'>
                            <div className='my-td-style-green'><span>In progress</span></div> &nbsp; &nbsp;
                            <div><p>SCR152</p></div>
                          </div>
                      </div>
                      <hr className='' style={{marginTop:'4px'}}/>
                      <div className='d-flex justify-content-between heading-14 mt-4 my-grey'>
                          <div>
                            <p className='ps-1'>Date</p>
                          </div>
                          <div className='d-flex'>
                            <div><p>01 Feb 2023</p></div>
                          </div>
                      </div>
                      <hr className='' style={{marginTop:'4px'}}/>
                      <div className='d-flex justify-content-between heading-14 mt-4 my-grey'>
                          <div>
                            <p className='ps-1'>Email</p>
                          </div>
                          <div className='d-flex'>
                            <div><p>xyz12@gmail.com</p></div>
                          </div>
                      </div>
                      <hr className='' style={{marginTop:'4px'}}/>
                      <div className='d-flex justify-content-between heading-14 mt-4 my-grey'>
                          <div>
                            <p className='ps-1'>Contact No</p>
                          </div>
                          <div className='d-flex'>
                            <div><p>+91 9999999999</p></div>
                          </div>
                      </div>
                      <hr className='' style={{marginTop:'4px'}}/>
                      <div className='my-button11 '>
                    <button type="button" class="btn btn-outline-success" data-bs-dismiss="offcanvas" aria-label="Close">Back</button>
                    </div>

                  </div> 
                  )
                }
             
              {/* ################  then Again After click end ###############  */}
            
            </div>

                 {/* ########################## edit offcanvas  end  ################  */}

    </div>
   </Container>
  )
}

export default ManageFaq
