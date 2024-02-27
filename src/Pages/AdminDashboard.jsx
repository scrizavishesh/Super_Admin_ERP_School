import React from 'react'
import LineChart from '../Charts/LineChart'
import styled from 'styled-components';

const AdminDashboard = () => {

const NumberHeading = styled.h1`
    font-size: 30px;
    font-family: Noto Sans;
    color: #FF914D;
`;

const Span14Font = styled.span`
    font-size: 14px;
    font-family: Noto Sans;

    .text-grey{
        color: #8F8F8F;
    }

    .text-green{
        color: #008479;
    }

    .text-active{
        color: #34C38F;
    }

    .text-Deactive{
        color: #C90303;
    }

    .text-viewAll{
        color: #C90303;
    }

    .btnviewDetails{
        font-size: 12px;
        background-color: #E4E7EB;
    }

`;


const Span16Font = styled.span`
    font-size: 16px;
    font-family: Noto Sans;
`;



  return (
        <>
            <div className="conatiner-fluid p-3">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12 ps-4 pe-3 pb-3">
                        <div className="row bg-white whitebox p-2 border rounded">
                            <div className="row">
                            <div className="col-9 align-self-center">
                                <div className="row"><Span16Font>Schools</Span16Font></div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                <img src="./images/book.svg" alt="" height={30}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-9">
                            <div className="row"><NumberHeading>56</NumberHeading></div>
                            </div>
                            <div className="col-3 align-self-center">
                            <div className="row">
                                <img src="./images/Vector.svg" alt="" height={20}/>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 ps-4 pe-3 pb-3">
                        <div className="row bg-white whitebox p-2 border rounded">
                            <div className="row">
                            <div className="col-9 align-self-center">
                                <div className="row"><Span16Font>Addons</Span16Font></div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                <img src="./images/Addons.svg" alt="" height={30}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-9">
                            <div className="row"><NumberHeading className='orangeText'>11</NumberHeading></div>
                            </div>
                            <div className="col-3 align-self-center">
                            <div className="row">
                                <img src="./images/Vector.svg" alt="" height={20}/>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 ps-4 pe-3 pb-3">
                        <div className="row bg-white whitebox p-2 border rounded">
                            <div className="row">
                            <div className="col-9 align-self-center">
                                <div className="row"><Span16Font>Subscription</Span16Font></div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                <img src="./images/subscription.svg" alt="" height={30}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-9">
                            <div className="row"><NumberHeading className='orangeText'>04</NumberHeading></div>
                            </div>
                            <div className="col-3 align-self-center">
                            <div className="row">
                                <img src="./images/Vector.svg" alt="" height={20}/>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 ps-4 pe-3 pb-3">
                        <div className="row bg-white whitebox p-2 border rounded">
                            <div className="row">
                            <div className="col-9 align-self-center">
                                <div className="row"><Span16Font>Package Details</Span16Font></div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                <img src="./images/package.svg" alt="" height={30}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-9">
                            <div className="row"><NumberHeading className='orangeText'>05</NumberHeading></div>
                            </div>
                            <div className="col-3 align-self-center">
                            <div className="row">
                                <img src="./images/Vector.svg" alt="" height={20}/>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-md-6 col-sm-12 col-12 ps-2 pe-2">
                        <div class="card p-3" style={{width: "18rem;"}}>
                            <div class="card-header bg-white ps-1 pe-1">
                                <div className="d-flex p-0">
                                    <div className="flex-fill"><Span16Font>School Details</Span16Font></div>
                                    <div className="flex-fill text-end"><a className='text-success border-bottom-success' to='/superAdminSchools'><Span16Font>View All</Span16Font></a></div>
                                </div>
                            </div>
                            <div className="overflow-scroll">
                                <Span14Font>
                                    <table className="table table-striped mt-2 mb-0">
                                        <tbody>
                                        <tr>
                                            <td><span className='text-grey'>Green Land Public School</span></td>
                                            <td><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                        </tr>
                                        <tr>
                                            <td><span className='text-grey'>Green Land Public School</span></td>
                                            <td><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                        </tr>
                                        <tr>
                                            <td><span className='text-grey'>Green Land Public School</span></td>
                                            <td><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                        </tr>
                                        <tr>
                                            <td><span className='text-grey'>Green Land Public School</span></td>
                                            <td><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                        </tr>
                                        <tr>
                                            <td><span className='text-grey'>Green Land Public School</span></td>
                                            <td><span className='text-Deactive'>DeActive</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                        </tr>
                                        <tr>
                                            <td><span className='text-grey'>Green Land Public School</span></td>
                                            <td><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                        </tr>
                                        <tr>
                                            <td><span className='text-grey'>Green Land Public School</span></td>
                                            <td><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Span14Font>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12 ps-2 pe-2">
                        <div class="card p-3" style={{width: "18rem;"}}>
                            <div class="card-header bg-white ps-1 pe-1">
                                <div className="d-flex p-0">
                                    <div className="flex-fill"><Span16Font>Earning Details</Span16Font></div>
                                </div>
                            </div>
                            <div className="overflow-scroll">
                                <span className='p-0 pt-2'><LineChart/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-md-6 col-sm-12 col-12 ps-2 pe-2">
                        <div class="card p-3" style={{width: "18rem;"}}>
                            <div class="card-header bg-white ps-1 pe-1">
                                <div className="d-flex p-0">
                                    <div className="flex-fill"><Span16Font>Packages</Span16Font></div>
                                    <div className="flex-fill text-end"><a className='text-success border-bottom-success' to='/superAdminSchools'><Span16Font>View All</Span16Font></a></div>
                                </div>
                            </div>
                            <div className="overflow-scroll">
                                <Span14Font>
                                    <table className="table table-striped mt-2">
                                        <tbody>
                                            <tr>
                                            <td><span className='text-grey'>Silver</span></td>
                                            <td className='text-center'><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                            </tr>
                                            <tr>
                                            <td><span className='text-grey'>Platinum</span></td>
                                            <td className='text-center'><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                            </tr>
                                            <tr>
                                            <td><span className='text-grey'>Gold</span></td>
                                            <td className='text-center'><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                            </tr>
                                            <tr>
                                            <td><span className='text-grey'>Dimond</span></td>
                                            <td className='text-center'><span className='text-active'>Active</span></td>
                                            <td className='text-end'><span className='btnviewDetails p-1'>View Details</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Span14Font>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12 ps-2 pe-2">
                        <div class="card p-3" style={{width: "18rem;"}}>
                            <div class="card-header bg-white ps-1 pe-1">
                                <div className="d-flex p-0">
                                    <div className="flex-fill"><Span16Font>Latest Request</Span16Font></div>
                                    <div className="flex-fill text-end"><a className='text-success border-bottom-success' to='/superAdminSchools'><Span16Font>View All</Span16Font></a></div>
                                </div>
                            </div>
                            <div className="overflow-scroll">
                            <div class="card border-white" style={{width: "18rem;"}}>
                                <div className="d-flex pt-2">
                                    <div className="flex-fill"><Span14Font>Heading Text</Span14Font></div>
                                    <div className="flex-fill text-end"><a className='text-success border-bottom-success' to='/superAdminSchools'><Span16Font>View All</Span16Font></a></div>
                                </div>
                                
                                </div>
                            </div>
                            <div class="card-footer bg-white ps-0">
                            <Span14Font className='fst-italic'>Abhijat - 2 Days Ago</Span14Font>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 col-sm-12 col-12 ps-2 pe-2">
                    <div className="row bg-white whitebox p-2">
                    <div className="d-flex ps-0 pt-2 pb-2">
                        <div className="flex-fill ps-1"><Span16Font>Latest Request</Span16Font></div>
                        <div className="flex-fill text-end"><a className='text-success border-bottom-success'><Span16Font>View All</Span16Font></a></div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="d-flex p-0">
                            <div className="flex-fill ps-1"><Span14Font className='text-decoration-underline'>Heading Text</Span14Font></div>
                            <div className="flex-fill text-end"><small className='text-white p-1 orangeDatebg'>10 Feb 2024</small></div>
                        </div>
                        <div className="row pt-3 pb-4 ps-0 pe-0">
                        <Span14Font className='text-center p-1 m-0'><Span14Font className='text-grey'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Span14Font></Span14Font>
                        <Span14Font className='text-center p-1 m-0'><Span14Font className='text-grey'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Span14Font></Span14Font>
                        <Span14Font className='text-center p-1 m-0'><Span14Font className='text-grey'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Span14Font></Span14Font>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard