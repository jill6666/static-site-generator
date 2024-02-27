import { useState } from "react";
import { Col, InputNumber, Row, Slider } from "antd";

const FormRange = ({ onChange }) => {
  const [inputValue, setInputValue] = useState(1);

  const handleOnChange = (val) => setInputValue(val);

  const inputOnChange = (val) => {
    setInputValue(val);
    onChange(val);
  };
  return (
    <Row style={{ width: "100%" }}>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          value={inputValue}
          onChange={inputOnChange}
        />
      </Col>
      <Col span={12}>
        <Slider
          style={{ marginLeft: "40px" }}
          min={0}
          max={99}
          onChange={handleOnChange}
          onChangeComplete={onChange}
          value={inputValue}
        />
      </Col>
    </Row>
  );
};
export default FormRange;
