import PageContainer from "@/components/ui/PageContainer.tsx";
import type { SegmentedProps } from "antd";
import { Button, Card, Input, Segmented, Space } from "antd";
import { useCallback, useState } from "react";

import TextResultBox from "@/components/TextResultBox.tsx";
import type { BaseType } from "@/lib/BaseEncoder.ts";
import { decode as baseDecode, encode as baseEncode } from "@/lib/BaseEncoder.ts";

export const Component = () => {
  const [type, setType] = useState<BaseType>("base-64");
  const [plain, setPlain] = useState<string>("");
  const [target, setTarget] = useState<string>("");

  const segmentedOptions: SegmentedProps["options"] = [
    { label: "Base16", value: "base-16" },
    { label: "Base32", value: "base-32", disabled: false },
    { label: "Base36", value: "base-36", disabled: false },
    { label: "Base58", value: "base-58", disabled: false },
    { label: "Base64", value: "base-64" },
  ];

  const encode = useCallback(() => {
    const result = baseEncode(type, plain);
    setTarget(result);
  }, [type, plain]);

  const decode = useCallback(() => {
    const result = baseDecode(type, plain);
    setTarget(result);
  }, [type, plain]);

  return (
    <PageContainer className="mx-auto max-w-screen-md pt-4">
      <Card>
        <Segmented
          block={true}
          value={type}
          options={segmentedOptions}
          onChange={(value) => {
            setType(value as BaseType);
          }}
        />
        <div className="mt-4">
          <Input.TextArea
            value={plain}
            onChange={(event) => {
              setPlain(event.target.value);
            }}
            placeholder="文本"
            autoSize={{ minRows: 5, maxRows: 10 }}
            showCount
          />
        </div>
        <div className="mt-4">
          <Space.Compact>
            <Button onClick={encode}>编码</Button>
            <Button onClick={decode}>解码</Button>
          </Space.Compact>
        </div>
        <div className="mt-4">
          <TextResultBox title="结果" text={target} />
        </div>
      </Card>
    </PageContainer>
  );
};
