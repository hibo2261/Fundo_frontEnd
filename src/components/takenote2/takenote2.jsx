import React from "react";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ImageIcon from "@mui/icons-material/Image";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import PushPinIcon from "@mui/icons-material/PushPin";
import "./takenote2.css";

import {postNote} from '../../services/Dataservice'
import ColorPopper from "../colorpopper/colorpopper";
import Button from '@mui/material/Button';
import { DashContext } from '../../pages/dashboard/dashboard'; 




export default function TakeNote2(props) {

  const [note,setNote] = React.useState({titel:"",description: "",archive: "false"})
  const [color,setColor] = React.useState('')
  const refreshDashboard = React.useContext(DashContext)

  const shiftNote2to1 = async() => {
    let response = await postNote(note)
   
    console.log(response)
    props.opTn2();
    refreshDashboard('Notes')
  };

  const listenToColorPopper = (color) => {
    setColor(color)
  }

  const takeTitle = (event) => {
    setNote((prevState)=>({...prevState,titel:event.target.value}))
  }
  const takeDesc = (event) => {
    setNote((prevState)=>({...prevState,description:event.target.value}))
  }

  const archiveNote=()=>{

    setNote(prevState=>({...prevState,archive:true}))
    console.log('archive status is now ',note.archive)
}


  return (
    <div className="tn2originbox" style={{backgroundColor:color}}>
      <div className="tn11">
        <div className="title">
          <input style={{backgroundColor:color}} onChange={takeTitle} className="sent1title" type="text" placeholder="Title" />
        </div>
        <div className="pinicon">
          <PushPinIcon />
        </div>
      </div>

      <div className="tn21">
        <input  style={{backgroundColor:color}} onChange={takeDesc} className="sen2desc" type="text" placeholder="Take new note..." />
      </div>

      <div className="tn31">
        <div>
          <AddAlertIcon fontSize="small" />
        </div>
        <div>
          <PersonAddAlt1Icon fontSize="small" />
        </div>
        <div>
          <ColorPopper  action={'create'} listenToColorPopper={listenToColorPopper}/>
        </div>
        <div>
          <ImageIcon fontSize="small" />
        </div>
        <div>
          <ArchiveIcon  onClick={archiveNote}fontSize="small" />
        </div>
        <div>
          <MoreVertIcon fontSize="small" />
        </div>
        <div>
          <UndoIcon fontSize="small" />
        </div>
        <div>
          <RedoIcon fontSize="small" />
        </div>
        
        <div>
        <Button variant="text" onClick={shiftNote2to1}>CLOSE</Button>
         
        </div>
      </div>
    </div>
  );
}
