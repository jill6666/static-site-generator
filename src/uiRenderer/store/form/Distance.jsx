import { useState, useEffect } from "react";
import InputWithAddonAfter from "./InputWithAddonAfter";

const defaultContent = [
  { name: "top", placeholder: "Top" },
  { name: "right", placeholder: "Right" },
  { name: "bottom", placeholder: "Bottom" },
  { name: "left", placeholder: "Left" },
];

const FormDistance = ({ value, onChange }) => {
  const [locked, setLocked] = useState(false);
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const refineDefault2Content = (props, option) => {
      const arr = props ? props?.split(" ") : [];
      const result = option.map((item, idx) => {
        const target = arr[idx];
        const content = target;
        return { ...item, value: content };
      });

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

  const lockedIcon = locked ? "ri-lock-fill" : "ri-lock-unlock-line";

  return (
    <div style={{ position: "relative" }}>
      <i
        onClick={handleOnLock}
        className={lockedIcon}
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "-28px",
          zIndex: "5",
          right: 8,
        }}
      ></i>

      <div
        style={{
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          display: "grid",
          gap: ".25rem",
        }}
      >
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
