import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import Navbar from '../navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

const UploadArtPage: React.FC = () => {
    const { control, handleSubmit, reset } = useForm();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImagePicker = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1 },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.errorMessage) {
                    Alert.alert('Error', response.errorMessage);
                } else if (response.assets && response.assets.length > 0) {
                    const imageUri = response.assets[0]?.uri || null;
                    setSelectedImage(imageUri);
                }
            }
        );
    };

    const onSubmit = (data: any) => {
        if (!selectedImage) {
            Alert.alert('Error', 'Please upload an image');
            return;
        }

        const formData = {
            ...data,
            image: selectedImage,
        };

        console.log('Form Data:', formData);
        Alert.alert('Success', 'Artwork uploaded successfully!');
        reset();
        setSelectedImage(null);
    };

    return (
        <LinearGradient
            colors={['#FF6B6B', '#FFD93D']} // Gradient colors for the background
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <LinearGradient
                    colors={['#FF6B6B', '#FFD93D']} // Header gradient
                    style={styles.headerGradient}
                >
                    <Text style={styles.headerText}>Upload Your Art</Text>
                </LinearGradient>

                <TouchableOpacity
                    style={styles.imagePicker}
                    onPress={handleImagePicker}
                >
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
                    ) : (
                        <>
                            <Icon name="cloud-upload" size={40} color="#FFD93D" />
                            <Text style={styles.imagePickerText}>Tap to Upload Image</Text>
                        </>
                    )}
                </TouchableOpacity>

                <View style={styles.formContainer}>
                    <Controller
                        control={control}
                        name="title"
                        defaultValue=""
                        rules={{ required: 'Title is required' }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <>
                                <View style={styles.inputContainer}>
                                    <Icon name="pencil" size={20} color="#FF6B6B" />
                                    <TextInput
                                        style={[styles.input, error && styles.errorInput]}
                                        placeholder="Artwork Title"
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                </View>
                                {error && <Text style={styles.errorText}>{error.message}</Text>}
                            </>
                        )}
                    />

                    <Controller
                        control={control}
                        name="description"
                        defaultValue=""
                        rules={{ required: 'Description is required' }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <>
                                <View style={styles.inputContainer}>
                                    <Icon name="file-text" size={20} color="#FF6B6B" />
                                    <TextInput
                                        style={[styles.input, error && styles.errorInput]}
                                        placeholder="Description"
                                        onChangeText={onChange}
                                        value={value}
                                        multiline
                                    />
                                </View>
                                {error && <Text style={styles.errorText}>{error.message}</Text>}
                            </>
                        )}
                    />

                    <Controller
                        control={control}
                        name="owner"
                        defaultValue=""
                        rules={{ required: 'Owner details are required' }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <>
                                <View style={styles.inputContainer}>
                                    <Icon name="user" size={20} color="#FF6B6B" />
                                    <TextInput
                                        style={[styles.input, error && styles.errorInput]}
                                        placeholder="Owner Name/Details"
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                </View>
                                {error && <Text style={styles.errorText}>{error.message}</Text>}
                            </>
                        )}
                    />

                    <TouchableOpacity
                        style={styles.uploadButton}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={styles.uploadButtonText}>Submit Artwork</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Navbar fixed at the bottom */}
            <Navbar />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 100,
        padding:20, // Give space for the navbar
    },
    headerGradient: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    imagePicker: {
        height: 200,
        borderWidth: 2,
        borderColor: '#FFD93D',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    imagePickerText: {
        color: '#FFD93D',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imagePreview: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginBottom: 10,
    },
    uploadButton: {
        backgroundColor: '#FF6B6B',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    uploadButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default UploadArtPage;
