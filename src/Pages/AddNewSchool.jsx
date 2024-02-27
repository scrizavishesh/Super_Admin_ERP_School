import React, {useState} from 'react'
import styled from 'styled-components';

const Container = styled.div`

  .breadcrumb-item::before {
    content: var(--bs-breadcrumb-divider, "");
  }

  .text-reed{
    color: #C90303 !important;
  }

  .schoolFormbtn {
    background-color: #E5F3F2 !important;
    box-shadow: 0px 0px white !important
  }
  
  .card{
    border: white;
  }

`;

const Span14Text = styled.span`
    font-size: 14px;
    font-family: Noto Sans;
`;


const AddNewSchool = () => {

  const [schoolFormOpen, setSchoolFormOpen] = useState(true);
  const [adminInfoOpen, setAdminInfoOpen] = useState(false);

  const toggleSchoolForm = () => {
    setSchoolFormOpen(!schoolFormOpen);
    setAdminInfoOpen(false);
  };

  const toggleAdminInfo = () => {
    setAdminInfoOpen(!adminInfoOpen);
    setSchoolFormOpen(false);
  };

  return (
    <>
      <Container>
        <div className="container-fluid ps-4 pe-4">
          <div className="row pt-3">
            <Span14Text>
              <nav className='breadcrumnav' aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#" className='text-grey text-decoration-none '>Home &gt; </a></li>
                  <li className="breadcrumb-item active" aria-current="page"><span className='textaddFeat'> Schools</span></li>
                </ol>
              </nav>
            </Span14Text>
          </div>
          <div className="row mb-3"><Span14Text>Add New School</Span14Text></div>
          <div className="row ">
            <div className="bg-white p-3">
              <p className={`d-inline-flex gap-1 p-2 col-12 schoolFormbtn ${schoolFormOpen ? 'active' : ''}`} onClick={toggleSchoolForm}>
                <span className="flex-grow-1" data-bs-toggle="collapse" href="#SchoolFormCollapse" role="button" aria-expanded={schoolFormOpen} aria-controls="SchoolFormCollapse">
                  School Form
                </span>
                <span className='text-end'>
                  {schoolFormOpen? <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 32 32"><path fill="black" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-6 10v2h12v-2z"/></svg>: <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 1024 1024"><path fill="black" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"/></svg>}
                </span>
              </p>
              <div className={`collapse ${schoolFormOpen ? 'show' : ''}`} id="SchoolFormCollapse">
                  <div className="card card-body">
                    <form className="row g-3">
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><small>School Name*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlAdd" className="form-label"><small>School Address*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlAdd"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlEmail" className="form-label"><small>School Email*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlEmail"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlPhone" className="form-label"><small>School Phone*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlPhone"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><small>School Description*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><small>School Logo*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName"/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>



                <p className={`d-inline-flex gap-1 p-2 col-12 schoolFormbtn mt-3 ${adminInfoOpen ? 'active' : ''}`} onClick={toggleAdminInfo}>
                  <span className="flex-grow-1" data-bs-toggle="collapse" href="#AdimnInfoCollapse" role="button" aria-expanded={adminInfoOpen} aria-controls="AdimnInfoCollapse">
                    Admin Info
                  </span>
                  <span className='text-end'>
                    {adminInfoOpen? <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 32 32"><path fill="black" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-6 10v2h12v-2z"/></svg>: <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 1024 1024"><path fill="black" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"/></svg>}
                  </span>
                </p>
                <div className={`collapse ${adminInfoOpen ? 'show' : ''}`} id="AdimnInfoCollapse">
                  <div className="card card-body">
                    <form className="row g-3">
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><small>School Name*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlAdd" className="form-label"><small>School Address*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlAdd"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlEmail" className="form-label"><small>School Email*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlEmail"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlPhone" className="form-label"><small>School Phone*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlPhone"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><small>School Description*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="col-md-12">
                          <label htmlFor="inputSchlName" className="form-label"><small>School Logo*</small></label>
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control" id="inputSchlName"/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default AddNewSchool