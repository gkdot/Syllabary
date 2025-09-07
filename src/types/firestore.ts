export interface UserDoc {
  uid: string;
  name?: string | null;
  email?: string | null;
  photoURL?: string | null;
  providers: string[];            // e.g. ['google.com']
  createdAt?: any;                // serverTimestamp -> returned as Timestamp after server write
  lastSeen?: any;                 // serverTimestamp -> returned as Timestamp after server write
}