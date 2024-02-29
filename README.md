# Rolldrop Template

---

This template provides you with a foundation to create your own airdrop website. 
Below are instructions on how to set up and customize the template for your needs.

### Backend Setup:
 
1. Begin by creating a Firebase project on the Firebase Console.


2. Navigate to the `backend` folder and update the `.firebaserc` file with your Firebase project details.


3. In the `backend/functions` directory, deploy the functions using `npm run deploy`.


4. Add eligibilities records to the database - you can utilize the `createEligibilityRequest` function.

### Website Setup:

1. Update the `.firebaserc` file in the root folder with your Firebase project details.


2. Use the `env.demo` file to determine which properties are needed, and update the `.env` file accordingly.


3. In the `src` directory, update the `consts.js` file with your specific configurations.


4. In the `public` directory, update the terms files, logos, and the `index.html` file as per your requirements.


5. Update logos in the `assets` directory.


6. Customize any other aspects you desire, ensuring to update the `claimEndDate` in the `consts.js` file.


7. Finally, deploy the project to make your airdrop website live.


Feel free to explore and modify the template to suit your project needs. 
