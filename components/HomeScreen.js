import React from 'react'
import { Button, Box, Heading, ScrollView, Text, Image, View, Flex, Divider, Pressable } from "native-base";
import { newsData } from '../newsData';
import {useEffect} from 'react'



const HomeScreen = ({ navigation }) => {

    useEffect (() => {
        // newsData.map((data) => {
        //     console.log(data.title)
        // })
    }, [])

  return (
    <Box safeAreaTop style={{backgroundColor: "#93918b", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text fontSize='7xl' style={{fontFamily: 'NewsReader', fontWeight: "600"}}>NewsPaper</Text>
        <ScrollView padding={6} showsVerticalScrollIndicator={false} >
        
            {newsData.map((data) => (
            <Pressable key={data.title} onPress={() => navigation.navigate('NewsDetail', {news: data})}>
                <Box key={data.title} style={{flex: 1,justifyContent: 'center', marginBottom: 8, minWidth: "100%", backgroundColor: "#d2d0c9", paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 30}}>
                    <Flex direction="row">
                    <View style={{maxWidth: "70%", minWidth: "70%"}}>

                        <Text fontSize='md' isTruncated  noOfLines={2} style={{fontFamily: 'Protest_Strike'}}>{data.title}</Text>
                        <Text fontSize='2xs' italic isTruncated  style={{fontFamily: 'Inter_100Thin', marginTop: 24}}> - {data.createdAt}</Text>

                    </View>

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <Image source={{
                            uri: `${data.thumbnail}`
                        }} resizeMode="cover" alt="Alternate Text" size="lg" style={{borderRadius: 30}}/>
                    </View>
                    </Flex>
                </Box>
            </Pressable>
            
            ))}
        </ScrollView>
        {/* <Button onPress={() => navigation.navigate('NewsDetail', {newsId: 101, newsTitle: "UpTrend"})}>Open a news page</Button> */}
    </Box>
  )
}

export default HomeScreen