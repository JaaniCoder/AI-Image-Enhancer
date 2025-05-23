# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# AI Image Enhancer

AI Image Enhancer is a web application that leverages the PicWish API to automatically enhance images using AI-powered algorithms. The project is built with React and Vite for a fast and modern frontend experience, styled with TailwindCSS for responsive and sleek UI design.

---

## Features

- Upload images directly from your device
- Enhance image quality with AI-driven processing via PicWish API
- Real-time preview of enhanced images
- Responsive and intuitive user interface
- Built with modern frontend technologies for optimal performance

---

## Tech Stack

- **React** - Frontend UI library  
- **Vite** - Fast build tool and development server  
- **TailwindCSS** - Utility-first CSS framework for styling  
- **PicWish API** - AI-based image enhancement backend service  

---

## Demo

Add your live demo URL here (if available)

---

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)  
- npm or yarn package manager  
- PicWish API key (You can obtain it from [PicWish API documentation](https://picwish.com/api))  

### Installation

1. Clone the repository

git clone https://github.com/yourusername/ai-image-enhancer.git
cd ai-image-enhancer
Install dependencies

npm install
# or
yarn install

Create a .env file in the root directory and add your PicWish API key:

VITE_PICWISH_API_KEY=your_api_key_here

Run the development server

npm run dev
# or
yarn dev

Open http://localhost:5173 in your browser to see the app.

### Usage
Click the upload button to select an image

The app will send the image to the PicWish API for enhancement

View and download the enhanced image

### Folder Structure

/src
  /components      # React components
  /assets          # Images, icons, etc.
  /utilities        # API service calls (e.g., PicWish integration)
  App.jsx          # Main React app component
  main.jsx         # Vite entry point

### Environment Variables
Variable	                              Description
VITE_PICWISH_API_KEY	     Your PicWish API authentication key

### Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments
PicWish for their powerful AI image enhancement API

React, Vite, TailwindCSS communities

