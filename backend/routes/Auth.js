const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // Insert new user data into Supabase
    const { data, error } = await supabase.from("User").insert([
      {
        username: req.body.username,
        password: hashedPass,
        role: req.body.role,
      },
    ]);

    if (error) {
      throw error;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { data: users, error } = await supabase
      .from("User")
      .select("*")
      .eq("username", req.body.username);

    if (error) throw error;
    if (!users || users.length === 0) {
      return res.status(400).json("wrong credentials");
    }

    const user = users[0];

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("wrong credentials");
    }

    const { password, ...others } = user;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
