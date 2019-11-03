/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	icon:  PropTypes.any.isRequired,
	stickerColor: PropTypes.string.isRequired,
};


export default class Card extends React.Component {


	render() {
		const {
			cardView,
			sticker,
			infoContainer,
			infoView,
			titleText,
			contentText
		} = styles;
		const {
			stickerColor,
			title,
			content,
			icon,

		} = this.props;

		return (

			<View style={cardView}>
				<View style={[sticker, {backgroundColor: stickerColor}]}>
				</View>
				<View style={infoContainer}>
					<View style={infoView}>
						<Text style={titleText}>{title}</Text>
						<Text style={contentText}>{content}</Text>
					</View>
					<Image source={icon}/>
				</View>

			</View>
		);
	}
}

Card.propTypes = propTypes;
