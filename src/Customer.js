import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { saveCusromer } from "./store/actions/customer"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fragment } from "react"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';



export default function Cusromer() {


    let [customer, setCustomer] = useState({ name: "" })
    const navigate = useNavigate();
    let dis = useDispatch();
    let cust = useSelector(state => state.cust.currnetCustomer);
    let pizzas = useSelector(state => state.pizz.cart.arr)

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

    }

    function addPizza(e) {


        navigate(`/AddPizza`, { state: { item: cust } });
    }

    function myOrder() {
        navigate(`/MyOrder`)
    }
    function sendOrder() {
        navigate(`/`)
    }


    return (<div>

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" >
                <Fragment>
                    <Box >
                        <Box
                            component="form"
                            noValidate
                            marginLeft="130px"
                        >
                            <h1 style={{ textAlign: "center", marginTop: "0.01vw", fontSize: "2.5vw", color: 'black', fontFamily: 'Lucida Sans Unicode', marginRight: "9vw" }}>ההזמנה שלי</h1>
                            <form>
                                <TextField

                                    id="outlined-error"
                                    label="שם לקוח"
                                    name="name"
                                    required
                                    defaultValue={cust}
                                    onChange={change}
                                    onBlur={saveCust}
                                    type="text"
                                    style={{ marginLeft: "8%" }}
                                />

                                <div style={{ marginLeft: "20%", marginTop: "5%", marginInline: "block" }}>
                                    <div>
                                        <input type="button" value="הוספת פיצה" onClick={addPizza} />
                                    </div>

                                    <div>
                                        <input type="button" value="שלח הזמנה" onClick={sendOrder} />
                                    </div>
                                </div>
                                {cust !== null && <div>
                                    {pizzas.map((item, key = {item}) => {
                                    return (
                                        <Fragment>
                                            <Card sx={{ width: "60%", marginLeft: "140%", marginTop: "5%", direction: "rtl", bgcolor: 'beige' }}>
                                                <CardContent sx={{ marginRight: "20%", marginTop: "5%" }}>
                                                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                                        גודל הפיצה
                                                    </Typography>
                                                    <Typography variant="h5" component="div">
                                                     {console.log(item.pizza.arrPizza.sizePizza)}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 20 }} color="text.secondary">
                                                        תוספות
                                                    </Typography>
                                                    <Typography variant="body2">
                                                    {item.pizza.arrPizza.extensionsPizza.map((item)=>{return(" "+item)})}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ marginRight: "34%", marginTop: "2%" }}>
                                                    <Button size="large">ערוך פיצה</Button>
                                                </CardActions>
                                            </Card>
                                        </Fragment>
                                    )})}
                                </div>
                                }

                                {/* {cust !== null &&
                            <> */}
                                {/* {pizzas.map((item, key = {item}) => {
                                    return (
                                        <Fragment>
                                            <Card sx={{ width: "60%", marginLeft: "140%", marginTop: "5%", direction: "rtl", bgcolor: 'beige' }}>
                                                <CardContent sx={{ marginRight: "20%", marginTop: "5%" }}>
                                                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                                        גודל הפיצה
                                                    </Typography>
                                                    <Typography variant="h5" component="div">
                                                        {item}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 20 }} color="text.secondary">
                                                        תוספות
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <br />
                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ marginRight: "34%", marginTop: "2%" }}>
                                                    <Button size="large">ערוך פיצה</Button>
                                                </CardActions>
                                            </Card>
                                        </Fragment>
                                    )
                                })
                                } */}
                                {/* </>
                        } */}
                            </form>
                        </Box>
                    </Box>
                </Fragment>
            </Container>
        </React.Fragment>

    </div >)
}