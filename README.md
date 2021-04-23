# Quick Guide on how to open the app
## Step 1. Create a new file and install Node.js
More than likely you have node already but you need it to install packages.

Just create a new folder and clone the files. Navigate to cd PPIT_Project and open a new command prompt.

## Step 2. Install Expo CLI
There was a choice between Expo and React Native CLI but i went with Expo since its more friendly to beginners.

Use npm install --global expo-cli (May take a while!)

## Step 3. Choosing how to run it
From here you can open VSCode with code . and see the files if you'd like, where everything is dictated by App.js. Next just use npm add expo to add the necessary dependencies and use expo start to run the app. Or you could create a new one from here using expo init myproject if you didn't clone the git files, either way a new browser window will be created and you're presented with options.

You can open the app in a browser window using W on the CLI or from the menu on the new window it created. The way I got it on my phone was the QR code where I installed the Expo Client from the play store. I have not tested the Android emulator or the direct connection as I don't have a good enough cable to connect my phone which maybe you could try?

## Step 4. Debugging and changing the App.
As mentioned previously, everything is dictated with the App.js. Every time you save the project, it counts as a compile so it's similar to nodemon or anything that compiles your code on save. Just refresh the browser window or refresh the app by shaking your phone with it opened and pressing reload page

# Hope this was clear and concise!
