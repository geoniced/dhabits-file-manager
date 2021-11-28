import React from 'react'
import { Tree } from 'antd';
const {DirectoryTree} = Tree;

const treeData = [
  {
    title: 'root',
    id: 0,
    children: [
      {
        title: 'child-1',
        id: 10,
        isLeaf: true,
        children: [

        ],
      },
      {
        title: 'child-2',
        id: 20,
        children: [
          {
            title: 'child-2-1',
            id: 210,
            isLeaf: true,
            children: [

            ],
          },
        ],
      },
    ],
  },
];

const FileManager = () => {
  return (
    <DirectoryTree
      treeData={treeData}
    />
  )
}

export default FileManager
