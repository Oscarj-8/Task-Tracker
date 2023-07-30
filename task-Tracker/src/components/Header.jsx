import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button bgColor="green" txtColor="white" text="Add" onClick={onClick} />
    </div>
  );
};

export default Header;
