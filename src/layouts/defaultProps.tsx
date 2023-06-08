import { LinkOutlined, QrcodeOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-components';
import { Code, Compress, DataObject, Drafts, Shuffle, SyncAlt, TableView, Tag, Timer } from '@mui/icons-material';

export const menuData: MenuDataItem = {
  path: '/',
  children: [
    {
      name: 'JSON',
      icon: <DataObject fontSize="inherit" />,
      children: [
        {
          name: 'JSON 编辑器',
          path: '/json/json-editor',
          key: '/json/json-editor',
        },
        {
          name: 'JSON To YAML',
          path: '/json/json-to-yaml',
          key: '/json/json-to-yaml',
        },
        {
          name: 'JSON To Excel',
          path: '/json/json-to-excel',
          key: '/json/json-to-excel',
          disabled: true,
        },
      ],
    },
    {
      name: 'YAML',
      desc: 'YAML 格式处理',
      path: '/yaml',
      icon: <SyncAlt fontSize="inherit" />,
    },
    {
      name: '生成器（Generator）',
      icon: <Code fontSize="inherit" />,
      children: [
        { name: 'ID', path: '/generator/id' },
        {
          name: 'Image',
          desc: '快速便捷生成占位图',
          path: '/generator/image',
        },
      ],
    },
    {
      name: 'CodeFormatter',
      desc: '代码格式化，目前支持：JSON、JSON5',
      path: '/code-formatter',
      icon: <Code fontSize="inherit" />,
    },
    {
      name: 'URL',
      desc: 'URL(Uniform Resource Locator) 统一资源定位符，俗称网页地址，简称网址，是因特网上标准的资源的地址（Address），如同在网络上的门牌。',
      path: '/url',
      icon: <LinkOutlined />,
    },
    {
      name: 'Markdown',
      desc: 'Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。',
      path: '/markdown',
      icon: <Drafts fontSize="inherit" />,
    },
    {
      name: 'Random',
      desc: '生成包含数字、小写字母、大写字母、符号的随机字符串',
      path: '/random',
      icon: <Shuffle fontSize="inherit" />,
    },
    {
      name: 'Base 64',
      desc: 'Base64 编码、解码',
      path: '/base64',
      icon: <Compress fontSize="inherit" />,
    },
    {
      name: 'Excel',
      desc: 'Excel 转 JSON',
      path: '/excel',
      icon: <TableView fontSize="inherit" />,
    },
    {
      name: 'Hash',
      desc: '计算 MD5、SHA1、SHA256、SHA512 哈希值',
      path: '/hash',
      icon: <Tag fontSize="inherit" />,
    },
    {
      name: 'QRCode',
      desc: '为字符串生成对应的 QRCode 图片',
      path: '/qrcode',
      icon: <QrcodeOutlined />,
    },

    {
      name: '时间戳（Timestamp）',
      desc: '时间戳（Timestamp）',
      path: '/timestamp',
      icon: <Timer fontSize="inherit" />,
    },
  ],
};
