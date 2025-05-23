import axios from "axios";

const API_KEY = import.meta.env.API_KEY
const BASE_URL = "https://techhk.aoscdn.com/api/tasks/visual/scale"
const MAXIMUM_RETRIES = 20

export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file)
        console.log("Image Uploaded Successfully, Task ID: ", taskId);

        const enhancedImageData = await PollForEnhancedImage(taskId)
        console.log("Enhanced Image Data: ", enhancedImageData);

        return enhancedImageData

    } catch (error) {
        console.log("Error enhancing image: ", error.message);
    }
}

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    try {
        const { data } = await axios.post(`${BASE_URL}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            }
        });

        if (!data?.data?.task_id) {
            console.error("Upload Error Data: ", data);
            throw new Error("Failed to upload Image. Task ID not found.");
        }

        return data.data.task_id;
    } catch (error) {
        console.error("Upload failed:", error.response?.data || error.message);
        throw error;
    }
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    console.log(`State: ${result.state}, Retry: ${retries}/${MAXIMUM_RETRIES}`);

    if (result.state === 2) {
        console.log("✅ Enhancement completed");
        return result;
    }

    if ([0, 1, 4].includes(result.state)) {
        if (retries >= MAXIMUM_RETRIES) {
            throw new Error("❌ Max retries reached. Image processing did not complete.");
        }

        // Wait before retry
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return PollForEnhancedImage(taskId, retries + 1);
    }

    if (result.state < 0) {
        throw new Error(`❌ Enhancement failed with state: ${result.state}. Check the image or API.`);
    }

    throw new Error(`❓ Unexpected state: ${result.state}`);
};


const fetchEnhancedImage = async (taskId) => {
    const { data } = await axios.get(
        `${BASE_URL}/${taskId}`, {
            headers: {
                "X-API-KEY": API_KEY,
            }
        }
    )
    if (!data?.data) {
        throw new Error("Image not found. Failed to fetch enhanced image.")
    }
    return data.data
}
