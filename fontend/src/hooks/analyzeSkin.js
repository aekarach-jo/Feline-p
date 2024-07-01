import axios from 'axios';

const API_URL = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBmtXsqlM7b7jRZI_sGFHb6OeN7Puk1g7U';  // เปลี่ยนให้เป็น API ที่คุณเลือกใช้

export const analyzeSkin = async (image) => {
    const base64Image = await convertToBase64(image);  // แปลงรูปภาพเป็น Base64
  
    const requestPayload = {
      requests: [
        {
          image: {
            content: base64Image
          },
          features: [
            {
              type: "LABEL_DETECTION",
              maxResults: 20
            }
          ]
        }
      ]
    };
  
    const response = await axios.post(API_URL, requestPayload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    return response.data;
}

const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    });
  }
