import { ApiRoute } from "../const";
import {loadData} from "./actions";

export const loadTree = (id) => (dispatch, _getStore, api) => (
  api.get(ApiRoute.CONTENT, {
    params: {
      dirId: id
    },
  })
    .then(({data}) => dispatch(loadData(id ? id : 0, data)))
    .catch(() => {})
);
