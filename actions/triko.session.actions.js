export const SET_SESSION = '[SESSION] SET_SESSION';
export const SET_ALL_SESSION = '[SESSION] SET_ALL_SESSION';
export const LOGOUT_USER = '[SESSION] LOGOUT';
export const REMOVE_SESSION = '[SESSION] REMOVE_SESSION';
export const CLEAR_SESSION = '[SESSION] CLEAR_SESSION';

export const setSession = (key, value) => ({
  type: SET_SESSION,
  payload: {[key]: value},
});

export const removeSession = key => ({
  type: REMOVE_SESSION,
  payload: {[key]: null},
});

export const setAllSession = payload => ({
  type: SET_ALL_SESSION,
  payload,
});

export const logout = () => ({
  type: LOGOUT_USER,
});

export const clearSession = () => ({
  type: CLEAR_SESSION,
});
