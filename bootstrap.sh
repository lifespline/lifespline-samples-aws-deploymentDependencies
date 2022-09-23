#!/bin/bash

# 1 - install system dependencies
# node is required to run JS files compiled from TS files
# and to install npm
sudo apt install nodejs
    
# required to install TS
sudo apt install npm

# remove "no longer required" packages
yes | sudo apt autoremove

# 2 - install app dependencies
#
# 2.1 npm packages
npm i -g typedoc jsdoc
npm i

# 2.2 vscode extensions
extensions=(

    # ts linter
    "dbaeumer.vscode-eslint"
)

for extension in "${extensions[@]}"; do
    code --install-extension "$extension" --force
done

# 2.2 python modules
python3 -m venv .env
source .env/bin/activate
pip install -r requirements.txt
