## System Requirements

To get started with development, you need to install few tools

1. git

   `git` version 2.13.1 or higher. Download [git](https://git-scm.com/downloads) if you don't have it already.

   To check your version of git, run:

   ```shell
    git --version
   ```

2. node

   `node` version 16.15.1 or higher. Download [node](https://nodejs.org/en/download/) if you don't have it already.

   To check your version of node, run:

   ```shell
    node --version
   ```

3. npm

   `npm` version 5.6.1 or higher. You will have it after you install node.

   To check your version of npm, run:

   ```shell
    npm --version
   ```

## Setup

To set up a development environment, please follow these steps:

1. Clone the repo

   ```shell
    git clone https://github.com/bhavy03/SpendWiseAssign.git
   ```

2. Install the dependencies

   ```shell
    npm install
   ```

   If you get an error, please check the console for more information.

   If you don't get an error, you are ready to start development.

3. Replace ServiceAccountKey.json with your serviceAccountKey.json file
    

4. Run the app

   ```shell
   npm run dev
   ```

   Project will be running in the terminal.
   Now whenever the entries in the firebase realtime database changes it will update the other collection
