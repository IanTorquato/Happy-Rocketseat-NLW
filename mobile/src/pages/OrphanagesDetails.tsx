import React from 'react'
import { Image, View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps'
import { Feather, FontAwesome } from '@expo/vector-icons'

import mapMarkerImg from '../images/map-marker.png'

export default function OrphanageDetails() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.imagesContainer}>
				<ScrollView horizontal pagingEnabled>
					<Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
					<Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
					<Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
				</ScrollView>
			</View>

			<View style={styles.detailsContainer}>
				<Text style={styles.title}>Nome Orfanato</Text>
				<Text style={styles.about}>
					Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.
				</Text>

				<View style={styles.mapContainer}>
					<MapView style={styles.mapStyle}
						initialRegion={{ latitude: -27.2092052, longitude: -49.6401092, latitudeDelta: 0.008, longitudeDelta: 0.008, }}
						zoomEnabled={false} pitchEnabled={false} scrollEnabled={false} rotateEnabled={false}					>

						<Marker icon={mapMarkerImg} coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }} />
					</MapView>

					<View style={styles.routesContainer}>
						<Text style={styles.routesText}>Ver rotas no Google Maps</Text>
					</View>
				</View>

				<View style={styles.separator} />

				<Text style={styles.title}>Instruções para visita</Text>
				<Text style={styles.about}>Venha como se sentir a vontade e traga muito amor e paciência para dar.</Text>

				<View style={styles.scheduleContainer}>
					<View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
						<Feather name="clock" size={40} color="#2ab5d1" />

						<Text style={[styles.scheduleText, styles.scheduleTextBlue]}>Segunda à Sexta 8h às 18h</Text>
					</View>
					<View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
						<Feather name="info" size={40} color="#39cc83" />

						<Text style={[styles.scheduleText, styles.scheduleTextGreen]}>Atendemos fim de semana</Text>
					</View>
				</View>

				<RectButton style={styles.contactButton} onPress={() => { }}>
					<FontAwesome name="whatsapp" size={24} color="#fff" />

					<Text style={styles.contactButtonText}>Entrar em contato</Text>
				</RectButton>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	imagesContainer: {
		height: 240
	},

	image: {
		height: 240,
		resizeMode: 'cover',
		width: Dimensions.get('window').width
	},

	detailsContainer: {
		padding: 24
	},

	title: {
		color: '#4D6F80',
		fontFamily: 'Nunito_700Bold',
		fontSize: 30
	},

	about: {
		color: '#5c8599',
		fontFamily: 'Nunito_600SemiBold',
		lineHeight: 24,
		marginTop: 16
	},

	mapContainer: {
		backgroundColor: '#e6f7fb',
		borderColor: '#b3dae2',
		borderRadius: 20,
		borderWidth: 1.2,
		marginTop: 40,
		overflow: 'hidden'
	},

	mapStyle: {
		height: 150,
		width: '100%'
	},

	routesContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16
	},

	routesText: {
		color: '#0089a5',
		fontFamily: 'Nunito_700Bold'
	},

	separator: {
		backgroundColor: '#d3e2e6',
		height: 0.8,
		marginVertical: 40,
		width: '100%'
	},

	scheduleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 24
	},

	scheduleItem: {
		padding: 20,
		width: '48%'
	},

	scheduleItemBlue: {
		backgroundColor: '#e6f7fb',
		borderColor: '#b3dae2',
		borderRadius: 20,
		borderWidth: 1
	},

	scheduleItemGreen: {
		backgroundColor: '#edfff6',
		borderColor: '#a1e9c5',
		borderRadius: 20,
		borderWidth: 1
	},

	scheduleText: {
		fontFamily: 'Nunito_600SemiBold',
		fontSize: 16,
		lineHeight: 24,
		marginTop: 20
	},

	scheduleTextBlue: {
		color: '#5c8599'
	},

	scheduleTextGreen: {
		color: '#37c77f'
	},

	contactButton: {
		alignItems: 'center',
		backgroundColor: '#3cdc8c',
		borderRadius: 20,
		flexDirection: 'row',
		height: 56,
		justifyContent: 'center',
		marginTop: 40
	},

	contactButtonText: {
		color: '#fff',
		fontFamily: 'Nunito_800ExtraBold',
		fontSize: 16,
		marginLeft: 16
	}
})