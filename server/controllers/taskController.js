const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate, assignedTo, projectId } = req.body;
    const task = await Task.create({ title, description, status, priority, dueDate, assignedTo, projectId, createdBy: req.user._id });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const user = req.user;
    let tasks;
    if (user.role === 'admin') {
      tasks = await Task.find().populate('assignedTo', 'name email').populate('projectId', 'title');
    } else {
      tasks = await Task.find({ $or: [{ assignedTo: user._id }, { createdBy: user._id }] })
        .populate('assignedTo', 'name email')
        .populate('projectId', 'title');
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('assignedTo', 'name email').populate('projectId', 'title');
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Members can only update their task status
    if (req.user.role === 'member') {
      if (String(task.assignedTo) !== String(req.user._id) && String(task.createdBy) !== String(req.user._id)) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      // allow only status update for members
      if (req.body.status) {
        task.status = req.body.status;
        await task.save();
        return res.json(task);
      }
      return res.status(400).json({ message: 'Members can only update task status' });
    }

    // Admin can update any field
    const { title, description, status, priority, dueDate, assignedTo } = req.body;
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.status = status ?? task.status;
    task.priority = priority ?? task.priority;
    task.dueDate = dueDate ?? task.dueDate;
    task.assignedTo = assignedTo ?? task.assignedTo;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    await task.remove();
    res.json({ message: 'Task removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
