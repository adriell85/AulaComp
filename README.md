
# Getting Started with Your Application

This project consists of a front-end and a back-end. Follow the instructions below to set up and run the application.

## Available Scripts

### Running the Back-end

In the project directory:

```bash
cd backend
node server.js
```

The back-end server will start and listen for requests. Ensure the necessary dependencies are installed by running `npm install` in the `backend` folder before starting.

### Running the Front-end

In the project directory:

```bash
cd frontend
npm start
```

This will start the front-end in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

The page will reload when you make changes to the code.

## Setting Up MongoDB

### Installation on Linux

1. **Import the MongoDB public key:**

    ```bash
    wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
    ```

2. **Create a MongoDB list file:**

    ```bash
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
    ```

3. **Update your packages and install MongoDB:**

    ```bash
    sudo apt update
    sudo apt install -y mongodb-org
    ```

4. **Start MongoDB:**

    ```bash
    sudo systemctl start mongod
    ```

5. **Enable MongoDB to start on boot:**

    ```bash
    sudo systemctl enable mongod
    ```

6. **Verify MongoDB is running:**

    ```bash
    sudo systemctl status mongod
    ```

### Installation on Windows

1. **Download the MongoDB MSI Installer:**
   - Visit the [MongoDB download center](https://www.mongodb.com/try/download/community) and select the MSI package for your Windows version.

2. **Run the installer:**
   - Follow the on-screen instructions and choose "Complete" setup.

3. **Set up MongoDB as a Windows service:**
   - During installation, select "Install MongoDB as a Service."

4. **Verify the installation:**
   - Open the Command Prompt and run:

     ```bash
     mongo --version
     ```

5. **Start MongoDB:**
   - MongoDB should start automatically if installed as a service. If not, start it manually by running:

     ```bash
     net start MongoDB
     ```

## Installing npm

### Installation on Linux

1. **Update your package index:**

    ```bash
    sudo apt update
    ```

2. **Install Node.js and npm:**

    ```bash
    sudo apt install -y nodejs npm
    ```

3. **Verify installation:**

    ```bash
    node -v
    npm -v
    ```

### Installation on Windows

1. **Download the Node.js installer:**
   - Visit the [Node.js download page](https://nodejs.org/) and download the LTS version.

2. **Run the installer:**
   - Follow the on-screen instructions. Make sure to install npm along with Node.js.

3. **Verify installation:**
   - Open the Command Prompt and run:

     ```bash
     node -v
     npm -v
     ```

## Notes

- Ensure that MongoDB is running before starting the back-end.
- Install all dependencies for both the front-end and back-end by running `npm install` in their respective directories.
