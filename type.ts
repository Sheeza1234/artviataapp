export interface Artwork {
  id: string;
  title: string;
  abstract: string;
  image: string;
  artist: string;
  year: string;
  category: string
}

export type RootStackParamList = {
  Start: undefined;
  login: undefined;
  Register: undefined;
  Home: undefined;
  ArtWork: undefined; // No parameters for this screen
  ArtWorkDetails: { artwork: Artwork }; // Pass the selected artwork object
  Upload: undefined;
  Chat: undefined;
  Artist: undefined;
  Review: undefined;
  Profile:undefined;


};
