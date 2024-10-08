import { PageContainer } from "@ant-design/pro-components";
import type { UploadProps } from "antd";
import { Button, Card, Space, Upload } from "antd";
import FileSaver from "file-saver";
import { useState } from "react";
import * as XLSX from "xlsx";

import type { IAceOptions } from "react-ace";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

const options: IAceOptions = {
  useWorker: false,
  tabSize: 2,
  wrap: true,
};

export const Component = () => {
  const [result, setResult] = useState<string>();

  const save = () => {
    if (!result || result === "") {
      return;
    }
    const t = Date.now();
    const file = new File([result], `${t}.json`, {
      type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(file);
  };
  const uploadProps: UploadProps = {
    accept: ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
    showUploadList: false,
    beforeUpload: async () => {
      return false;
    },
    onChange: (info) => {
      const files = info.fileList;
      if (files) {
        for (const key in files) {
          if (Object.prototype.hasOwnProperty.call(files, key)) {
            const fileReader = new FileReader();
            fileReader.onload = (e: ProgressEvent<FileReader>) => {
              if (!e.target) {
                return;
              }
              let data = e.target.result as ArrayBuffer;
              data = new Uint8Array(data);
              const workbook = XLSX.read(data, { type: "array" });
              console.log(workbook);
              const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
              const rows = XLSX.utils.sheet_to_json(firstSheet) || [];
              setResult(JSON.stringify(rows, null, 2));
            };
            const file = files[key];
            if (file) {
              fileReader.readAsArrayBuffer(file.originFileObj as File);
            }
          }
        }
      }
    },
  };
  return (
    <PageContainer title="Excel 转 JSON" className="mx-auto max-w-screen-md pt-4">
      <Card>
        <Space direction="horizontal">
          <Upload {...uploadProps}>
            <Button type="primary">上传 Excel</Button>
          </Upload>
          <Button onClick={save}>下载为 JSON 文件</Button>
        </Space>

        <div className="mt-4">
          <AceEditor mode="json" theme="monokai" width="100%" setOptions={options} value={result} />
        </div>
      </Card>
    </PageContainer>
  );
};
