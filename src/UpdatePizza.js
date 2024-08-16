import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import { Select, MenuItem } from "@mui/material";
import { updatePizza } from './store/actions/pizza';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function AddPizza() {

    const location = useLocation();
    let sizePizza = ["S", "M", "L"]
    let extension1 = [0, 1, 2, 3];
    let extension2 = ["זיתים", "תירס", "עגבניות", "פטריות"];
    let cust = useSelector(state => state.cust.currnetCustomer);

    let change = (e) => {
        let { name, value, type } = e.target;
        location.state.item[name] = value;


    }

    let updateChange = (e) => {
        e.preventDefault();
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
                            <h1 style={{ textAlign: "center", marginTop: "0.01vw", fontSize: "2.5vw", color: 'black', fontFamily: 'Lucida Sans Unicode', marginRight: "9vw" }}>עידכון פיצה</h1>
                            <form>
                                <div >
                                    <FormControl sx={{ marginLeft: 25, marginTop: "5%", minWidth: 120 }} >
                                        <InputLabel >גודל הפיצה</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-error-label"
                                            id="demo-simple-select-error"
                                            defaultValue={location.state.item.size}
                                            type="select"
                                            onChange={change}
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
                                            console.log(location.state.item)
                                            return (<ul > {extension2[item]}
                                                <div style={{ direction: "rtl", display: "inline-block" }}>
                                                    <Checkbox checked={extension2[item]==location.state.item.extensionsPizza.map((p) => {
                                                        console.log(extension2[item])
                                                        if(p === extension2[item]){
                                                            console.log(p)
                                                            return p;
                                                        }
                                                    })} onChange={change} name="boolExtensions" type="checkbox" value={item}>{item}</Checkbox>
                                                </div>
                                            </ul>)
                                        })}</div>
                                </div>

                                <div style={{ marginLeft: 120 }}>
                                    <input type="button" value="עדכן פיצה" onClick={updateChange} />

                                </div>
                            </form >
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    )
}

