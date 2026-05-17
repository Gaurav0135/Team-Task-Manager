const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  try {
    const { title, description, teamMembers } = req.body;
    const project = await Project.create({ title, description, teamMembers, createdBy: req.user._id });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const user = req.user;
    let projects;
    if (user.role === 'admin') {
      projects = await Project.find().populate('teamMembers', 'name email').populate('createdBy', 'name email');
    } else {
      projects = await Project.find({ $or: [{ teamMembers: user._id }, { createdBy: user._id }] })
        .populate('teamMembers', 'name email')
        .populate('createdBy', 'name email');
    }
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('teamMembers', 'name email').populate('createdBy', 'name email');
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    const { title, description, teamMembers } = req.body;
    project.title = title ?? project.title;
    project.description = description ?? project.description;
    project.teamMembers = teamMembers ?? project.teamMembers;
    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    await project.remove();
    res.json({ message: 'Project removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
