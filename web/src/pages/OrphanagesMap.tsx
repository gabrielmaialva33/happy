import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMakerImg from '../images/map-marker.svg';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const OrphanagesMap: React.FC = () => (
  <div id="page-map">
    <aside>
      <header>
        <img src={mapMakerImg} alt="Logo da plataforma Happy" />

        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando sua visita :{')'}</p>
      </header>

      <footer>
        <strong>{process.env.REACT_APP_CITY || 'Capão Bonito'}</strong>
        <span>{process.env.REACT_APP_UF || 'São Paulo'}</span>
      </footer>
    </aside>

    <Map
      center={[-24.0065961, -48.3803738]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
    >
      {/* -> "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />

      <Marker icon={mapIcon} position={[-24.0065961, -48.3803738]}>
        <Popup
          closeButton={false}
          minWidth={240}
          maxHeight={240}
          className="map-popup"
        >
          Lar dos Garotos
          <Link to="/orphanages/1">
            <FiArrowRight size={20} color="#fff" />
          </Link>
        </Popup>
      </Marker>
    </Map>

    <Link to="/orphanages/create" className="create-orphanage">
      <FiPlus size={32} color="#FFF" />
    </Link>
  </div>
);

export default OrphanagesMap;
