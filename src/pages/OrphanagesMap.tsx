import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';

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

          <div></div>
          
          <Link to="/" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
          </Link>
        </aside>
      </div>
    )
  }
}

export default OrphanagesMap;
