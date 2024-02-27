import { useState, useEffect } from "react";
import InputWithAddonAfter from "./InputWithAddonAfter";
import { LockClosedIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import { distances } from "../control/distance";

const FormDistance = ({ value, onChange }) => {
  const [locked, setLocked] = useState(false);
  const [content, setContent] = useState(distances);

  useEffect(() => {
    const refineDefault2Content = (props, option) => {
      const arr = props ? props?.split(" ") : [];
      const result = option.map((item, idx) => ({
        ...item,
        value: arr?.[idx],
      }));

      return result;
    };

    const newContent = refineDefault2Content(value, content);

    setContent(newContent);
  }, [value]);

  const handleSelectOnChange = (val, index) => {
    const disabled = val === "auto";
    let newContent = [...content];
    const value = disabled ? "" : newContent[index]?.value;

    newContent[index] = {
      ...newContent[index],
      disabled,
      value: disabled ? "" : value,
    };

    setContent(newContent);
  };

  const handleOnLock = () => {
    const shouldLocked = !locked;
    const newContent = content.map((i, index) => ({
      ...i,
      value: shouldLocked ? content[0]?.value : i?.value,
      disabled: shouldLocked && index !== 0,
    }));

    setContent(newContent);
    setLocked(shouldLocked);
  };

  const handleOnChange = (value, index) => {
    let newContent = [...content];

    if (!locked) {
      const oldVal = newContent[index];
      newContent[index] = { ...oldVal, value };
    } else {
      newContent = newContent.map((i) => ({ ...i, value }));
    }

    const fieldValue = newContent.map((item) => item?.value).join(" ");

    onChange(fieldValue);
    setContent(newContent);
  };

  const LockIcon = (args) =>
    locked ? <LockClosedIcon {...args} /> : <LockOpen1Icon {...args} />;

  return (
    <div className="relative">
      <LockIcon
        onClick={handleOnLock}
        className="absolute cursor-pointer top-[-28px] right-4 z-10"
      />

      <div className="grid grid-cols-2 gap-2">
        {content.map((item, index) => (
          <div key={item?.name}>
            <InputWithAddonAfter
              disabled={item?.disabled}
              placeholder={item?.placeholder}
              defaultValue={item?.value}
              type="number"
              onChange={(val) => handleOnChange(val, index)}
              addonOnChange={(val) => handleSelectOnChange(val, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormDistance;
