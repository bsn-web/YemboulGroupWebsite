"use client";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMapEvents,
  ZoomControl
} from "react-leaflet";
import L from "leaflet";

const cities = [
  { name: "Tunis", coords: [36.8065, 10.1815], country: "tunisia", logo: "/images/logo.png" },
  { name: "SFAX", coords: [34.7406, 10.7603], country: "tunisia", logo: "/images/logo.png" },
  { name: "Casablanca", coords: [33.5731, -7.5898], country: "morocco", logo: "/images/logo4.png" },
  { name: "Rabat", coords: [34.0209, -6.8416], country: "morocco", logo: "/images/logo4.png" },
  { name: "Tanger", coords: [35.7796, -5.8137], country: "morocco", logo: "/images/logo4.png" },
  { name: "Mohammadia", coords: [33.6833, -7.3833], country: "morocco", logo: "/images/logo4.png" },
  { name: "Marrakech", coords: [31.6295, -7.9811], country: "morocco", logo: "/images/logo4.png" },
  { name: "KENITRA", coords: [34.2610, -6.5802], country: "morocco", logo: "/images/logo4.png" },
  { name: "Alger", coords: [36.7538, 3.0588], country: "algeria", logo: "/images/logo.png" },
  { name: "Oran", coords: [35.6971, -0.6308], country: "algeria", logo: "/images/logo.png" },
  { name: "Annaba", coords: [36.9041, 7.7550], country: "algeria", logo: "/images/logo.png" },
  { name: "Ouargla", coords: [31.9493, 5.3250], country: "algeria", logo: "/images/logo.png" },
  { name: "Hassi Messaoud", coords: [31.7000, 6.0667], country: "algeria", logo: "/images/logo.png" },
  { name: "Batna", coords: [35.5500, 6.1667], country: "algeria", logo: "/images/logo.png" },
  { name: "Béjaïa", coords: [36.7509, 5.0567], country: "algeria", logo: "/images/logo.png" },
  { name: "Skikda", coords: [36.8663, 6.9063], country: "algeria", logo: "/images/logo.png" },
  { name: "Tizi Ouzou", coords: [36.7169, 4.0497], country: "algeria", logo: "/images/logo.png" },
  { name: "Blida", coords: [36.4722, 2.8333], country: "algeria", logo: "/images/logo.png" },
  { name: "Tiaret", coords: [35.3667, 1.3167], country: "algeria", logo: "/images/logo.png" },

];

const pinIcon = new L.DivIcon({
  html: "📍",
  iconSize: [24, 24],
  className: ""
});

const createLogoIcon = (url) =>
  new L.Icon({
    iconUrl: url,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

function ZoomWatcher({ setZoom }) {
  useMapEvents({
    zoomend: (e) => {
      setZoom(e.target.getZoom());
    }
  });
  return null;
}

export default function MapWithLogos() {
  const [zoom, setZoom] = useState(5);

  return (
    <MapContainer
      center={[34.5, 2]}
      zoom={5}
      minZoom={5}
      maxZoom={10}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      />

      <ZoomControl position="bottomright" />
      <ZoomWatcher setZoom={setZoom} />

      {cities.map((city, idx) => (
        <Marker
          key={idx}
          position={city.coords}
          icon={zoom >= 7 ? createLogoIcon(city.logo) : pinIcon}
        >
          {zoom >= 7 && (
            <Tooltip
              direction="left"
              offset={[-30, 0]}
              permanent
              opacity={1}
              className="city-tooltip"
            >
              {city.name}
            </Tooltip>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
}
