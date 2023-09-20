// api/foodAPI.ts

import axios from 'axios';

export const getFoodDetails = async (category: string) => {
    const apiUrl = `https://your-api-endpoint.com/food-details?category=${category}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error("API 호출 중 에러 발생:", error);
        throw error;
    }
}
