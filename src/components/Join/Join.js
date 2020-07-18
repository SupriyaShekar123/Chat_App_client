import React, { useEfffect, useState } from "react";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";

// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  //const classes = useStyles();

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type='text'
          placeholder='Name'
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Room</label>
        <input
          type='text'
          placeholder='Room'
          required
          value={room}
          onChange={(event) => setRoom(event.target.value)}
        />
        <Link to={"/Chat"}>
          <button className={"button mt-20"} type='submit'>
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
}
