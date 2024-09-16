import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const customIcon = new Icon({
    iconUrl: require("../../assets/images/mapIcon.png"),
    iconSize: [50, 50]
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_YeJhZkgb", form.current, "your-token").then(
      () => {
        alert("Message successfully sent!");
        window.location.reload(false);
      },
      () => {
        alert("Failed to send the message, please try again");
      }
    );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <span id="colored-letter-contact" className={letterClass}>
              C
            </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["o", "n", "t", "a", "c", "t", " ", " ", "m"]}
              idx={15}
            />
            <span id="colored-letter-contact" className={letterClass}>
              e
            </span>
          </h1>

          <p>
            Feel free to reach out with any professional enquiries! I am particularly interested in internship
            opportunities for software engineering. <span class="colored-text">Let's connect!</span>
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          City, University of London <br />
          Northampton Square <br />
          London <br />
          EC1V 0HB
        </div>

        <div className="map-wrap">
          <MapContainer center={[51.527264, -0.10247]} zoom={16} scrollWheelZoom={true}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.527264, -0.10247]} icon={customIcon}>
              <Popup><div id="popup">Maheen studies here!</div></Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
