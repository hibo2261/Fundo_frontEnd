import React, { useReducer } from "react";
import HeaderFun from "../../components/header/header";
import TakeNote1 from "../../components/takenote1/takenote1";
import TakeNote2 from "../../components/takenote2/takenote2";
import TakeNote3 from "../../components/takenote3/takenote3";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { getNotes } from "../../services/Dataservice";
import MiniDrawer from "../../components/drawer/drawer";

export const DashContext = React.createContext();

const initialState = {
  allnotes: [],
  shiftNote: false,
  drawer: false,
  currentPage: "note",
};

function dashboardReducer(state, action) {
  switch (action.type) {
    case "SETALLNOTES":
      return { ...state, allnotes: action.payload };
    case "SETSHIFTNOTE":
      return { ...state, shiftNote: action.payload };
    case "SETDRAWER":
      return { ...state, drawer: action.payload };
    case "SETCURRENTPAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

export default function DashBoardFun() {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  const listenToHeader = () => {
    dispatch({ type: "SETDRAWER", payload: !state.drawer });
  };

  const listenToDrawer = (option) => {
    console.log(option);
    if (option === "Notes") {
      gettingAllNotes("Notes");
    } else if (option === "Archive") {
      gettingAllNotes("Archive");
    } else if (option === "Trash") {
      gettingAllNotes("Trash");
    }
  };

  const opTn1 = () => {
    dispatch({ type: "SETSHIFTNOTE", payload: true });
  };

  const opTn2 = () => {
    dispatch({ type: "SETSHIFTNOTE", payload: false });
  };

  const gettingAllNotes = async (option) => {
    let arrayOfAllNotes = await getNotes();
    if (option === "Notes") {
      console.log("a");
      dispatch({
        type: "SETALLNOTES",
        payload: arrayOfAllNotes.filter(
          (noteObj) => noteObj.archive === false && noteObj.trash === false
        ),
      });
      console.log(
        arrayOfAllNotes.filter(
          (noteObj) => noteObj.archive === false && noteObj.trash === false
        )
      );
    } else if (option === "Archive") {
      console.log("b");
      dispatch({
        type: "SETALLNOTES",
        payload: arrayOfAllNotes.filter((noteObj) => noteObj.archive === true),
      });
      console.log(
        arrayOfAllNotes.filter((noteObj) => noteObj.archive === true)
      );
    } else if (option === "Trash") {
      console.log("C");
      dispatch({
        type: "SETALLNOTES",
        payload: arrayOfAllNotes.filter((noteObj) => noteObj.trash === true),
      });
      console.log(arrayOfAllNotes.filter((noteObj) => noteObj.trash === true));
    }
  };

  const listenToTakeNoteThree = async () => {
    await gettingAllNotes("Notes");
    console.log("listentotakenotethree");
  };

  React.useEffect(() => {
    console.log("g");
    gettingAllNotes("Notes");
  }, []);

  return (
    <div>
      <DashContext.Provider value={gettingAllNotes}>
        <HeaderFun listenToHeader={listenToHeader} />
        {/* <TakeNote1 />
     <TakeNote2 /> */}
        <MiniDrawer open={state.drawer} listenToDrawer={listenToDrawer} />
        {state.shiftNote ? (
          <TakeNote2 opTn2={opTn2} />
        ) : (
          <TakeNote1 opTn1={opTn1} />
        )}

        <Container
          className="tn3container"
          style={{ width: "80vw", marginTop: "55px" }}
        >
          <Grid container spacing={2} className="gridbox">
            {state.allnotes.map((note) => (
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <TakeNote3
                  note={note}
                  listenToTakeNoteThree={listenToTakeNoteThree}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </DashContext.Provider>
    </div>
  );
}
