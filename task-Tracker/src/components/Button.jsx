const Button = ({ bgColor, txtColor, text, border, onClick }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: txtColor, border: border }}
    >
      {text}
    </button>
  );
};

export default Button;
