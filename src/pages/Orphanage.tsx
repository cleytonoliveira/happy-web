import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from 'react-router-dom';
import L from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanage.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function Orphanage() {
  const { goBack } = useHistory();

  return (
    <div className="page-orphanage">
      <aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <main>
        <div className="orphanage-details">
          <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr//a0R0f00000wfdaCEAQ/5c6af23ae4b0b6f1562e3bb0.jpg&w=710&h=462" alt="ACRIDAS - Associação Cristã de Assistencia Social" />

          <div className="images">
            <button className="active" type="button">
              <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr//a0R0f00000wfdaCEAQ/5c6af23ae4b0b6f1562e3bb0.jpg&w=710&h=462" alt="ACRIDAS - Associação Cristã de Assistencia Social" />
            </button>
            <button type="button">
              <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr//a0R0f00000wfdaCEAQ/5c6af23ae4b0b6f1562e3bb0.jpg&w=710&h=462" alt="ACRIDAS - Associação Cristã de Assistencia Social" />
            </button>
            <button type="button">
              <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr//a0R0f00000wfdaCEAQ/5c6af23ae4b0b6f1562e3bb0.jpg&w=710&h=462" alt="ACRIDAS - Associação Cristã de Assistencia Social" />
            </button>
            <button type="button">
              <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr//a0R0f00000wfdaCEAQ/5c6af23ae4b0b6f1562e3bb0.jpg&w=710&h=462" alt="ACRIDAS - Associação Cristã de Assistencia Social" />
            </button>
            <button type="button">
              <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr//a0R0f00000wfdaCEAQ/5c6af23ae4b0b6f1562e3bb0.jpg&w=710&h=462" alt="ACRIDAS - Associação Cristã de Assistencia Social" />
            </button>
            <button type="button">
              <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr//a0R0f00000wfdaCEAQ/5c6af23ae4b0b6f1562e3bb0.jpg&w=710&h=462" alt="ACRIDAS - Associação Cristã de Assistencia Social" />
            </button>
          </div>
          
          <div className="orphanage-details-content">
            <h1>ACRIDAS - Associação Cristã de Assistencia Social</h1>
            <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</p>

            <div className="map-container">
              <Map 
                center={[-25.3872947, -49.2342773]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[-25.3872947, -49.2342773]}
                />
              </Map>

              <footer>
                <a href="">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                9h às 18h
              </div>
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Não Atendemos <br />
                fim de semana
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}