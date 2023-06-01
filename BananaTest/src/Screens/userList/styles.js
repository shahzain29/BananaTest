import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        paddingHorizontal: 16,
        paddingTop: 20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: 20,
        padding: 10,
        flex: 0.8
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default styles