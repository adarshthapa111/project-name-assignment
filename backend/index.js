import express from 'express';
import { fetchUsers } from './database.js';
const app = express();

app.get("/users", async (req, res) => {
    // res.send("These are all the users");
    try {
        const users = await fetchUsers();
        res.json(users);
    } catch (err) {
        console.error("Error executing query", err);
        res.status(500).send('Error fetching users');
    }
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("Something broke");
})

app.listen(8080, () => {
    console.log("server is running on port 8080");
})