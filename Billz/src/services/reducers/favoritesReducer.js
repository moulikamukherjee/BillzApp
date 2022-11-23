export default (state, action) => {
    switch (action.type) {
      case "starClick":
        return {
          selected: action.payload
        };
      default:
        return state;
    }
  };