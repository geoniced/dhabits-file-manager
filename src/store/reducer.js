import {extend} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  tree: [],
};

const transformChildren = (children) => children.map((item) => {
  if (!item.children) {
    item.isLeaf = true;
  }
  item.key = item.id
  return item;
})

const updateTreeData = (tree, id, children) => {
  return tree.map((node) => {
    if (node.id === id) {
      return { ...node, children: transformChildren(children) };
    }

    if (node.children) {
      return { ...node, children: updateTreeData(node.children, id, children) };
    }

    return node;
  });
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ROOT:
      return extend(state, {
        tree: [action.payload],
      })
    case ActionType.LOAD_TREE:
      const {id, tree} = action.payload
      const newTree = updateTreeData(state.tree, id, tree.children);
      return extend(state, {
        tree: newTree,
      })
  }

  return state;
};

export {reducer};
