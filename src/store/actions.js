export const ActionType = {
  FETCH_TREE_DATA: `FETCH_TREE_DATA`,
  LOAD_TREE: `LOAD_TREE`,
};

export const loadData = (tree) => ({
  type: ActionType.LOAD_TREE,
  payload: tree,
});
