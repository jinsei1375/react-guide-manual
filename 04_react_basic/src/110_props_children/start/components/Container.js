import "./Container.css";

const Container = ({ title, children, first }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {children}
      {first}
    </div>
  );
};

export default Container;
