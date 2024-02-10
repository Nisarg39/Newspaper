import { Box , Image, ScrollView, Text} from 'native-base';
import { Linking } from 'react-native';
import React from 'react'

export default function NewsDetail({ route, navigation }) {
    const {news} = route.params;
  return (
    <Box style={{ backgroundColor: "#d2d0c9", flex: 1, alignItems: "center" }}>
      <ScrollView>

        <Image
          source={{
            uri: `${news.thumbnail}`,
          }}
          resizeMode="cover"
          alt="Alternate Text"
          size="2xl"
          style={{minWidth: "100%", height: 250, borderTopRightRadius: 30}}
        />

          <Box style={{backgroundColor: 'black', padding: 18, borderBottomLeftRadius: 50}}>
            <Text fontSize='4xl' style={{fontFamily: 'Protest_Strike', color: 'white'}}>{news.title}</Text>
            <Text fontSize='2xs' italic isTruncated  style={{fontFamily: 'Inter_100Thin', marginTop: 24, color: "white", alignSelf: "flex-end" }}> - {news.createdAt}</Text>
          </Box>
        
        <Box style={{backgroundColor: "#d2d0c9", padding: 24}}>
            <Text fontSize='lg' letterSpacing="sm" style={{fontFamily: 'NewsReader', textAlign: "justify"}}>{news.description}</Text>
        </Box>

        <Box style={{flex: 1, alignItems: "center", marginBottom: 36}}>
            <Text underline style={{color: 'purple'}} onPress={() => Linking.openURL(`${news.url}`)}>
                Click here to see full article
            </Text>
        </Box>
        
      </ScrollView>
    </Box>
  );
}