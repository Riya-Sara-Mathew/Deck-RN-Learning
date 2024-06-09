import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Card, Button } from '@rneui/themed';
import Deck from './src/Deck';

const DATA = [
    { id: 1, text: 'Card #1', uri: 'https://picsum.photos/seed/picsum/200/300' },
    { id: 2, text: 'Card #2', uri: 'https://picsum.photos/200/300?grayscale' },
    { id: 3, text: 'Card #3', uri: 'https://picsum.photos/200/300/?blur=2' },
    { id: 4, text: 'Card #4', uri: 'https://picsum.photos/id/13/367/267' },
    { id: 5, text: 'Card #5', uri: 'https://picsum.photos/id/13/367/267' },
    { id: 6, text: 'Card #6', uri: 'https://picsum.photos/id/13/367/267' },
];

export default class App extends React.Component {
    renderCard(item) {
        return (
            <Card
                key={item.id}
                title={item.text}
                image={{ uri: item.uri }}
            >
                <Text style={{ marginBottom: 10 }}>
                    I can customize the Card further.
                </Text>
                <Button
                    icon={{ name: 'code' }}
                    backgroundColor="#03A9F4"
                    title="View Now!"
                />
            </Card>
        );
    }

    renderNoMoreCards() {
        return (
            <Card title="All Done!">
                <Text style={{ marginBottom: 10 }}>
                    There's no more content here!
                </Text>
                <Button
                    backgroundColor="#03A9F4"
                    title="Get more!"
                />
            </Card>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Deck
                    data={DATA}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
});
