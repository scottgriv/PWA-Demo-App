"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
const port = 3001;
const pool = new pg_1.Pool({
    user: 'demo',
    host: 'localhost',
    database: 'db_web_app',
    password: 'devdemo123',
    port: 5432,
});
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield pool.query('SELECT * FROM users');
        console.log('Fetched users:', rows); // Log the fetched rows
        res.json(rows);
    }
    catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Database error');
    }
}));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
