
# E-Commerce Product Listing Page

This is a simple React application that fetches and displays a list of products from an external API, `fakestoreapi.com`. The app includes basic UI components such as a product card, header, and banner. It also handles loading states and errors effectively, ensuring a smooth user experience.

## Features
- Fetches product data from `fakestoreapi.com`.
- Displays product images, titles, prices, and ratings in a grid format.
- Loading indicator displayed while data is being fetched.
- Error handling with a fallback message (`"No Data to Show"`) if the API request fails.

## Approach
- **Components**: The app is built using React functional components (`Header`, `Banner`, `Card`). Each product is rendered using a `Card` component, which is dynamically generated based on the data received from the API.
- **State Management**: The `useState` hook is used to manage the application's state for loading, error handling, and product data.
- **API Fetching**: Data is fetched asynchronously using `fetch` inside the `useEffect` hook. A loading state is set to `true` when the request is initiated and set to `false` once the data is received or an error occurs. To simulate loading time, a `setTimeout` is applied for better UX.
- **Error Handling**: The app catches API errors and displays an error message if the API request fails.

## Challenges Faced
- **Handling API Errors**: Ensuring that errors from the API (like connection issues) are caught and displayed properly was critical to avoid breaking the user interface.
- **Loading States**: Managing the loading state and ensuring the correct message or products were displayed based on the data fetched required careful handling of asynchronous operations.

## How to Run the Application Locally

### Prerequisites
- Node.js and npm installed on your machine.

### Steps
1. Clone the repository:
   - git clone https://github.com/hassanesssam/e-commerce-product-listing-page.git
   - cd e-commerce-product-listing-page
 

2. Install dependencies:
   - npm install


3. Start the application:
   - npm start
   The application will run locally at `http://localhost:3000`.


