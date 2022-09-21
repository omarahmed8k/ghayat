import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { ReactComponent as Line } from "../../assets/images/heading-line.svg";
import { ReactComponent as Circle } from "../../assets/images/circle.svg";
import { ReactComponent as Dots } from "../../assets/images/dots.svg";
import { ReactComponent as Triangle } from "../../assets/images/triangle.svg";
import { ReactComponent as Location } from "../../assets/images/location.svg";
import { ReactComponent as Phone } from "../../assets/images/phone.svg";
import { ReactComponent as Email } from "../../assets/images/email.svg";
import "./style.css";

export default function Contact() {
  return (
    <div className="contact">
      <Circle className="circle" />
      <Dots className="dots-left" />
      <Dots className="dots-right" />
      <Triangle className="triangle" />
      <div className="container">
        <div className="contact-flex">
          <Fade bottom>
            <div className="contact-content">
              <div className="heading-title">
                <h2 className="title" data-title="تواصل معنا">
                  اتصل بنا
                </h2>
                <Line />
              </div>
            </div>
          </Fade>
          <div className="contact-list">
            <div className="list-item">
              <Slide right>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.3699295514737!2d46.6739856!3d24.7014678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038777756507%3A0x59a35d5dbef81ada!2z2LrYp9mK2KfYqiDZhNil2K_Yp9ix2Kkg2KfZhNij2YXZhNin2YM!5e0!3m2!1sen!2seg!4v1663776367307!5m2!1sen!2seg"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="contact-info">
                  <div
                    className="info-item"
                    onClick={() => {
                      window.open(
                        "https://goo.gl/maps/gTQS4eERKypCn7xCA",
                        "_blank"
                      );
                    }}
                  >
                    <Location />
                    <p>
                      المملكة العربية السعودية – الرياض حي العليا – شارع موسى بن
                      نصير خلف مبنى النيابة العامة.
                    </p>
                  </div>
                  <div className="info-item">
                    <Phone />
                    <p>0114647455 - 0557407051 - 0503155734</p>
                  </div>
                  <div
                    className="info-item"
                    onClick={() => {
                      window.open("mailto:info@ghayat.org", "_blank");
                    }}
                  >
                    <Email />
                    <p>info@ghayat.org</p>
                  </div>
                </div>
              </Slide>
            </div>
            <div className="list-item">
              <Slide left>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">الاسم</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="الاسم"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">البريد الالكتروني</label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="البريد الالكتروني"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">الهاتف</label>

                    <input
                      name="phone"
                      id="phone"
                      type="text"
                      placeholder="الهاتف"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">الرسالة</label>
                    <textarea
                      id="message"
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder="الرسالة"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button className="main-btn">ارسال</button>
                  </div>
                </form>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
