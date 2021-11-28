export const ActionType = {
  FETCH_TREE_DATA: `FETCH_TREE_DATA`,
  LOAD_TREE: `LOAD_TREE`,
  LOAD_ROOT: `LOAD_ROOT`,
};

export const loadData = (id, tree) => ({
  type: ActionType.LOAD_TREE,
  payload: {id, tree},
});

export const loadRoot = (tree) => ({
  type: ActionType.LOAD_ROOT,
  payload: tree,
});
