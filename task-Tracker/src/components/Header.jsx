import Button from "./Button";

const Header = ({ title, onToggleForm, isToggled }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        border="none"
        bgColor={isToggled ? "red" : "green"}
        txtColor="white"
        text={isToggled ? "Close" : "Add"}
        onClick={onToggleForm}
      />
    </div>
  );
};

export default Header;
