import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const customIcon = new Icon({
    iconUrl: require("../../assets/images/mapIcon.png"), //will not work without require
    iconSize: [50, 50],
  });

  const sendMailChimpData = () => {
    const formData = {
      EMAIL: emailValue,
      NAME: nameValue,
      SUBJECT: subjectValue,
      MESSAGE: messageValue,
    };

    function queryString(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
    }

    const dataToAppend = queryString(formData);
    const mailChimpLink =
      "https://gmail.us14.list-manage.com/subscribe/post?u=f933c7739d247bac358c32b6b&amp;id=34f017647d&amp;f_id=003e4fe5f0&";

    return `${mailChimpLink}${dataToAppend}`;
  };

  return (
    <>
      <div className="container" id="contact-container">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} colored-letter`}>C</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["o", "n", "t", "a", "c", "t", " ", " ", "m"]}
              idx={15}
            />
            <span className={`${letterClass} colored-letter`}>e</span>
          </h1>

          <p>
            Feel free to reach out with any professional enquiries! I am particularly interested in internship
            opportunities for software engineering. <span class="contact-colored-text">Let's connect!</span>
          </p>

          <div className="contact-form">
            <form action={sendMailChimpData()} method="POST" noValidate target="_blank">
              <ul>
                <li className="half">
                  <input
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    placeholder="Name"
                    type="text"
                    name="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    value={subjectValue}
                    onChange={(e) => setSubjectValue(e.target.value)}
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND VIA MAILCHIMP" />
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
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.527264, -0.10247]} icon={customIcon}>
              <Popup>
                <div id="popup">Maheen studies here!</div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
