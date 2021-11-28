import {
  BookOutlined,
  FileZipOutlined,
  PictureOutlined,
} from '@ant-design/icons';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFileType = (fileName) => /\.(.[^.]*)$/.exec(fileName)?.[1]

const FileTypeIconMap = {
  'zip': <FileZipOutlined />,
  'jpg': <PictureOutlined />,
  'epub': <BookOutlined />,
}

export const getIcon = (title) => {
  const fileType = getFileType(title);
  return FileTypeIconMap[fileType];
}
