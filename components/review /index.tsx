import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import Navbar from '../navbar';

const ReviewArtistScreen: React.FC<{ route: any }> = ({ route }) => {
    // Ensure you're safely extracting the data from route.params
    const { artistName, artistImage } = route?.params || {}; // Default to empty object to prevent crashes

    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([
        { id: '1', text: 'Amazing artist, love the creativity!', rating: 5, reviewer: 'John Doe' },
        { id: '2', text: 'Great communication and detail work.', rating: 4, reviewer: 'Jane Smith' },
    ]);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);  // New state for review submission

    const submitReview = () => {
        if (reviewText.trim() && rating > 0) {
            const newReview = {
                id: (reviews.length + 1).toString(),
                text: reviewText,
                rating: rating,
                reviewer: 'Current User',
            };
            setReviews([...reviews, newReview]);
            setReviewText('');
            setRating(0);
            setReviewSubmitted(true);  // Set review as submitted

            // Hide the "Review Submitted" message after 3 seconds
            setTimeout(() => {
                setReviewSubmitted(false);
            }, 3000);
        }
    };

    const renderReview = ({ item }: { item: { text: string; rating: number; reviewer: string } }) => (
        <View style={styles.reviewCard}>
            <Text style={styles.reviewerName}>{item.reviewer}</Text>
            <View style={styles.ratingContainer}>
                {[...Array(item.rating)].map((_, index) => (
                    <MaterialIcons key={index} name="star" size={18} color="#FFD93D" />
                ))}
            </View>
            <Text style={styles.reviewText}>{item.text}</Text>
        </View>
    );

    return (
        <LinearGradient colors={['#ff7e5f', '#feb47b']} style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Image source={artistImage || require('../../assets/images/artist1.jpg')} style={styles.artistImage} />
                <Text style={styles.artistName}>{artistName || 'Viscolus Arte'}</Text>
                <Text style={styles.headerText}>Rate and Review</Text>
            </View>

            {/* Review Input Section */}
            <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Your Rating:</Text>
                <View style={styles.ratingInput}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <TouchableOpacity key={star} onPress={() => setRating(star)}>
                            <MaterialIcons
                                name={rating >= star ? 'star' : 'star-border'}
                                size={30}
                                color="#FFD93D"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <TextInput
                    value={reviewText}
                    onChangeText={setReviewText}
                    placeholder="Write your review..."
                    style={styles.reviewInput}
                    multiline
                />
                <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
                    <Text style={styles.submitButtonText}>Submit Review</Text>
                </TouchableOpacity>
            </View>

            {/* Show Review Submitted message */}
            {reviewSubmitted && (
                <Text style={styles.reviewSubmittedMessage}>Review Submitted!</Text>
            )}

            {/* Display Reviews */}
            <FlatList
                data={reviews}
                renderItem={renderReview}
                keyExtractor={(item) => item.id}
                style={styles.reviewList}
            />
            <Navbar />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    artistImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#fff',
        marginBottom: 10,
    },
    artistName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        marginTop: 5,
    },
    inputSection: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    ratingInput: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    reviewInput: {
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#FF6B6B',
        paddingVertical: 12,
        borderRadius: 30,
        alignItems: 'center',
    },
    submitButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    reviewList: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    reviewCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    reviewerName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    reviewText: {
        fontSize: 16,
        color: '#555',
        marginTop: 10,
    },
    reviewSubmittedMessage: {
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default ReviewArtistScreen;
