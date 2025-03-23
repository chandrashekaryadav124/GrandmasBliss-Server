const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Login endpoint
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = router.db;
  const user = db.get('users').find({ username, password }).value();

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// User registration endpoint
server.post('/users', (req, res) => {
  const newUser = req.body;
  const db = router.db;

  // Check if user already exists
  const existingUser = db.get('users').find({ username: newUser.username }).value();
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Add new user to the database
  db.get('users').push(newUser).write();
  res.status(201).json(newUser);
});

// Admin registration endpoint
server.post('/admins', (req, res) => {
  const newAdmin = req.body;
  const db = router.db;

  // Check if admin already exists
  const existingAdmin = db.get('admins').find({ username: newAdmin.username }).value();
  if (existingAdmin) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Add new admin to the database
  db.get('admins').push(newAdmin).write();
  res.status(201).json(newAdmin);
});

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});