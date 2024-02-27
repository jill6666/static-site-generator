import { Input, Upload, message } from "antd";

const FormImage = ({ value, onChange, name, multiple = false }) => {
  const uploadProps = { name, multiple, accept: "image" };

  const handleOnChange = (info) => {
    const { status } = info.file;

    if (status !== "uploading") console.log(info.file, info.fileList);

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const customRequest = (context) => {
    console.log("context: ", context);
  };

  const handleOnRemove = (info) => {
    console.log("info: ", info);
  };

  return (
    <div>
      <Input allowClear value={value} onChange={onChange} />
      <Upload.Dragger
        {...uploadProps}
        onChange={handleOnChange}
        customRequest={customRequest}
        onRemove={handleOnRemove}
        height={100}
        style={{ marginTop: ".25rem" }}
      >
        <p className="ant-upload-text">Drag & Drop your files or Browse. </p>
      </Upload.Dragger>
      {value && (
        <img src={value} style={{ height: "100px", marginTop: ".25rem" }} />
      )}
    </div>
  );
};

export default FormImage;
