import React, {useState} from 'react'
import styled from 'styled-components'

const ContainerCSS= styled.div`

  .breadcrumb-item::before {
    content: var(--bs-breadcrumb-divider, "");
  }

  .text-grey{
    color: #ADADBD;
  }

  .formdltcheck:checked{
    background-color: #B50000;
    border-color: #B50000;
  }

  .formEditSpecFeatcheck:checked{
    background-color: #00A67E;
    border-color: #00A67E;
  }

  .redBtnDlt{
    background-color: #B50000;
    color: white;
  }

  .greyBtnCancel{
    border-color: #ECEBF3;
  }

  .redgreenFeatUpdate{
    background-color: #008479;
    color: white;
  }

  .orangetext{
    color: #FF914C;
  }

  .btnAddSchool{
    border-radius: 5px;
    background-color: #008479;
    color: white;
  }

  .btnsearchOwn{
    border-radius: 0px 5px 5px 0px;
    background-color: #008479;
    color: white;
  }

  .formcontrolsearch{
    border-radius: 5px 0px 0px 5px;
  }

  .borderrrhead{
    border-bottom: 2px solid #00A67E;
  }

  .borderrrbody{
    border-bottom: 1px solid #00A67E;
  }

  .textaddFeat{
    color: #209389;
  }
  
  .btnActionBtn{
    background-color: #D9D9D9;
  }
  
  .btnActionBtn:focus{
    border-color: #D9D9D9;
  }

  .text-blue{
    color: #0085FF;
  }

  .text-active{
      color: #34C38F;
  }

  .text-Deactive{
      color: #C90303;
  }

  .greydiv{
    height: 32vh;
  }

  .updatetext{
    position: absolute;
  }

  .correvtSVG{
    position: relative;
    margin-left: 37% ;
    margin-bottom: -30%;
    background-color: #2BB673;
  }

`;

const Span14Text = styled.span`
    font-size: 14px;
    font-family: Noto Sans;
`;

const Span16Text = styled.span`
    font-size: 16px;
    font-family: Noto Sans;
`;

