import React from 'react'
import styled from 'styled-components';


const Container= styled.div`
.btnsubmitOwn{
    background-color: #008479 !important;
}

.imagearea{
    background: linear-gradient(#F0F8F7, white);
}

.formarea{
    background:linear-gradient(#F0F8F7, white);
}

.formcontrolinput{
    border: 1px solid #E4E7EB;
    border-radius: 6px;
    font-size: 16px;
}

.formcontrolinput::placeholder{
    color: #ADADBD;
    font-size: 14px;
}
`;


const Login = () => {


    const loginApi= () => {
        localStorage.setItem('token:abc')
        console.log('abc')
        // localStorage.setItem('token= abc')
    }
  
    return (
      <>
          <Container>
              <div className="conatiner-fluid loginmain">
                  <div className="row">
                      <div className="col-md-6 col-sm-12 p-5 imagearea">
                          <img src="./images/loginimg.svg" alt="" className='img-fluid m-4'/>
                      </div>
                      <div className="col-md-6 col-sm-12 p-5 formarea">
                          <div className="row text-center pt-5 mt-5">
                              <p><img src="./images/Scrizalogo.svg" alt="" className='img-fluid' /></p>
                          </div>
                          <div className="row p-5 ms-3 me-3">
                              <form>
                                  <div className="mb-3">
                                      <label for="exampleInputEmail1" className="form-label">Email</label>
                                      <input type="email" className="form-control formcontrolinput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='&#xF0E0; Your Email Address'/>
                                  </div>
                                  <div className="mb-3">
                                      <label for="exampleInputPassword1" className="form-label">Password</label>
                                      <input type="password" className="form-control formcontrolinput col-11" id="exampleInputPassword1" placeholder='&#xf084; 6+ Strong Character'/>
                                  </div>
                                  <div className="mb-4 mt-4 form-check d-flex">
                                      <div className="col-6">
                                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                          <label className="form-check-label ps-2" for="exampleCheck1">Remember Me</label>
                                      </div>
                                      <div className="col-6 text-end">
                                          <a className='text-primary text-decoration-none' href='/forgotPassword'>Forget Password?</a>
                                      </div>
                                  </div>
                                  <div className="d-grid gap-2 col-12 mx-auto">
                                      <a type="submit" className="btn btnsubmitOwn text-white" href='/dashboard' onClick={loginApi}>Submit</a>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </Container>
      </>
    )
  }

export default Login