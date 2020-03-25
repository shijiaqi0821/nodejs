const redis = require("redis");

const redis_host="127.0.0.1";
const redis_port="6379";
const redis_pass="root";

const client = redis.createClient(redis_port,redis_host);
client.auth(redis_pass);

client.on("error", function(error) {
    console.error(error);
});

client.set("name", "hoo", redis.print);
client.get("name", redis.print);