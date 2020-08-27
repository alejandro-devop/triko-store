import * as Actions from '../actions/triko.session.actions';

const defaultState = {
  token: null,
  id: null,
  name: null,
  email: null,
  logged: false,
  locale: null,
  region: null,
};
/**
 * Reducer for general states.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param state
 * @param action
 * @returns {{loading}|{loading: *}}
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    case Actions.SET_SESSION:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.REMOVE_SESSION:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SET_ALL_SESSION:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.LOGOUT_USER:
      return {...defaultState};
    case Actions.CLEAR_SESSION:
      const {locale, region, regionId, countryCode, regionalConfig} = state;
      return {
        ...defaultState,
        locale,
        region,
        regionId,
        countryCode,
        regionalConfig,
      };
    default:
      return {...state};
  }
};
