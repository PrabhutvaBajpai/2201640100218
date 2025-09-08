const axios = require('axios');

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmFiaHV0dmFiYWpwYWlvZmZpY2lhbEBnbWFpbC5jb20iLCJleHAiOjE3NTczMjA1MTMsImlhdCI6MTc1NzMxOTYxMywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjVmMjQyZTg2LTY2ZTctNGQyZC1iZTExLWY2NGRjOGQyODNiNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InByYWJodXR2YSBiYWpwYWkiLCJzdWIiOiJlMzZhZGM3Mi0wYzQxLTQzYmQtYTRkMy1lZWI2ZmQ2NjI1YTkifSwiZW1haWwiOiJwcmFiaHV0dmFiYWpwYWlvZmZpY2lhbEBnbWFpbC5jb20iLCJuYW1lIjoicHJhYmh1dHZhIGJhanBhaSIsInJvbGxObyI6IjIyMDE2NDAxMDAyMTgiLCJhY2Nlc3NDb2RlIjoic0FXVHVSIiwiY2xpZW50SUQiOiJlMzZhZGM3Mi0wYzQxLTQzYmQtYTRkMy1lZWI2ZmQ2NjI1YTkiLCJjbGllbnRTZWNyZXQiOiJ3VWJKdFFWRWpmTnBFdlRNIn0._iw9VdRznD666dEkrFQFs9ooUNJHXrQbPlwLq066JcE";

async function Log(stack, level, packageName, message) {
    const LOG_API_URL = "http://20.244.56.144/evaluation-service/logs";
    try {
        await axios.post(
            LOG_API_URL,
            {
                stack: stack.toLowerCase(),
                level: level.toLowerCase(),
                package: packageName.toLowerCase(),
                message: message
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                }
            }
        );
    } catch (error) {
    }
}

module.exports = { Log };