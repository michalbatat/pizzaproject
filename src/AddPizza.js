import { Select } from "@mui/material";
import { useState } from "react";
import { addPizza } from "./store/actions/pizza"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

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
import { addPizzaToCart } from "./store/actions/pizza";


export default function AddPizza() {

    let sizePizza = ["S", "M", "L"]
    let extension1 = [0, 1, 2, 3];
    let extension2 = ["זיתים", "תירס", "עגבניות", "פטריות"];
    let [pizz, setPizz] = useState({ size: "", boolExtensions: [false, false, false, false], extensions: ["", "", "", ""] })
    let [cart, setCart] = useState({ arrPizza: { name:"",sizePizza: "", extensionsPizza: [] } })
    let i = extension2.length + 1;
    let dis = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    let valExt = 0;
    let k = 0;
    let p;
    let myCart = useSelector(state => state.pizz.cart.arr)
    let cust = useSelector(state => state.cust.currnetCustomer);

    let change = (e) => {
        let { name, value, type } = e.target;
       console.log(e.target)
       valExt = value;
        console.log("name" + name)
        console.log("type" + type)
        console.log("value" + value)
        if (type === "checkbox") {
            value = e.target.checked;

            p = { ...pizz }
            p.boolExtensions[valExt] = value;
            setPizz(p);
            console.log(p)
        }

        if (type === "select-on") {
            value = e.target.selected;
            console.log("+++++" + value)
            p = { ...pizz }
            p[name] = value;
            setPizz(p);
        }


    }

    let savePizzaInCart = (pizz) => {
        let c = { ...cart }
        c.arrPizza.name=cust;
        c.arrPizza.sizePizza = pizz.size;
        for (i = 0; i < pizz.extensions.length; i++) {
            if (pizz.extensions[i] !== "") {
                c.arrPizza.extensionsPizza.push(pizz.extensions[i])
                console.log("+" + c.arrPizza.extensionsPizza[i])
            }
            else
                break;

        }
        setCart(c);
        
        dis(addPizzaToCart(c));
        localStorage.setItem('c', JSON.stringify(c));
        console.log(JSON.parse(localStorage.getItem('c')))
        console.log(myCart)
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
        console.log(location.state.item)
    }

    const savePizza = (e) => {
        e.preventDefault();
        ezer();
        dis(addPizza(e));
        localStorage.setItem('pizz', JSON.stringify(pizz));
        console.log(JSON.parse(localStorage.getItem('pizz')))

        console.log(pizz)
        savePizzaInCart(pizz)
        alert("הפיצה נוספה בהצלחה")
        navigate(`/Customer`)
    }

    return (
        <div>

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm" >
                    <Box sx={{ bgcolor: 'beige', height: '100vh' }} >

                        <Box
                            component="form"
                            noValidate
                            marginLeft="130px"
                        >

                            <h1 style={{ textAlign: "center", marginTop: "0.01vw", fontSize: "2.5vw", color: 'black', fontFamily: 'Lucida Sans Unicode', marginRight: "9vw" }}>הוספת פיצה</h1>
                            <form>

                                <div >
                                    <FormControl sx={{ marginLeft: 25, marginTop: "5%", minWidth: 120 }} >
                                        <InputLabel id="demo-simple-select-error-label">גודל הפיצה</InputLabel>
                                        <select
                                            labelId="demo-simple-select-error-label"
                                            id="demo-simple-select-error"
                                            label="גודל הפיצה"
                                            onChange={change}
                                            name="size"
                                            type="select"
                                        >
                                            {sizePizza.map((item) => {
                                                return (
                                                    <option value={item}>{item}</option>
                                                )
                                            })}</select>
                                        
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
                                    <input type="button" value="שמור פיצה" onClick={savePizza} />

                                </div>
                            </form >
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>

        </div>
    )

}

