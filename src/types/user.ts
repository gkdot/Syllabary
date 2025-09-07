export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  providerData: {
    providerId: string;
    uid: string;
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
  }[];
}
