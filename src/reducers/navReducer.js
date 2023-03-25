const initialdrawerState = {
  title: "Keep",
};

export const navReducer = (state = initialdrawerState, action) => {
  console.log(action);
  switch (action.type) {
    case "Notes":
      return {
        ...state,
        title: "Notes",
      };

    case "Archiev":
      return {
        ...state,
        title: "Archive",
      };
    case "Trash":
      return {
        ...state,
        title: "Trash",
      };
    default:
      return state;
  }
};
