const Text = ({ twStyle, text, fontSize, color, fontWeight, textAlign }) => {
  return (
    <div
      className={twStyle}
      style={{ width: "100%", fontSize, color, fontWeight, textAlign }}
    >
      {text}
    </div>
  );
};
export default Text;
