import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import {MarkerF} from '@react-google-maps/api'

const markers = [
  {
    id: 1,
    name: "Chicago, Illinois",
    position: { lat: 47.658520, lng: -117.421060 }
  },
  {
    id: 2,
    name: "Denver, Colorado",
    position: { lat: 32.890213, lng: -97.094444 }
  },
  {
    id: 3,
    name: "Los Angeles, California",
    position: { lat: 36.847010, lng: -76.126470 }
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 45.5387278, lng: -122.8651014 }
  },
  {
    id: 5,
    name: "Chicago, Illinois",
    position: { lat: 35.227085, lng: -80.843124 }
  },
  {
    id: 6,
    name: "Denver, Colorado",
    position: { lat: 27.773056, lng: -82.639999 }
  },
  {
    id: 7,
    name: "Los Angeles, California",
    position: { lat: 35.401085, lng: -80.428505 }
  },
  {
    id: 8,
    name: "New York, New York",
    position: { lat: 38.575764, lng: -121.478851 }
  },
  {
    id: 9,
    name: "Los Angeles, California",
    position: { lat: 45.522896, lng: -122.989830 }
  },
  {
    id: 10,
    name: "New York, New York",
    position: { lat: 39.983334, lng: -82.983330 }
  }
];

function Map() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers.map(({ id, name, position }) => (
        <MarkerF
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default Map;