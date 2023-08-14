import { Redis } from "ioredis";

const redis = new Redis();


// datatypes
/*
    * String
    * List
    * Set
    * Hash
*/

function getAndSet() {
    try {
        redis.set("mykey", "value");
        redis.get("mykey", (err, result) => {
            if (err) {
                console.error(err);
            } else {
                console.log(result);
            }
        });
    
        redis.get("mykey").then((result) => {
            console.log(result);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

redis.zadd("sortedSet", 1, "one", 2, "dos", 4, "quatro", 3, "three");
redis.zrange("sortedSet", 0, 2, "WITHSCORES").then((elements) => {
	console.log(elements);
});

async function listImpl() {
    try {
        const employess = ["sharan", "sakthi", "bharathi"];
    
        redis.set("count", 0);
        employess.forEach((element) => {
            redis.incrby("count", 1);
        });
        let countOfEmployees = await redis.get("count");
        redis.lpush("list", 1);
        redis.lpush("list", 2);
        redis.lpush("list", 3);
        redis.lpush("listDoesntExist", 404);
    
        let listDoesntExist = await redis.lrange("listDoesntExist", 0, -1);
        console.log(listDoesntExist);
    
        console.log(await redis.llen("list"));
        // console.log(countOfEmployees);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function setImpl() {
    try {
        redis.sadd("set1", 1, 2, 3, 3, 3, 4, 4, 5, 6);
        redis.sadd("set2", 5, 6 , 2, 3);
        let set = await redis.smembers("set2");
        let isExists = await redis.sismember("set","789");
        console.log(set);
        console.log(await redis.scard("set"));
        console.log(await redis.sinter("set1", "set2"));
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function hashImpl() {
    try {
        await redis.hset('name', 'sharan', 'deepak');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

async function globalFunction() {
    await listImpl();
    await setImpl();
    await hashImpl();
    await redis.flushdb();
    await redis.quit();
}
listImpl();
globalFunction();



// redis.set("mykey", "hello", "EX", 10);
