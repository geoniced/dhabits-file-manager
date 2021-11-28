import {loadData} from "./actions";

export const loadTree = () => (dispatch, _getStore, api) => (
  api.get()
    .then(({data}) => dispatch(loadData(data)))
    .catch(() => {})
);
