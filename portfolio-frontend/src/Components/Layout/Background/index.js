import "./index.scss";
import Logo from "./Logo";

const Background = () => {
  const logoIds = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div id="background-container">
      {logoIds.map((id) => (
        <div key={id} id={`logo${id}`}>
          <Logo />
        </div>
      ))}
    </div>
  );
};

export default Background;
