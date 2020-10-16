import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconAnchor: [29, 68],
  iconSize: [58, 68],
  popupAnchor: [170, 2]
})

class OrphanagesMap extends Component {
  render() {
    return (
      <div className="page-map" >
        <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy Marker" />

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
            <strong>Curitiba</strong>
            <span>Paraná</span>
          </footer>
        </aside>

        <Map
          center={[-25.3863465, -49.2470175]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <Marker
            icon={mapIcon}
            position={[-25.3872947, -49.2342773]}
          >
            <Popup closeButton={false} minWidth={244} maxWidth={244} className="map-popup">
              ACRIDAS - Associação Cristã de Assistencia Social
              <Link to="/orphanages/1">
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
        </Map>

        <Link to="/orphanages/create" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </div>
    )
  }
}

export default OrphanagesMap;
