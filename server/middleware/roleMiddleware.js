const roleMiddleware = (requiredRoles = []) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  if (!requiredRoles.length) return next();
  if (requiredRoles.includes(req.user.role)) return next();
  return res.status(403).json({ message: 'Forbidden: insufficient role' });
};

module.exports = roleMiddleware;
