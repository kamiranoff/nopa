import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const ImageList = ({ blocks }) => {
  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {blocks.map((block, i) => (
        <View
          style={{
            backgroundColor: 'white',
            margin: 10,
            width: Dimensions.get('window').width / 3,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={`${block.name} + ${i}`}
        >
          <Image
            source={block.img}
            style={{
              maxWidth: Dimensions.get('window').width / 3,
              margin:5,
            }}
            resizeMode='contain'
          />
        </View>
      ))}
    </View>
  )
}

export default ImageList;