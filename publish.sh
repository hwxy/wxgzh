CurrentPath="`pwd`" #绝对路径

ENV=$1 #环境
 
if [ ! -d "./react" ]; then
  git clone https://github.com/hwxy/react.git
  echo  "clone react product"
else
  echo "项目已经存在"  
fi

# cd ./react

git pull https://github.com/hwxy/react.git master

npm i 

# npm run build

# cp -rf ./build/webpack-entrypoints.json ../asset

# cp -rf ./build/static ../asset

# cd ../

Now=`date +%Y%m%d%H%M%S` #当前时间

Tag="$1$Now" #tag号

previewLog=`tail -n -1 ${CurrentPath}/prod.log`

echo "$Tag" >> "${CurrentPath}/prod.log"

echo $previewLog

docker build -t "47.101.32.46:5000/product:$Tag" .

docker run --name=${Tag} -p 4000:4000 -d "47.101.32.46:5000/product:${Tag}"

# docker push "47.101.32.46:5000/mall:$Tag"



