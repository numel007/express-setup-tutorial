import {Router} from 'express';

const router = Router()

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.users));
});

router.get('/:userID', (req, res) => {
    return res.send(req.context.models.users[req.params.userID]);
})

export default router