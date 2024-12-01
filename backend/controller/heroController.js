const supabase = require("../supabaseClient");

const getAllHero = async (req, res) => {
  try {
    const { data: hero, error } = await supabase.from("heroSection").select();
    return res.send(hero);
  } catch (error) {
    return res.send({ error });
  }
};

module.exports = {
  getAllHero,
};
