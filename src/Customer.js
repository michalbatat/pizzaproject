import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { saveCusromer } from "./store/actions/customer"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { currnetCustomer } from './store/reducers/customer'


export default function Cusromer() {


    let [customer, setCustomer] = useState({ name: "" })
    const navigate = useNavigate();
    let dis = useDispatch();
    let cust = useSelector(state => state.cust.currnetCustomer);


    let change = (e) => {
        let { name, value, type } = e.target;
        let c = { ...customer }
        c[name] = value;
        setCustomer(c);
    }

    const saveCust = (e) => {
        e.preventDefault();
        dis(saveCusromer(e.target.value));
        console.log(cust)
        localStorage.setItem('e.target.value', JSON.stringify(e.target.value));
        console.log(JSON.parse(localStorage.getItem('e.target.value')))

    }

    function addPizza(e) {
     
     
        navigate(`/AddPizza`)
    }

    function myOrder() {
        navigate(`/`)
    }
    function sendOrder() {
        navigate(`/`)
    }


    return (<div>

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" >
                <Box sx={{ bgcolor: '#b19725', height: '100vh' }} >
                    <Box
                        component="form"
                        noValidate
                        marginLeft="130px"
                    >
                        <h1 style={{ textAlign: "center", marginTop: "0.01vw", fontSize: "2.5vw", color: 'black', fontFamily: 'Lucida Sans Unicode', marginRight: "9vw" }}>הזמנת לקוח</h1>
                        <form>
                            <TextField

                                id="outlined-error"
                                label="שם לקוח"
                                name="name"
                                onChange={change}
                                onBlur={saveCust}
                                type="text"
                                style={{ marginLeft: "8%" }}
                            />
                            <div style={{ marginLeft: "20%", marginTop: "5%" }}>
                                <div>
                                    <input type="button" value="הוספת פיצה" onClick={addPizza} />
                                </div>
                                <br />
                                <div>
                                    <input type="button" value="ההזמנה שלי" onClick={myOrder} />
                                </div>
                                <br />
                                <div>
                                    <input type="button" value="שלח הזמנה" onClick={sendOrder} />
                                </div>
                            </div>

                        </form>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>

    </div>)
}