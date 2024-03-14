import { useState } from "react";

const Collapse = ({ title, description }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`collapse ${isCollapsed ? "" : "collapse--active"}`}>
        <div className="collapse__header" onClick={toggleCollapse}>
          <h2 className="collapse__title">{title}</h2>
          <img
            className="collapse__icon"
            src="images/divers/Vector-down.webp"
            alt="Flèche vers le bas"
          />
        </div>
        <div className="collapse__content">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Collapse;
