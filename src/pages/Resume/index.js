import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DashboardHeader from '../../components/DashboardHeader';

const ResumeBank = (props) => {
    return(
        <div className="main">
            <DashboardHeader btnText="New Order" />
                
            <div class="box-container">
                <div class="row box-container">
                    <div class="col-3 filter">
                        
                    </div>
                    <div class="col-8 result">col-8</div>
                </div>
            </div>
        </div>
    )
}

export default ResumeBank;