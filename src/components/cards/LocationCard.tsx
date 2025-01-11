import React from 'react';
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const LocationCard = () => {

  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '' });

  const center = useMemo(() => ({ lat: 21.1702241, lng: 72.8309346 }), []);

  if (loadError) {
    return (
      <div className="col-span-1 row-span-2 bg-neutral-800 flex items-center justify-center rounded-xl p-4 text-white">
        Error loading Google Maps.
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="col-span-1 row-span-2 bg-neutral-800 flex items-center justify-center rounded-xl p-4 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="col-span-1 row-span-2 bg-neutral-800 flex items-center justify-center rounded-xl overflow-hidden">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        options={{
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default LocationCard;