export default function (state, action) {
  switch (action.type) {
    case 'ADD_USERNAME':
      const {username} = action.payload;
      return {...state, username};

    case 'ADD_LOG':
      const {log} = action.payload;
      const newList = [...state.logList, log];
      return {...state, logList: newList};

    case 'CLEAN_LIST':
      return {...state, logList: []};
    default:
      return state;
  }
}
