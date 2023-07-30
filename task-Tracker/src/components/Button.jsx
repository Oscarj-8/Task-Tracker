const Button = ({ bgColor, txtColor, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: bgColor, color: txtColor }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
