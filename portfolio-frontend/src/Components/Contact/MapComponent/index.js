import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import { Icon } from "leaflet";
import "./index.scss";

const customIcon = new Icon({
  iconUrl: require("../../../assets/images/mapIcon.png"), //will not work without require
  iconSize: [50, 50],
});

const MapComponent = () => {
  return (
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
  );
};

export default MapComponent;
