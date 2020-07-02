Build image with 
```
docker build -t imageName .
```

Start container with
```
docker run -d -p 5000:80 --name myContainerName imageName
```
To run the app locally on port 5000