import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ChatScreen: React.FC<{ route: any }> = ({ route }) => {
  const { artistName } = route.params; // Extract artist's name from params

  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello, how are you?', sender: 'artist' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: (messages.length + 1).toString(),
        text: newMessage,
        sender: 'user', // User sends the message
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage(''); // Clear the input field
    }
  };

  const renderItem = ({ item }: { item: { text: string; sender: string } }) => {
    const messageStyle = item.sender === 'user' ? styles.userMessage : styles.artistMessage;
    return (
      <View style={[styles.messageContainer, messageStyle]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat with {artistName}</Text>
      
      {/* Chat messages list */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        inverted // Display messages from bottom to top
        style={styles.chatList}
      />
      
      {/* Text input for new message */}
      <View style={styles.inputContainer}>
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  chatList: {
    flex: 1,
    marginBottom: 20,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FF6B6B',
  },
  artistMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFD93D',
  },
  messageText: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#FF6B6B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
