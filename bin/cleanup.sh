sudo docker ps | sudo docker kill $(tail -n 1 | cut -d ' ' -f 1)
sudo docker rmi -f $(sudo docker images -a -q)
sudo docker system prune -f
sudo docker container prune -f
