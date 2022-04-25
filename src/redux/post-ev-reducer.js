const ADD_POST_EV = 'ADD_POST_EV';
const UPDATE_NEW_POST_TXT = 'UPDATE_NEW_POST_TXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  newPostTxt: 'Gime all ur LOVE!',
  eventsList: [
    { key: '', id: 1, data: '2.21.22', ev: 'Meating with Teammembers' },
    { key: '', id: 2, data: '8.3.22', ev: "Women's day" },
    { key: '', id: 3, data: '15.3.22', ev: 'First fast for peace' },
    { key: '', id: 4, data: '4.4.22', ev: 'Glamoure show' },
    { key: '', id: 5, data: '3.5.22', ev: 'Queen and King' },
  ],
  profile: null,
};

const postEvReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_EV:
      let newPostEvItem = {
        key: '',
        id: 6,
        data: '11.5.22',
        ev: state.newPostTxt,
      };
      return {
        eventsList: [...state.eventsList, newPostEvItem],
        newPostTxt: '',
      };
    case UPDATE_NEW_POST_TXT: {
      return { ...state, newPostTxt: action.updateTxt };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST_EV });
export const onChangeTextAC = (text) => ({
  type: UPDATE_NEW_POST_TXT,
  updateTxt: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default postEvReducer;
