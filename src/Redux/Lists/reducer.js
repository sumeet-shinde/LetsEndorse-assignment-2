import {
  GET_AVENUES,
  GET_POTENTIAL,
  GET_REASON,
  GET_USP,
  GET_USP_ERROR,
  GET_USP_LOADING,
} from "./action";

const initState = {
  usp: [],
  reason_for_location: [],
  marketing_avenues: [],
  scaleup_potential: [],
  loading: false,
  error: false,
};

export const ListReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_USP:
      return { ...store, usp: payload, loading: false, error: false };

    case GET_REASON:
      return {
        ...store,
        reason_for_location: payload,
        loading: false,
        error: false,
      };

    case GET_AVENUES:
      return {
        ...store,
        marketing_avenues: payload,
        loading: false,
        error: false,
      };

    case GET_POTENTIAL:
      return {
        ...store,
        scaleup_potential: payload,
        loading: false,
        error: false,
      };

    case GET_USP_LOADING:
      return { ...store, loading: true };

    case GET_USP_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
