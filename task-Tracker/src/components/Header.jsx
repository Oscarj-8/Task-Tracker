import Button from "./Button";

const Header = ({ title, onToggleForm }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        bgColor="green"
        txtColor="white"
        text="Add"
        onClick={onToggleForm}
      />
    </div>
  );
};

export default Header;
