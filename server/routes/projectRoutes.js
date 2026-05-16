const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.use(auth);

router.post('/', role(['admin']), projectController.createProject);
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);
router.put('/:id', role(['admin']), projectController.updateProject);
router.delete('/:id', role(['admin']), projectController.deleteProject);

module.exports = router;
