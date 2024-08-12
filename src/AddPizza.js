import { Select } from "@mui/material";
import { useState } from "react";
import { addPizza } from "./store/actions/pizza"
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { addToCart } from "./store/actions/order";


export default function AddPizza() {

    let sizePizza = ["S", "M", "L"]
    let extension1 = [0, 1, 2, 3];
    let extension2 = ["זיתים", "תירס", "עגבניות", "פטריות"];
    let [pizz, setPizz] = useState({ size: "", boolExtensions: [false, false, false, false], extensions: ["", "", "", ""] })
    let i = extension2.length + 1;
    let dis = useDispatch();
    const navigate = useNavigate();
    let valExt = 0;
    let k = 0;
    let p;
    let cust=useSelector(state=>state.cust.currnetCustomer);
    console.log(JSON.parse(localStorage.getItem('cust')))
    let change = (e) => {
        let { name, value, type } = e.target;
        valExt = value;

        if (type === "checkbox") {
            value = e.target.checked;
            console.log(value)
            p = { ...pizz }
            p.boolExtensions[valExt] = value;
            setPizz(p);
            console.log(p)
        }

        if (type === "select") {
            value = e.target.selected;
            console.log("+++++" + value)
            p = { ...pizz }
            p[name] = value;
            setPizz(p);
        }

        
    }


    function ezer() {
        let ex = { ...pizz }
        for (let j = 0; j < i; j++) {

            if (pizz.boolExtensions[j] === true) {
                ex.extensions[k] = extension2[j];
                k += 1;
            }
        }
        setPizz(ex);
        console.log(pizz.extensions)
        console.log(pizz.size)
    }

    const save = (e) => {
        e.preventDefault();
        ezer();
        dis(addPizza(e));
        localStorage.setItem('pizz', JSON.stringify(pizz));
        dis(addToCart(JSON.parse(localStorage.getItem('pizz'))))      
        localStorage.setItem('cart', JSON.stringify(pizz));
        console.log(JSON.parse(localStorage.getItem('cart')))
        console.log(JSON.parse(localStorage.getItem('pizz')))
        
        alert("הפיצה נוספה בהצלחה")
        navigate(`/Customer`)
    }

    return (
        <div>

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm" >
                    <Box sx={{ bgcolor: '#b19725', height: '100vh' }} >

                        <Box
                            component="form"
                            noValidate
                            marginLeft="130px"
                        >

                            <h1 style={{ textAlign: "center", marginTop: "0.01vw", fontSize: "2.5vw", color: 'black', fontFamily: 'Lucida Sans Unicode', marginRight: "9vw" }}>הוספת פיצה</h1>
                            <form>

                                <div >
                                    <FormControl sx={{ marginLeft: 25, marginTop: "5%", minWidth: 120 }} >
                                        <InputLabel >גודל הפיצה</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-error-label"
                                            id="demo-simple-select-error"
                                            onChange={change}
                                            type="select"
                                            name="size"
                                        >
                                            {sizePizza.map((item) => {
                                                return (
                                                    <MenuItem value={item}>{item}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                </div>

                                <div style={{ display: "table-row-group" }}>
                                   
                                    <div style={{ marginLeft: 1, marginTop: "-50%" }}>
                                        {extension1.map((item, index) => {
                                            return (<ul > {extension2[item]}
                                                <div style={{ direction: "rtl", display: "inline-block" }}>
                                                    <Checkbox onChange={change} name="boolExtensions" type="checkbox" value={item}>{item}</Checkbox>
                                                </div>
                                            </ul>)
                                        })}</div>
                                </div>

                                <div style={{ marginLeft: 120 }}>
                                    <input type="button" value="שמור פיצה" onClick={save} />

                                </div>
                            </form >
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>

        </div>
    )

}

