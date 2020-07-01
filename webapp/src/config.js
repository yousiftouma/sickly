const config = {
    apiUrl: process.env.NODE_ENV === 'production' ? 'https://sickly.azurewebsites.net/' : 'https://localhost:5001/'
};

export default config;