# metaphorical-cards
Metaphorical Cards

Start the server
```
cd server/
docker-compose -p server build && docker-compose -p server up -d && docker-compose -p server logs -f server
```

Stop the server
```
docker-compose -p server stop
```

Start the web
```
cd web/
npm run start
```