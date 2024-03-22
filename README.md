# Mini Project (NodeJS)

**Running the Web Application**

This guide provides step-by-step instructions on how to run the web application built using React for the frontend, Node.js with Express for the backend, and MySQL for the database.

**Prerequisites**

- Node.js and npm installed on your system. You can download and install them from the official Node.js website: [Node.js](https://nodejs.org/)
- MySQL installed and running on your system. You can download and install MySQL from the official MySQL website: [MySQL](https://www.mysql.com/)

**Step 1: Setting Up the Backend (Node.js with Express and MySQL)**

1. Clone the repository from GitHub:

    # git clone https://github.com/dujale1227/cherry_serino_techExam.git

2. Install dependencies on the backend directory/root folder:

    #  npm install
    
      Install nysql2 package manually
    # npm install mysql2

3. Set up the MySQL database:

   - Start the Apache and MySQL module on the XAMPP Control Panel.
   - Create a new MySQL database.
    # serino_db
   - Run Migrations on the root folder.
    # npx sequelize-cli db:migrate
   - Run Seeder Script on the root folder.
    # npx sequelize-cli db:seed:all
   

The backend server should now be running on a specified port (e.g., 5000).

**Step 2: Setting Up the Frontend (React)**

1. Navigate to the frontend directory:

    # cd client

3. Install dependencies:

    # npm install


**Step 3: Running the Web Application**

1. On the terminal navigate to the root folder / backend directory .

2. Start the backend server:

    # npm start / nodemon

3. Open another terminal and navigate to the frontend directory.
    # cd client

4. Start the frontend server:
    # npm start

5. Access the web application in your web browser at `http://localhost:5000` or whichever port the frontend server is running on.

**Conclusion**

You have now successfully set up and run the web application built using React for the frontend, Node.js with Express for the backend, and MySQL for the database.


# ---------------
Thank you for the opportunity to showcase my skills by completing the provided task. It was an engaging and rewarding experience, and I truly enjoyed working on it.

Looking forward to the next steps in the recruitment process. ❤️
# ---------------
