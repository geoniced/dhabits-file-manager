export const ActionType = {
  FETCH_TREE_DATA: `FETCH_TREE_DATA`,
  LOAD_TREE: `LOAD_TREE`,
};

export const loadData = (id, tree) => ({
  type: ActionType.LOAD_TREE,
  payload: {id, tree},
});
