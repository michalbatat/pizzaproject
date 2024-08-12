import { useLocation } from "react-router";

export default function AddPizza() {

    const location = useLocation();

    let change = (e) => {
        let { name, value, type } = e.target;
        if (type === "number")
            value = +value;
        if (type === "checkbox")
            value = e.target.checked;

        location.state.item[name] = value;


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
                                            return (<ul > {extension2[item]}
                                                <div style={{ direction: "rtl", display: "inline-block" }}>
                                                    <Checkbox onChange={change} name="boolExtensions" type="checkbox" value={item}>{item}</Checkbox>
                                                </div>
                                            </ul>)
                                        })}</div>
                                </div>

                                <div style={{ marginLeft: 120 }}>
                                    <input type="button" value="עדכן פיצה" onClick={save} />

                                </div>
                            </form >
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    )
}

