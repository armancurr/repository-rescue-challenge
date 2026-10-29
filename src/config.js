// Port comes from the PORT environment variable (see .env.example), defaulting to 3000.
const PORT = Number(process.env.PORT) || 3000;

module.exports = {
  PORT,
};
