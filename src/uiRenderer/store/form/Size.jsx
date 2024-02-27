import InputWithAddonAfter from "./InputWithAddonAfter";

const FormSize = ({ onChange, value }) => {
  return (
    <div style={{ maxWidth: "200px" }}>
      <InputWithAddonAfter
        defaultValue={value}
        type="number"
        onChange={onChange}
      />
    </div>
  );
};
export default FormSize;
