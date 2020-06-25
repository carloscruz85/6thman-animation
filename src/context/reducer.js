export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SECTION_0":
      return {
        ...state,
        section0: action.data,
      };
    case "SET_SECTION_1":
      return {
        ...state,
        section1: action.data,
      };
    case "SET_SECTION_2":
      return {
        ...state,
        section2: action.data,
      };

    default:
      return state;
  }
};
