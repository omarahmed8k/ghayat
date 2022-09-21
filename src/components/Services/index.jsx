import Fade from "react-reveal/Fade";
import "./style.css";

export default function Services(props) {
  const { mode } = props;
  return (
    <div className={`services ${mode === "dark" ? "dark" : "light"}`}>
      <h1>شسي</h1>
    </div>
  );
}
