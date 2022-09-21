import "./style.css";

export default function Services(props) {
  const { mode } = props;
  console.log(mode);
  return (
    <div className="services">
      <h1>{mode === "light" ? "Services Light" : "Services Dark"}</h1>
    </div>
  );
}
