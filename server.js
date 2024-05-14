const express = require('express');
const app = express();


function generateFreelancer() {
    const names = ['Alice', 'Bob', 'Carol', 'David', 'Emma'];
    const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Consultant'];
    return {
        name: names[Math.floor(Math.random() * names.length)],
        occupation: occupations[Math.floor(Math.random() * occupations.length)],
        startingPrice: Math.floor(Math.random() * 100) + 30 
    };
}


app.get('/freelancers', (req, res) => {
    const freelancers = [generateFreelancer(), generateFreelancer(), generateFreelancer()];
    res.json(freelancers);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
