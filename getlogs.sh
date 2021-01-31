sudo docker ps | sudo docker logs $(tail -n 1 | cut -d ' ' -f 1)

