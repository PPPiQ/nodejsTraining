const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth')
const router = new express.Router();




router.delete('/tasks/:id', async (req, res) => {

    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) { res.status(404).send()}
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ... req.body,
        owner: req.user._id
    })
    try {
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // })
});

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send("Sorry. Not task wth such id.");
        }
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error)
    }
    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send();
    //     }
    //     res.status(201).send(task);
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(201).send(tasks)
    } catch (error) {
        res.status(400).send(e)
    }
    // Task.find({}).then((tasks) => {
    //     res.status(201).send(tasks);
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update) );
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Task.findById(req.params.id);
        updates.forEach(update => task[update] = req.body[update]);
        await task.save();
        if (!task) {
            return res.status(404).send()
        }

        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;