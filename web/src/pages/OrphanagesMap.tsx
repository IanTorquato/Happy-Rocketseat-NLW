import React from 'react'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapIcon from '../utils/mapIcon'
import mapMarker from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

const OrphanagesMap: React.FC = () => {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarker} alt="Logo Happy" />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>Rio do Sul</strong>
					<span>Santa Catarina</span>
				</footer>
			</aside>

			<Map center={[-28.3314516, -49.0334413]} zoom={16} style={{ height: '100%', width: '100%' }}>
				<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={[-28.3314516, -49.0334413]} icon={mapIcon} >
					<Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
						Lugar Nenhum
						<Link to="/orphanages/1"><FiArrowRight size={20} color="#fff" /></Link>
					</Popup>
				</Marker>
			</Map>

			<Link to="/orphanages/create" className="create-orphanage">
				<FiPlus size={32} color="#fff" />
			</Link>
		</div>
	)
}

export default OrphanagesMap