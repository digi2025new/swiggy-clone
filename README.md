# 🍔 Swiggy Clone (React + Tailwind CSS)

A responsive **Swiggy-inspired food delivery web application** built using **React, Vite, and Tailwind CSS**.
This project demonstrates modern frontend development practices, UI/UX polish, routing, state management, and deployment on Netlify.

🔗 **Live Demo:** [https://swiggyy-clone-s.netlify.app](https://swiggyy-clone-s.netlify.app)

---

## 🚀 Features

* 🏠 Home page with restaurant listings
* 🔍 Search restaurants by name or cuisine
* ⭐ Filter by rating (4.5+)
* ⚡ Fast delivery filter
* 🧾 Restaurant details page
* 🛒 Cart functionality (add / increase / decrease items)
* 📱 Fully responsive (Mobile, Tablet, Desktop)
* 🎨 Smooth UI animations & hover effects
* 🌐 Deployed on Netlify

---

## 🛠 Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** React Context API
* **Icons:** React Icons
* **Deployment:** Netlify
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
swiggyy/
├── public/
│   ├── images/
│   ├── restaurantChains.json
│   ├── category.json
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Card.jsx
│   │   ├── Category.jsx
│   │   ├── TopRest.jsx
│   │   ├── OnlineDelivery.jsx
│   │   ├── BestCuisines.jsx
│   │   └── BestPlaces.jsx
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Cart.jsx
│   │   └── RestaurantDetails.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/digi2025new/swiggy-clone.git

# Navigate into the project
cd swiggy-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

Open 👉 `http://localhost:5173` in your browser.

---

## 🌍 Deployment (Netlify)

Steps used to deploy:

1. Run build command:

   ```bash
   npm run build
   ```
2. Upload the `dist` folder to Netlify
   **OR**
3. Connect GitHub repo → Auto deploy enabled

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://github.com/user-attachments/assets/271a3bcc-72f3-4ed5-b43d-963b6a3ea933)

### 🍴 Restaurant Listing
![Restaurant](https://github.com/user-attachments/assets/b029b396-48fa-475b-9189-391f9e430347)

### 🛒 Cart Page
![Cart](https://github.com/user-attachments/assets/682bc733-7222-46a8-9588-7ea1e07618bc)

### 💳 Checkout Page
![Checkout](https://github.com/user-attachments/assets/3b4f56a9-7b4b-4c14-8617-8a625635ceea)


---

## 📌 What I Learned

* Building scalable React components
* Managing global state using Context API
* Creating responsive layouts with Tailwind CSS
* Handling dynamic routing
* Deploying frontend apps on Netlify
* Debugging production issues (assets, paths, builds)

---

## 🙋‍♂️ Author

**Suraj Golambade**
Frontend Developer (React)

* GitHub: [https://github.com/digi2025new](https://github.com/digi2025new)
---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it motivates me a lot!

---

### 🚀 Future Enhancements

* Backend integration using Node.js / Firebase
* Authentication & user profiles
* Skeleton loaders and advanced UI animations
* Order tracking & payment integration

