
const router = require('express').Router();


router.get('/', (req, res) => {
res.json({
name: 'Tesfalem Markos',
title: 'Full Stack Developer',
skills: [
'Node.js',
'PHP',
'JavaScript',
'HTML',
'CSS',
'Bootstrap',
'GitHub'
]
});
});


module.exports = router;