sudo docker build -t lotus/web-app .
sudo docker run \
	-p 49160:8080 \
	-d lotus/web-app
sudo docker ps | sudo docker logs $(tail -n 1 | cut -d ' ' -f 1)
echo 'To test the application'
echo 'curl -i localhost:49160'
