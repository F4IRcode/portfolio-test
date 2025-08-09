import './ShapeBlurButton.css';

const ShapeBlurButton = ({ children, onClick }) => {
  return (
    <button className="shape-blur-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default ShapeBlurButton;
