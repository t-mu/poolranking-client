const express = require('express');
const app = express();

app.use(express.static('../build'));

app.get('/*', (req, res) => {
    res.sendFile('../build/index.html');
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => console.log("App running on port 3000"));
}
