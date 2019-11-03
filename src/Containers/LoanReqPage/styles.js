import { StyleSheet, Platform } from 'react-native';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F8F8F8',
	},
	creditScoreView: {
		marginTop: 43,
		marginLeft: 26,
		marginRight: 26
	},
	scoreContainer: {
		marginTop: 20,
		flexDirection: 'row',
		
	},
	userPictureContainer: {
		marginTop: 5,
		height: 80,
		width: 80,
		borderRadius: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#92C2FF'
	},
	profilePictureStyle: {
		height: 60,
		width: 60,
		borderRadius: 30
	},
	scoreColumnView: {
		marginLeft: 20,
	},
	userNameView: {
		height: 40
	},
	scoreTextStyle: {
		fontFamily: 'Avenir-Heavy',
		fontSize: 20,
		color: 'black',
	},
	greyTitle: {
		fontFamily: 'Avenir-Heavy',
		fontSize: 10,
		color: '#9b9b9b',
		fontWeight: '800'
	},
	rowView: {
		flexDirection: 'row',
		marginTop: 5,
	},
	leafStyle: {
		justifyContent: 'center',
		marginRight: 3
	},
	scoreIconStly: {
		justifyContent: 'center',
		marginLeft: 3
	},
	footerText: {
		marginTop: 5,
		fontFamily: 'Avenir-Heavy',
		fontSize: 9,
		color: '#9b9b9b',
		fontWeight: '800'
	},
	divider: {
		height: 30
	},
	smallDivider: {
		height: 20
	},

	financeHealthView: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	offerView: {
		backgroundColor: 'white',
		paddingLeft: 40,
		paddingBottom: 40,
	},
	offerTitileText: {
		fontFamily: 'Avenir-Heavy',
		fontSize: 15,
		color: '#BD2EFF',
		fontWeight: '600'
	},
	offerSmallTextStyle: {
		fontFamily: 'Avenir-Medium',
		fontSize: 20,
		color: '#000',
	},
	offerValueText: {
		fontFamily: 'Avenir-Medium',
		fontSize: 30,
		color: '#000',
		marginTop: -5,
		marginLeft: 5,
		marginRight: 5
	},
	offerFooterText: {
		marginTop: 15,
		fontFamily: 'Avenir-Roman',
		fontSize: 15,
		color: '#2f2f2f',
	},
	buttonText: {
		fontSize: 18,
		fontFamily: 'Gill Sans',
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
		backgroundColor: 'transparent',
	},
	buttonContainer: {
		width: 300,
		marginTop: 15
	},
	sliderLeftText: {
		fontFamily: 'Avenir-Roman',
		fontSize: 15,
		color: '#2f2f2f',
		marginLeft: 10
	}, 
	sliderTextRight: {
		fontFamily: 'Avenir-Roman',
		fontSize: 15,
		color: '#2f2f2f',
		position: 'absolute',
		right: 10
	},
	whiteButtonStyle: {
		height: 48,
		width: '100%',
		borderRadius: 6,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		...Platform.select({
			ios: {
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 7,
				},
				shadowOpacity: 0.41,
				shadowRadius: 9.11,
			},
			android: {
				elevation: 10,
			},
		})
	},
	buttonTextRed: {
		fontFamily: 'Avenir-Heavy',
		fontSize: 15,
		color: '#FF4040',
	}


});

export default styles;