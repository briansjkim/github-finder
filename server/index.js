// const express = require('express');
// const bodyParser = require('body-parser');
// const PORT = 4000;
// const app = express();

// app.get('/api/repos', (req, res) => {
//     res.send('GET successful');
// });

// app.post('/api/repos', (req, res) => {
//     res.send('POST successful');
// })


// app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String,
        goodbye: String
    }
`);

const root = {
    hello: () => {
        return 'Hello world';
    },
    goodbye: () => {
        return 'Goodbye';
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running GraphQL server')
