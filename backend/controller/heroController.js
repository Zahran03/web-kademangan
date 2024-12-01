const supabase = require("../supabaseClient");

const getAllHero = async (req, res) => {
  try {
    const { data: hero, error } = await supabase.from("heroSection").select();
    return res.send(hero);
  } catch (error) {
    return res.send({ error });
  }
};

const createHeroSection = async (req, res) => {
  try {
    const { data, error } = await supabase.from("heroSection").insert(req.body);
    if (error) {
      return res.status(400).json();
    }
    res.status(200).json(req.body);
  } catch (error) {
    res.send({ error });
  }
};

module.exports = {
  getAllHero,
  createHeroSection,
};
