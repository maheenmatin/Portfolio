import "./index.scss";
import Logo from "./Logo";

const Background = () => {
  const logoIds = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <div id="sidebar-bg-container">
      {logoIds.map((id) => (
        <div key={id} id={`sbglogo${id}`}>
          <Logo />
        </div>
      ))}
    </div>
  );
};

export default Background;
