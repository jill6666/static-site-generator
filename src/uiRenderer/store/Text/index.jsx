const Text = ({ twStyle, text, fontSize, color, fontWeight }) => {
  return (
    <div className={twStyle} style={{ fontSize, color, fontWeight }}>
      {text}
    </div>
  );
};
export default Text;
