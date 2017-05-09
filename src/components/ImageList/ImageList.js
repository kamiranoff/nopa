import React from 'react';
import { View, Image, Dimensions, TouchableOpacity } from 'react-native';

const ImageList = ({ blocks, onPress, selectedBank }) => {
  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {blocks.map((block, i) => (
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            backgroundColor: 'white',
            margin: 10,
            width: Dimensions.get('window').width / 3,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: (selectedBank === i) ? 2 : 0,
            borderColor: "#F97056"
          }}
          onPress={() => onPress(i)}
          key={`${block.name} + ${i}`}
        >
          <Image
            source={block.img}
            style={{
              maxWidth: Dimensions.get('window').width / 3,
              margin: 5,
            }}
            resizeMode='contain'
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default ImageList;