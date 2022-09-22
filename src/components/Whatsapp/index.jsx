import { ReactComponent as WhatsappIcon } from "../../assets/images/whatsapp.svg";
import "./style.css";

export default function Whatsapp() {
  return (
    <WhatsappIcon
      onClick={() => window.open("https://wa.me/+966557407051", "_blank")}
      className="whatsapp"
    />
  );
}
