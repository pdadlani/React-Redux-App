import {
  FETCH_XKCD_DATA_START,
  FETCH_XKCD_DATA_SUCCESS,
  FETCH_XKCD_DATA_FAILURE
} from '../actions';

const initialState = {
  xkcd: [],
  isLoading: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_XKCD_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case FETCH_XKCD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        xkcd: action.payload,
        error: ''
      }
    case FETCH_XKCD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}