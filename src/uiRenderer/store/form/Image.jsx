import { Input, Image } from "antd";

const FormImage = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <Input
        value={value}
        onChange={onChange}
        placeholder="Input the image url."
      />
      {value && <Image src={value} width={200} />}
    </div>
  );
};

export default FormImage;
