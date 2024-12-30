import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navButton}>
        <Icon name="home" size={24} color="#000" style={styles.navIcon} />
        <Text style={styles.navButtonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <Icon name="search" size={24} color="#000" style={styles.navIcon} />
        <Text style={styles.navButtonText}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <Icon name="user" size={24} color="#000" style={styles.navIcon} />
        <Text style={styles.navButtonText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <Icon name="cog" size={24} color="#000" style={styles.navIcon} />
        <Text style={styles.navButtonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    marginBottom: 4,
  },
  navButtonText: {
    fontSize: 12,
    color: '#333',
  },
});

export default Navbar;
