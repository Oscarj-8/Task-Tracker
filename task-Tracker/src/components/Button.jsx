const Button = ({ bgColor, txtColor, text, onClick }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      {text}
    </button>
  );
};

export default Button;
