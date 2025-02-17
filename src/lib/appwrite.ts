import { Client, Databases } from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT_ID);

// Initialize Databases service
const databases = new Databases(client);

export const submitContactForm = async (formData: {
    name: string;
    email: string;
    message: string;
}) => {
    try {
        const response = await databases.createDocument(
            import.meta.env.PUBLIC_APPWRITE_DATABASE_ID,
            import.meta.env.PUBLIC_APPWRITE_COLLECTION_ID,
            'unique()',
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }
        );
        return { success: true, data: response };
    } catch (error) {
        console.error('Error submitting form:', error);
        return { success: false, error };
    }
};
