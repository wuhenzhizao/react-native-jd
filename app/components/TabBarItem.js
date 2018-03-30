import React, {Component} from 'react';
import {Image} from 'react-native';

export default class TabBarItem extends Component {
    render() {
        let {normalImage, selectedImage} = this.props;
        selectedImage = selectedImage ? selectedImage : normalImage;
        return (
            <Image
                source={this.props.focused
                    ? selectedImage
                    : normalImage}
                style={{tintColor: this.props.tintColor, width: 45, height: 45}}
            />
        );
    }
}
