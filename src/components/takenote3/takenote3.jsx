import React from "react";
import "./takenote3.css";
import InputBase from "@mui/material/InputBase";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

import CollectionsIcon from "@mui/icons-material/Collections";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ColorPopper from "../colorpopper/colorpopper";
import { updateArchive } from "../../services/Dataservice";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateDelete , updateNote, getNotes} from "../../services/Dataservice";
import { DashContext } from "../../pages/dashboard/dashboard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TakeNote3 (props) {
 
 
   const [open, setOpen] = React.useState(false);
  
    const [editNoteObj, setEditNoteObj] = React.useState({ titel: props.titel,
      description: props.description,});
  
    const handleOpen = (note) => {
    setEditNoteObj({ ...note });
    setOpen(true);
  };
  
   const handleClose = () =>{
     setOpen(false);

   }
    const refreshDashboard = React.useContext(DashContext);

   const updateArchiveStatus = () => {
    updateArchive(props.note._id, props.note.userId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
    const updateDeleteStatus = () => {
    updateDelete(props.note._id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    refreshDashboard("Notes");
  };
  
    const updateTitle = (event) => {
    setEditNoteObj((prevState) => ({
      ...prevState,
      titel: event.target.value,
    }));
  };

    const updateDescription = (event) => {
    setEditNoteObj((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };
  
  const updatetheNote = () => {
   // let updateNoteobj = { ...editNoteObj}
  
    updateNote( editNoteObj._id, editNoteObj)
    .then((response) => { console.log(response); props.listenToTakeNoteThree() })
    .catch((error) => { console.log(error) })
  setOpen(false);
     console.log("NOTE IS UPDATED.......")
    // console.log(editNoteObj)
  }

 return (
    <>
      <Card className="indicard" style={{ backgroundColor: props.note.color }}>
        <CardContent onClick={() => handleOpen(props.note)}>
          <Typography variant="h5" gutterBottom>
            {props.note.titel}
          </Typography>
          <Typography component="div" color="text.secondary" paragraph="true">
            {props.note.description}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="iconlist">
            <AddAlertIcon />
            <PersonAddAlt1Icon />
            <ColorPopper action={"edit"} note={props.note} />
            <CollectionsIcon />
            <ArchiveIcon onClick={updateArchiveStatus} />
            <DeleteIcon onClick={updateDeleteStatus} />
            <MoreVertIcon />
          </div>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: props.note.color }}>
          <Box>
            <InputBase
              fullWidth="true"
              multiline="true"
              style={{ fontSize: "25px" }}
              type="text"
              defaultValue={props.note.titel}
              onChange={updateTitle}
            />
          </Box>
          <Box>
            <InputBase
              fullWidth="true"
              multiline="true"
              type="text"
              defaultValue={props.note.description}
              onChange={updateDescription}
            />
          </Box>
          <button onClick={updatetheNote}> UPDATE</button>
        </Box>
      </Modal>
    </>
  );
}
