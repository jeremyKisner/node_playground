sudo docker build -t lotus/web-app .
sudo docker run \
	-p 49160:8000 \
	-d lotus/web-app
sudo docker ps | sudo docker logs $(tail -n 1 | cut -d ' ' -f 1)
echo 'To test the application'
echo 'curl http://localhost:49160/get'
