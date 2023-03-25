import React from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './takenote1.css'
import ImageIcon from '@mui/icons-material/Image';



export default function TakeNote1(props) {
   

    const shiftNote = () => {
        props.opTn1();
    }

  return (
    <div>
      <div className="org1"  onClick ={shiftNote}>
        <div className="nt1">
          <div className="nt11" >Take Note...</div>
        </div>
        <div className="nt2">
          <div className="nt21">
            <CheckBoxIcon />{" "}
          </div>
          <div className="nt22">
            <ImageIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
