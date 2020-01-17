if [ ! -d "./react" ]; then
  git clone https://github.com/hwxy/react.git
  echo  "clone react product"
else
  echo "项目已经存在"  
fi

cd ./react

git pull https://github.com/hwxy/react.git master

npm run build

cp -rf ./build/webpack-entrypoints.json ../asset

cp -rf ./build/static ../asset