const db = require("../models/database/db");

function construirQuery(arrayCategories) {
  var names = "";

  for (let i = 0; i < arrayCategories.length; i++) {
    if (i === 0) {
      continue;
    }
    names += `"` + arrayCategories[i] + `",`;
  }

  var historico = arrayCategories[0];
  for (let i = 0; i < arrayCategories.length; i++) {
    if (i === 0) {
      names += `"` + arrayCategories[0] + `"`;
      continue;
    }

    if (i < arrayCategories.length) {
      historico += "," + arrayCategories[i];
    }

    names += `,"` + historico + `"`;
  }

  return names;
}

module.exports = {
  checkOptionalLinkIsEmpty(req, res, next) {
    const { linkMoreDetails } = req.body;

    if (!linkMoreDetails) {
      req.optionalLink = "Null";
      return next();
    }
    req.optionalLink = linkMoreDetails;

    return next();
  },

  checkLocationsIsEmpty(req, res, next) {
    const { state } = req.body;
    const { city } = req.body;
    const { address } = req.body;

    if (!state || !city) {
      req.estado = "Null";
      req.cidade = "Null";
      req.endereco = "Null";
      req.type = "remoto";

      return next();
    }

    req.estado = state;
    req.cidade = city;
    req.endereco = address;
    req.type = "local";

    return next();
  },

  showAllIdeas(req, res) {
    db.all(`SELECT * FROM ideas`, (err, rows) => {
      if (err) {
        return console.log(err);
      }

      const dados = rows;

      return res.json(dados);
    });
  },

  showAllRemoteIdeas(req, res) {
    db.all(`SELECT * FROM ideas WHERE type = 'remoto'`, (err, rows) => {
      if (err) {
        return console.log(err);
      }

      const dados = rows;

      return res.json(dados);
    });
  },

  showIdeaPerID(req, res) {
    const { id } = req.params;

    db.all(`SELECT * FROM ideas WHERE id = ${id}`, (err, row) => {
      if (err) {
        return console.log(err);
      }

      return res.json(row);
    });
  },

  showIdeasPerState(req, res) {
    const { state } = req.params;

    db.all(
      `SELECT * FROM ideas WHERE type = 'local' AND state = '${state}'`,
      (err, rows) => {
        if (err) {
          return console.log(err);
        }

        const dados = rows;

        return res.json(dados);
      }
    );
  },

  showIdeaPerCategory(req, res) {
    const { type } = req.params;
    const { category } = req.params;
    let collum = "type";
    if (!(type === "remoto")) {
      collum = "state";
    }
    const arrayCategories = category.split(",").sort();

    const query = construirQuery(arrayCategories);

    db.all(
      `SELECT * FROM ideas WHERE ${collum} = '${type}' AND category IN (${query})`,
      (err, rows) => {
        if (err) {
          return console.log(err);
        }

        return res.json(rows);
      }
    );
  },

  createIdea(req, res) {
    console.log(req.body);
    const { author } = req.body;
    const { title } = req.body;
    const { linkImg } = req.body;
    const { description } = req.body;
    const { estado } = req;
    const { cidade } = req;
    const { endereco } = req;
    const { optionalLink } = req;
    const { type } = req;
    const { category } = req.body;

    const categories = category.split(",").sort().toString();

    const idea = [
      title,
      author,
      linkImg,
      description,
      estado,
      cidade,
      endereco,
      optionalLink,
      type,
      categories,
    ];

    const query = `
      INSERT INTO ideas (
        title,
        author,
        linkImg,
        description,
        state,
        city,
        address,
        linkMoreDetails,
        type,
        category
      ) VALUES (?,?,?,?,?,?,?,?,?,?);
    `;

    function afterInsertData(err) {
      if (err) {
        return console.log(err);
      }

      console.log("Cadastrado com sucesso");
      return res.json(this);
    }

    db.run(query, idea, afterInsertData);
  },

  deleteIdea(req, res) {
    const { id } = req.params;

    db.run(`DELETE FROM ideas WHERE id = '${Number(id)}'`, (err) => {
      if (err) {
        return console.log(err);
      }

      return res.send("Ideia deletada com sucesso!");
    });
  },
};
