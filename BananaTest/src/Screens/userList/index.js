import {
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './styles'
import { Search } from '../../Assets/Images'
import leaderBoard from '../../leaderboard.json'

const userList = () => {

    const leaderBoardData = Object.values(leaderBoard)
 
    const [searchValue, setsearchValue] = useState('')
    const [maxValues, setMaxValues] = useState([])
    const [listData, setListData] = useState([])
    const [check, setCheck] = useState(false)

    useEffect(() => {
        onFindMax()
    }, [])

    const onFindMax = () => {
        const maxVals = [...leaderBoardData].sort((a, b) => b.bananas - a.bananas).slice(0, 10)
        setMaxValues(maxVals)
    }

    const onFilterData = () => {
        const temp = leaderBoardData.filter((item) => item?.name === searchValue)
        let checker = false
        for (const iterator of maxValues) {
            if (iterator?.name === searchValue) {
                console.log('in array');
                // setCheck(true)
                checker = true
                break
            }
        }
        if (checker === false) {
            setListData([...maxValues, ...temp])
        } else {
            setListData(maxValues)
        }
    }

    useEffect(()=>{
        if(searchValue===''){
            setListData('')
        }
    },[searchValue])

    const renderInputField = () => {
        return (
            <View style={styles.inputContainer}>

                <Image
                    source={Search}
                    style={{ height: 30, width: 30 }}
                    resizeMode={'contain'}
                />
                <TextInput
                    style={{ flex: 1,color:'#000'}}
                    placeholder='Search'
                    placeholderTextColor={'grey'}
                    value={searchValue}
                    onChangeText={(text) => setsearchValue(text)}
                />
            </View>
        )
    }

    const renderSearchButton = () => {
        return (
            <TouchableOpacity
                onPress={() => onFilterData()}
                style={styles.buttonContainer}>
                <Text style={{color:'#000000'}}>
                    {`Search`}
                </Text>
            </TouchableOpacity>
        )
    }

    const renderItem = (item, index) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{flex:0.4}}>
                    <Text style={{ color: item.name === searchValue ? 'red' : 'black' }}>{`${item.name}`}</Text>
                </View>
                <View style={{flex:0.3}}>
                    <Text style={{ color: item.name === searchValue ? 'red' : 'black' }}>{`${item.bananas}`}</Text>
                </View>
                <View >
                    <Text style={{ color: item.name === searchValue ? 'red' : 'black' }}>{`${index+1}`}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                {renderInputField()}
                {renderSearchButton()}
            </View>
            <Text style={{color:'#000',alignSelf:'center'}}>Note: names are case sensitive</Text>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={listData}
                    extraData={listData.length}
                    renderItem={({ item, index }) => renderItem(item, index)}
                />
            </View>
        </View>
    )
}

export default userList
