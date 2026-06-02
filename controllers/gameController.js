const Game = require("../models/game");
const Company = require("../models/company");

exports.game_list = async (req, res, next) => {
  try {
    const games = await Game.find()
      .populate("empresa")
      .exec();

    res.render("game_list", {
      title: "Lista de Jogos",
      games,
    });
  } catch (err) {
    next(err);
  }
};

exports.company_create_get = (req, res) => {
  res.render("company_form", {
    title: "Nova Empresa",
  });
};

exports.company_create_post = async (req, res, next) => {
  try {
    const company = new Company({
      nome: req.body.nome,
      pais: req.body.pais,
      fundacao: req.body.fundacao,
    });

    await company.save();

    res.redirect("/jogos");
  } catch (err) {
    next(err);
  }
};

exports.company_update_get = async (req, res, next) => {
  try {
    const company = await Company.findById(req.params.id);

    res.render("company_form", {
      title: "Editar Empresa",
      company,
    });
  } catch (err) {
    next(err);
  }
};

exports.company_update_post = async (req, res, next) => {
  try {
    const company = {
      nome: req.body.nome,
      pais: req.body.pais,
      fundacao: req.body.fundacao,
    };

    await Company.findByIdAndUpdate(
      req.params.id,
      company
    );

    res.redirect("/jogos");
  } catch (err) {
    next(err);
  }
};

exports.game_create_get = async (req, res, next) => {
  try {
    const empresas = await Company.find();

    res.render("game_form", {
      title: "Novo Jogo",
      empresas,
    });
  } catch (err) {
    next(err);
  }
};

exports.game_create_post = async (req, res, next) => {
  try {
    const game = new Game({
      titulo: req.body.titulo,
      genero: req.body.genero,
      anoLancamento: req.body.anoLancamento,
      empresa: req.body.empresa,
    });

    await game.save();

    res.redirect("/jogos");
  } catch (err) {
    next(err);
  }
};

exports.game_update_get = async (req, res, next) => {
  try {
    const [game, empresas] = await Promise.all([
      Game.findById(req.params.id),
      Company.find(),
    ]);

    res.render("game_form", {
      title: "Editar Jogo",
      game,
      empresas,
    });
  } catch (err) {
    next(err);
  }
};

exports.game_update_post = async (req, res, next) => {
  try {
    const game = {
      titulo: req.body.titulo,
      genero: req.body.genero,
      anoLancamento: req.body.anoLancamento,
      empresa: req.body.empresa,
    };

    await Game.findByIdAndUpdate(
      req.params.id,
      game
    );

    res.redirect("/jogos");
  } catch (err) {
    next(err);
  }
};

exports.game_detail = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id)
      .populate("empresa")
      .exec();

    res.render("game_detail", {
      title: game.titulo,
      game,
    });
  } catch (err) {
    next(err);
  }
};

exports.company_list = async (req, res, next) => {
  try {
    const companies = await Company.find();

    res.render("company_list", {
      title: "Empresas",
      companies,
    });
  } catch (err) {
    next(err);
  }
};

exports.company_detail = async (req, res, next) => {
  try {
    const [company, games] = await Promise.all([
      Company.findById(req.params.id),
      Game.find({ empresa: req.params.id }),
    ]);

    res.render("company_detail", {
      title: company.nome,
      company,
      games,
    });
  } catch (err) {
    next(err);
  }
};