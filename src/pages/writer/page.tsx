import { useCallback, useState } from 'react';

import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

import type { ReactQuillProps } from 'react-quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import CopyButtonWrapper from '../../components/CopyButtonWrapper.tsx';

const Writer = () => {
  const [value, setValue] = useState<string>('');

  const styles = {
    quill: {
      height: '700px',
    },
  };

  const quillProps: ReactQuillProps = {
    // eslint-disable-next-line max-params
    onChange: (value) => {
      setValue(value);
    },
    modules: {
      syntax: {
        highlight: useCallback((text: string) => {
          return hljs.highlightAuto(text).value;
        }, []),
      },
      toolbar: [
        [{ header: '1' }, { header: '2' }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        ['blockquote', 'code', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        [{ script: 'sub' }, { script: 'super' }],
        ['link', 'image'],
      ],
    },
    formats: [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'code',
      'code-block',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
      'script',
      'background',
      'color',
      'align',
    ],
  };

  return (
    <div>
      <div>
        <CopyButtonWrapper text={value}>复制源码</CopyButtonWrapper>
      </div>
      <div>
        <ReactQuill
          theme="snow"
          defaultValue={value}
          modules={quillProps.modules}
          formats={quillProps.formats}
          onChange={quillProps.onChange}
          style={styles.quill}
        />
      </div>
    </div>
  );
};
export default Writer;
