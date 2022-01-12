const express = require("express");
const router = require("express").Router();
const CelebrityModel = require("./../models/Celebrity.model");

router.get('/celebrities/create', (req, res, next) => {
 res.render("celebrities/new-celebrity.hbs");
});


router.post('/celebrities/create', async (req, res, next) => {
    try {
        await CelebrityModel.create(req.body);
        res.redirect("/celebrities");
        } catch(err) {
            res.redirect("/celebrities/new-celebrity");
            next(err);
    }
})

router.get('/celebrities', (req, res, next) => {
    CelebrityModel.find()
      .then((dbResponse) => {
        res.render("celebrities/celebrities", {
        celebrities : dbResponse
      });
  })
  .catch((e) => console.error(e));
  });


module.exports = router;