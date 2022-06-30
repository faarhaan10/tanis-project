/*******************************************\
 -------------tanis code----------------
\*******************************************/
// add billing
app.post('/billing', async (req, res) => {
    const data = req.body;
    const result = await billCollection.insertOne(data);
    res.send(result);
});

// get billing
app.get('/billing', async (req, res) => {
    const page = req.query.page;
    const size = parseInt(req.query.size);
    const cursor = billCollection.find().sort({ "_id": -1 });
    const count = await cursor.count();

    let result;
    if (page) {
        result = await cursor.skip(page * size).limit(size).toArray();
    }
    else {
        result = await cursor.toArray();
    }
    res.send({ result, count });
});

// get single billing
app.get('/singlebilling/:id', async (req, res) => {
    const id = req.params.id;
    result = await billCollection.findOne({ _id: ObjectId(id) });
    res.send(result);
});
