export const FETCH_SUBJECTS_REQUEST = 'FETCH_SUBJECTS_REQUEST';
export const FETCH_SUBJECTS_SUCCESS = 'FETCH_SUBJECTS_SUCCESS';
export const FETCH_SUBJECTS_FAILURE = 'FETCH_SUBJECTS_FAILURE';

export const fetchSubjectsRequest = () => ({
    type: FETCH_SUBJECTS_REQUEST
});

export const fetchSubjectsSuccess = (subjects) => ({
    type: FETCH_SUBJECTS_SUCCESS,
    payload: subjects
});

export const fetchSubjectsFailure = (error) => ({
    type: FETCH_SUBJECTS_FAILURE,
    payload: error
});

export const fetchSubjects = () => {
    return (dispatch) => {
      dispatch(fetchSubjectsRequest());
      fetch('/api/subjects/')
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchSubjectsSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchSubjectsFailure(error.message));
        });
    };
};