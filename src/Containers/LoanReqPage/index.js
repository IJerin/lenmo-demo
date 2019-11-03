/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Slider } from 'react-native';
import Pie from 'react-native-pie';
import Card from '../../Components/Card';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from '../../icons/backIcon.png';
import ProfilePic from '../../icons/profilePic.png';
import Leaf from '../../icons/leaf.png';
import ExclaimIcon from '../../icons/exclaimIcon.png';
import styles from './styles';




export default class LoanReqPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

back = () => {
	
}

render() {
    	const {
		container,
		creditScoreView,
		scoreContainer,
		userPictureContainer,
		profilePictureStyle,
		userNameView,
		scoreColumnView,
		scoreTextStyle,
		greyTitle,
		rowView,
		leafStyle,
		scoreIconStly,
		footerText,
		divider,
		smallDivider,
		financeHealthView,
		offerView,
		offerTitileText,
		offerSmallTextStyle,
		offerValueText,
		offerFooterText,
		buttonContainer,
		sliderLeftText,
		sliderTextRight,
		whiteButtonStyle,
		buttonTextRed

	} = styles;
		
	
    	return (
    		<View style={container}>
			<ScrollView>
				<View style={creditScoreView}>
					<TouchableOpacity onPressed={this.back}>
						<Image source={BackIcon} />
					</TouchableOpacity>

					<View style={scoreContainer}>
						<View style={userPictureContainer}>
							<Image source={ProfilePic} style={profilePictureStyle}/>
						</View>
						<View style={scoreColumnView}>
							<View style={userNameView}>
								<Text style={scoreTextStyle}>
								IO
								</Text>
							</View>
							<Text style={greyTitle}>
								LENMO SCORE
							</Text>
							<View style={rowView}>
								<View style={leafStyle}>
									<Image source={Leaf}/>
								</View>
								<Text style={scoreTextStyle}> 73 </Text>
								<View style={scoreIconStly}>
									<Image source={ExclaimIcon}/>
								</View>
							</View>
							<Text style={footerText}>Vantage Scorevfcvfvf 4.0</Text>
						</View>	
						<View style={scoreColumnView}>
							<View style={userNameView}>
							</View>
							<Text style={greyTitle}>
								CREDIT SCORE
							</Text>
							<View style={rowView}>
								<View style={scoreIconStly}>
									<Pie
										radius={10}
										innerRadius={7}
										series={[25, 25, 25, 25]}
										colors={['#FF534C', '#FFA831', '#00D034', '#EBEBEB']} />
								</View>

								<Text style={scoreTextStyle}> 500-630 </Text>
								<View style={scoreIconStly}>
									<Image source={ExclaimIcon}/>
								</View>
							</View>
						</View>					
					</View>
				</View>

				<View style={divider}></View>

				<View style={financeHealthView}>
					<View>
						<Card
							stickerColor={'#00D034'}
							title = {'PAYMENT HISTORY'}
							content = {'1 yr 5 mos'}
							icon = {ExclaimIcon}
						/>
						<Card
							stickerColor={'#FFA831'}
							title = {'TOTAL ACCOUNTS'}
							content = {'2'}
							icon = {ExclaimIcon}
						/>
						<Card
							stickerColor={'#FFA831'}
							title = {'ANNUAL INCOME'}
							content = {'$53,000/yr'}
							icon = {ExclaimIcon}
						/>
					</View>
					<View>
						<Card
							stickerColor={'#00D034'}
							title = {'CREDIT UTILIZATION'}
							content = {'100%'}
							icon = {ExclaimIcon}
						/>
						<Card
							stickerColor={'#FFA831'}
							title = {'TOTAL ACCOUNTS'}
							content = {'11%'}
							icon = {ExclaimIcon}
						/>
						<Card
							stickerColor={'#FFA831'}
							title = {'DEROGATORY MARKS'}
							content = {'3'}
							icon = {ExclaimIcon}
						/>
					</View>
				</View>
				<View style={divider}></View>
				<View style={offerView}>
					<View style={divider}></View>
					<View style={rowView}>
						<View>
							<Text style={offerTitileText}>
								Investment Amout
							</Text>
							<View style={rowView}>
								<Text style={offerSmallTextStyle}>
									$
								</Text>
								<Text style={offerValueText}>
									970
								</Text>
							</View>
						</View>

						<View style={scoreColumnView}>
							<Text style={offerTitileText}>
								Payback Period 
							</Text>
							<View style={rowView}>
								<Text style={offerValueText}>
									1
								</Text>
								<Text style={offerSmallTextStyle}>
									month
								</Text>
								
							</View>
						</View>
					</View>
					<View style={divider}></View>

					<Text style={offerFooterText}>Recommended interest rate: 3%</Text>
					<View style={rowView}>
						<Text style={offerValueText}>
									4
						</Text>
						<Text style={offerSmallTextStyle}>
									%
						</Text>
								
					</View>

					<View style={divider}></View>
					<View style={buttonContainer}>
						<Slider
							minimumValue={1}
							maximumValue={100}
							minimumTrackTintColor = {'linear-gradient(45deg, red, blue);'}
						/>
						<View style={rowView}>
							<Text style={sliderLeftText}>
									0%
							</Text>
							<Text style={sliderTextRight}>
									100%
							</Text>
								
						</View>

						<View style={divider}></View>

						<View style={whiteButtonStyle}>
							<Text style={buttonTextRed}>
								Dismiss
							</Text>
						</View>

						<View style={smallDivider}></View>
						<TouchableOpacity>
							<LinearGradient
								colors={['#568FFC', '#6A7CFD', '#8760FD','#A841FE', '#BF2BFF',    ]}
								style={{height: 48, widht: '100%', borderRadius: 5}} 
								start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
							>
						    
								<Text style={styles.buttonText}>
									Make Offer
								</Text>
							
							</LinearGradient>
						</TouchableOpacity>
				
					</View>

				</View>
			</ScrollView>
    		</View>
    	);
}
}


  