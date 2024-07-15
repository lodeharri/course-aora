import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.hr.aora",
  projectId: "6693f93f002f02ea4fb8",
  databaseId: "6693fac5000d4c7304af",
  userCollectionId: "6693fae30005e9307a3f",
  videoCollectionId: "6693fb19002310b0ba43",
  storageId: "6693fd90003141cdc8a3",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
