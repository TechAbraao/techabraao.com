# My personal Website

- Official portfolio website __Abraão Santos (Techabraao).__ 
- This project is open-source, meaning you are free to clone the repository and customize it to your liking.
- Additionally, if you would like to contribute to this project, feel free to open an issue or submit a pull request.


### Live Preview (soon)
```bash
https://techabraao.com
```

### Getting started
Follow the steps below to clone and run this project locally.

#### 1. Clone the repository
```bash
git clone git@github.com:TechAbraao/techabraao.com.git
```

#### 2. Navigate to the project folder
```bash
cd techabraao.com
```

#### 3. Configure GitHub username
Before running the project, configure your GitHub username to fetch your repositories.

Edit the file:
```bash
./src/js/configs.js
```
And update:
```javascript
const CONFIG = {
    GITHUB_USERNAME: 'your_username'
}
```

#### 4. Open the project
Since this is a static website, you can simply open the `index.html` file in your browser.
Or, for a better development experience, you can use a local server:
#### Using VSCODE Live Server
- Install the Live Server extension
- Right-click on ```index.html```
- Click Open with Live Server
- The project should now be running locally!

### Using Docker 
#### 1. Building the Docker image
If you want to create a Docker image to use in a container, do the following:
```bash
docker build -f dockerfiles/Dockerfile -t techabraao.com .
```
Then initialize the container:
```bash
docker run -p <port>:80 techabraao.com
```
It will now be available at:
```bash
http://localhost:<port>
```

#### 2. Pulling the image from Docker Hub
To get the image from Docker Hub, you will also need to specify the project version:
```bash
docker run -p 8000:80 techabraao/techabraao.com:v1.0.0 -d
```