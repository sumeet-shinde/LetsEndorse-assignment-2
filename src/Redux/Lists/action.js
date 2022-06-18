export const GET_USP = "GET_USP";
export const GET_REASON = "GET_REASON";
export const GET_AVENUES = "GET_AVENUES";
export const GET_POTENTIAL = "GET_POTENTIAL";
export const GET_USP_LOADING = "GET_USP_LOADING";
export const GET_USP_ERROR = "GET_USP_ERROR";

export const getUsp = (usp) => ({ type: GET_USP, payload: usp });
export const getReason = (reason_for_location) => ({
  type: GET_REASON,
  payload: reason_for_location,
});
export const getAvenues = (marketing_avenues) => ({
  type: GET_AVENUES,
  payload: marketing_avenues,
});
export const getPotential = (scaleup_potential) => ({
  type: GET_POTENTIAL,
  payload: scaleup_potential,
});
export const getUspLoading = () => ({ type: GET_USP_LOADING });
export const getUspError = () => ({ type: GET_USP_ERROR });
