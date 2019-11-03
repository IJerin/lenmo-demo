
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	cardView: {
		flexDirection: 'row',
		margin: 6,
		height: 70,
		width: 165,
		borderRadius: 6,
		backgroundColor: '#fff',
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.27,
				shadowRadius: 4.65,
			},
			android: {
				elevation: 10,
			},
		})
	},
	sticker: {
		height: 70,
		width: 4,
		borderRadius: 2,
		backgroundColor: '#FFA831'

	},
	infoContainer: {
		marginTop: 8,
		flexDirection: 'row'
	},
	infoView: {
		paddingRight: 5,
		paddingLeft: 10,
		width: 130 // width = card width - (sticker+ icon size)
	},
	titleText: {
		fontFamily: 'Avenir-Heavy',
		fontSize: 10,
		color: '#9b9b9b',
		fontWeight: '800'
	}, 
	contentText: {
		fontFamily: 'Avenir-Medium',
		fontSize: 20,
		color: 'black',
	}
});

export default styles;