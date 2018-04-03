'use strict';

import React, {Component} from 'react';
import {Dimensions, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ImageGallery extends Component {

    render() {
        return (<Modal style={styles.container}
                       transparent={true}
                       onRequestClose={() => {
                       }}
                       {...this.props}>
            <ImageViewer
                enableImageZoom={true}
                saveToLocalByLongPress={true}
                {...this.props}/>
            {
                this.renderBackArrow()
            }
        </Modal>);
    }

    renderBackArrow() {
        return <TouchableOpacity
            style={{position: 'absolute', left: 0, top: 0}}
            onPress={this.onBackClicked}>
            <Icon name="ios-close"
                  color={'#FFFFFF'}
                  size={45}
                  style={styles.back}/>
        </TouchableOpacity>;
    }

    onBackClicked = () => {
        this.props.onCancel();
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: Dimensions.get('window').width,
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
    },
    back: {
        marginLeft: 20,
        marginTop: 25
    }
});