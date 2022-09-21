import "./style.css";

export default function Services(props) {
  const { mode } = props;

  return (
    <div className="services">
      <h1>{mode === "light" ? "Services Dark" : "Services"}</h1>
    </div>
  );
}