const AllPackages = () => {

  const [DeleteWarning, setDeleteWarning]= useState(true);
  const [EditWarning, setEditWarning]= useState(true);
  const [UpdateWarning, setUpdateWarning]= useState(true);
  
  const DeleteBtnClicked = (value) => {
    setDeleteWarning(value)
  }
  
  const EditBtnClicked = (value) => {
    setEditWarning(value)
  }
  
  const UpdateBtnClicked = (value) => {
    setUpdateWarning(value)
  }
  


    return (
        <>
          <ContainerCSS>
            <div className="container-fluid">
              <div className="row pt-3">
                <div className="col-lg-7 col-md-8 col-sm-12 flex-frow-1">
                <Span14Text>
                  <nav className='breadcrumnav' aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#" className='text-grey text-decoration-none '>Home &gt; </a></li>
                      <li className="breadcrumb-item active" aria-current="page"><span className='textaddFeat'> Packages</span></li>
                    </ol>
                  </nav>
                </Span14Text>
                </div>
                <div className="col-lg-5 col-md-8 col-sm-12">
                  <div className="row">
                    <div className="col-md-8 col-sm-6">
                      <form className="d-flex " role="search">
                        <input className="form-control formcontrolsearch" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btnsearchOwn text-white" type="submit"><Span14Text>Search</Span14Text></button>
                      </form>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <a className="btn btnAddSchool text-white" type="submit" to='/superAdminAddSchools'><Span14Text>+ ADD Packages</Span14Text></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3 "><Span14Text>Manage Packages</Span14Text></div>
              
              <div className="row bg-white p-2">

                <table className="table table-striped">
                  <thead>              
                    <tr>
                      <th><Span16Text>#</Span16Text></th>
                      <th><Span16Text>Package</Span16Text></th>
                      <th><Span16Text>Price <img src="./images/StatusArrow.svg" alt="" /></Span16Text></th>
                      <th><Span16Text>Interval <img src="./images/StatusArrow.svg" alt="" /></Span16Text></th>
                      <th><Span16Text>Period <img src="./images/StatusArrow.svg" alt="" /></Span16Text></th>
                      <th><Span16Text>Student Limit <img src="./images/StatusArrow.svg" alt="" /></Span16Text></th>
                      <th><Span16Text>Bundle Details</Span16Text></th>
                      <th><Span16Text>Status <img src="./images/StatusArrow.svg" alt="" /></Span16Text></th>
                      <th><Span16Text>Action</Span16Text></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className='text-grey'><Span14Text>1.</Span14Text></th>
                      <td className='text-grey'><Span14Text>Silver</Span14Text></td>
                      <td className='text-grey'><Span14Text>100</Span14Text></td>
                      <td className='text-grey'><Span14Text>Days</Span14Text></td>
                      <td className='text-grey'><Span14Text>20</Span14Text></td>
                      <td className='text-grey'><Span14Text>50</Span14Text></td>
                      <td className='text-blue'><Span14Text>View Bundle Pack</Span14Text></td>
                      <td className='text-active'><Span14Text>Active</Span14Text></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-sm btnActionBtn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Span14Text>Action</Span14Text>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button className="dropdown-item text-grey" type="button" data-bs-toggle="offcanvas" data-bs-target="#Edit_staticBackdrop" aria-controls="Edit_staticBackdrop">
                                Edit
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item text-grey" type="button" data-bs-toggle="offcanvas" data-bs-target="#SpeFeature_staticBackdrop" aria-controls="SpeFeature_staticBackdrop">
                                Update Bundle
                              </button>
                            </li>
                            <li>
                              {/* <button className="dropdown-item" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Delete</button> */}
                              <button className="dropdown-item text-grey" type="button" data-bs-toggle="offcanvas" data-bs-target="#Delete_staticBackdrop" aria-controls="Delete_staticBackdrop">
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className='text-grey'><Span14Text>2.</Span14Text></th>
                      <td className='text-grey'><Span14Text>Platinum</Span14Text></td>
                      <td className='text-grey'><Span14Text>1500</Span14Text></td>
                      <td className='text-grey'><Span14Text>Months</Span14Text></td>
                      <td className='text-grey'><Span14Text>1</Span14Text></td>
                      <td className='text-grey'><Span14Text>100</Span14Text></td>
                      <td className='text-blue'><Span14Text>View Bundle Pack</Span14Text></td>
                      <td className='text-active'><Span14Text>Active</Span14Text></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-sm btnActionBtn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Span14Text>Action</Span14Text>
                          </button>
                          <ul className="dropdown-menu">
                            
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className='text-grey'><Span14Text>3.</Span14Text></th>
                      <td className='text-grey'><Span14Text>Gold</Span14Text></td>
                      <td className='text-grey'><Span14Text>2500</Span14Text></td>
                      <td className='text-grey'><Span14Text>Year</Span14Text></td>
                      <td className='text-grey'><Span14Text>1</Span14Text></td>
                      <td className='text-grey'><Span14Text>250</Span14Text></td>
                      <td className='text-blue'><Span14Text>View Bundle Pack</Span14Text></td>
                      <td className='text-active'><Span14Text>Active</Span14Text></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-sm btnActionBtn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Span14Text>Action</Span14Text>
                          </button>
                          <ul className="dropdown-menu">
                            
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className='text-grey'><Span14Text>4.</Span14Text></th>
                      <td className='text-grey'><Span14Text>Daimond</Span14Text></td>
                      <td className='text-grey'><Span14Text>3500</Span14Text></td>
                      <td className='text-grey'><Span14Text>Lifetime</Span14Text></td>
                      <td className='text-grey'><Span14Text>Lifetime</Span14Text></td>
                      <td className='text-grey'><Span14Text>Unlimited</Span14Text></td>
                      <td className='text-blue'><Span14Text>View Bundle Pack</Span14Text></td>
                      <td className='text-active'><Span14Text>Active</Span14Text></td>
                      <td>
                        <div className="dropdown">
                          <button className="btn btn-sm btnActionBtn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Span14Text>Action</Span14Text>
                          </button>
                          <ul className="dropdown-menu">
                            
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>





{/* ***********************************************************************************************************************************************************************************/}
{/* ***********************************************************************************************************************************************************************************/}



        <div className="offcanvas offcanvas-end ps-3 pe-3" data-bs-backdrop="static" tabIndex="-1" id="Edit_staticBackdrop" aria-labelledby="staticBackdropLabel">
          <div className="offcanvas-header border-bottom border-2">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <span className="offcanvas-title" id="staticBackdropLabel">Package</span>
          </div>
          <div className="offcanvas-body p-0">
            <div>
              {EditWarning
                ? 
                  <Span16Text>
                    <div>
                      <div class="border-bottom d-flex mb-3 ps-0">
                        <div class="p-2"><Span14Text className=''>Package</Span14Text></div>
                        <div class="ms-auto p-2"><Span14Text className='orangetext'>Silver</Span14Text></div>
                      </div>
                      <div className="">
                        <form>
                          <div className="mb-3">
                            <label for="exampleInputAdd1" className="form-label text-grey">Price</label>
                            <input type="number" className="form-control" id="exampleInputAdd1" aria-describedby="priceHelp" placeholder='100'/>
                          </div>
                          <div className="mb-3">
                            <label for="exampleInputphone1" className="form-label text-grey">Interval</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Days</option>
                              <option value="1">Months</option>
                              <option value="2">Year</option>
                              <option value="3">Lifetime</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label text-grey">Period</label>
                            <input type="number" className="form-control" id="exampleInputAdd1" aria-describedby="priceHelp" placeholder='20'/>
                          </div>
                          <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label text-grey">Student Limit</label>
                            <input type="number" className="form-control" id="exampleInputAdd1" aria-describedby="priceHelp" placeholder='50'/>
                          </div>
                          <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label text-grey">Status</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Active</option>
                              <option value="1">Un-Active</option>
                            </select>
                          </div>
                        </form>
                        <p className='text-center p-3'>
                          <button className='btn redgreenFeatUpdate rounded-0' onClick={(e) => EditBtnClicked(false)}>Update</button>
                          <button className='btn greyBtnCancel rounded-0 ms-3'>Cancel</button>
                        </p>
                      </div>
                    </div>
                  </Span16Text>
                :
                  <Span16Text>
                    <div>
                      <p className='border-bottom p-2'>Package</p>
                      <div className="">
                        <span className='correvtSVG ps-3 pe-3 pt-4 pb-4 rounded-circle'><img src="./images/Correct.svg" alt="" /></span>
                        <div className="updatetext border m-4 border-2 greydiv rounded-3 text-center text-grey p-5">
                            <p>Successful Updated</p>
                            <p><span>Your Changes has been
                              Successfully Saved</span></p>
                            <button className='btn redgreenFeatUpdate rounded-0'>Continue</button>
                        </div>
                      </div>
                    </div>
                  </Span16Text>
              }
            </div>
         </div>
        </div>






         






{/* ***********************************************************************************************************************************************************************************/}
{/* ***********************************************************************************************************************************************************************************/}



        <div className="offcanvas offcanvas-end ps-1 pe-1" data-bs-backdrop="static" tabIndex="-1" id="SpeFeature_staticBackdrop" aria-labelledby="staticBackdropLabel">
          <div className="offcanvas-header borderrrhead">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <span className="offcanvas-title" id="staticBackdropLabel">Special Features Details</span>
          </div>
          <div className="offcanvas-body p-0">
           <div>
              <div class="border-bottom d-flex">
                <div class="p-2"><Span14Text className=''>Package</Span14Text></div>
                <div class="ms-auto p-2"><Span14Text className='orangetext'>Silver</Span14Text></div>
              </div>
             <div className="ps-3 pe-3">
               <table className="table table-striped mt-2">
                 <thead>
                   <tr height='40px'>
                     <th>Details</th>
                     <td className='textaddFeat'></td>
                   </tr>
                 </thead>
                 <tbody>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>Online live class</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked" checked/></small></td>
                   </tr>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>Live problem discussion</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked" checked/></small></td>
                   </tr>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>HR Management</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                   </tr>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>Payment Gateways</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                   </tr>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>Inventory Manager</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                   </tr>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>Online Course</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                   </tr>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>Transport</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                   </tr>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>Alumni</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                   </tr>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>Sms Center</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                   </tr>
                   <tr height='40px'>
                     <td><small className='text-grey ps-2'>Assignments addon</small></td>
                     <td className='text-end'><small className='p-1 pe-2'><input className="form-check-input formEditSpecFeatcheck" type="checkbox" value="" id="flexCheckChecked"/></small></td>
                   </tr>
                 </tbody>
               </table>
               <p className='text-center p-3'>
                 <button className='btn redgreenFeatUpdate rounded-0' onClick={(e) => UpdateBtnClicked(false)}>Update</button>
                 <button className='btn greyBtnCancel rounded-0 ms-3'>Cancel</button>
               </p>
             </div>
           </div>
         </div>
        </div>



{/* ***********************************************************************************************************************************************************************************/}
{/* ***********************************************************************************************************************************************************************************/}



        
        <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="Delete_staticBackdrop" aria-labelledby="staticBackdropLabel">
          <div className="offcanvas-header ps-0 border-bottom">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <h6 className="offcanvas-title" id="staticBackdropLabel">Edit Addon</h6>
          </div>
          <div className="offcanvas-body p-0">
            <div>
            {DeleteWarning
                ?
                  <Span16Text>
                    <div>
                      <p className='border-bottom p-2'>School List</p>
                      <p className='text-center p-3'> <img src="./images/errorI.svg" className='img-fluid' alt="" /></p>
                      <h3 className='text-center'>Are you Sure?</h3>
                      <p className='text-center text-grey'>This Action will be permanently delete <br />the Profile Data</p>
                      <p className='text-center text-grey p-2'><input className="form-check-input formdltcheck" type="checkbox" value="" id="flexCheckChecked" /> I Agree to delete the Profile Data</p>
                      <p className='text-center p-3'>
                        <a className='btn redBtnDlt rounded-0' onClick={(e) => DeleteBtnClicked(false)}>Delete</a>
                        <button className='btn greyBtnCancel rounded-0 ms-3'>Cancel</button>
                      </p>
                    </div>
                  </Span16Text>
                :
                <Span16Text>
                  <div>
                    <p className='border-bottom p-2'>School List</p>
                    <div className="">
                      <span className='deleteSVG border border-2 ps-3 pe-3 pt-4 pb-4 rounded-circle'><img src="./images/deleteicon.svg" alt="" /></span>
                      <div className="deletetext border m-4 border-2 greydiv ms-5 rounded-3 text-center text-grey p-5">
                          <p>Successful Deleted</p>
                          <p><span>Your data has been
                              Successfully Delete</span></p>
                          <button className='btn redgreenFeatUpdate rounded-0'>Continue</button>
                      </div>
                    </div>
                  </div>
                </Span16Text>
              }
            </div>
          </div>
        </div>



{/* ***********************************************************************************************************************************************************************************/}
{/* ***********************************************************************************************************************************************************************************/}








            </div>
          </ContainerCSS>
        </>
      )
}

export default AllPackages