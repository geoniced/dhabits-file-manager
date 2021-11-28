import React from 'react'
import { Tree } from 'antd';
import { connect } from 'react-redux';
import { loadTree } from '../../store/api-actions';
const {DirectoryTree} = Tree;

const FileManager = ({tree, loadTreeChildren}) => {
  const onLoadData = (props) => {
    const {id} = props
    return new Promise((resolve) => {
      loadTreeChildren(id)
      resolve();
    });
  }

  return (
    <DirectoryTree
      treeData={tree[0].children}
      loadData={onLoadData}
    />
  )
}

const mapStateToProps = (state) => ({
  tree: state.tree,
});

const mapDispatchToProps = (dispatch) => ({
  loadTreeChildren(id) {
    dispatch(loadTree(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FileManager);
