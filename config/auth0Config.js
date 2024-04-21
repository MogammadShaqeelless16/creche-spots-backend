import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';
dotenv.config();

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: process.env.ISSUER_BASE_URL, // Use the environment variable
    tokenSigningAlg: "RS256"
})

export default jwtCheck;