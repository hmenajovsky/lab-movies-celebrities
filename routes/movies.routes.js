const express = require("express");
const MovieModel = require("./../models/Movie.model");
const CelebrityModel = require("./../models/Celebrity.model");
const router = require("express").Router();


router.get('/movies/create', (req, res, next) => {
    CelebrityModel.find()
      .then((dbResponse) => {
        res.render("movies/new-movie", {
        celebrities : dbResponse
      });
  })
  .catch((e) => console.error(e));
  });  

  router.post('/movies/create', async (req, res, next) => {
    try {
        await MovieModel.create(req.body);
        res.redirect("/movies");
        } catch(err) {
            res.redirect("/movies/new-movie");
            next(err);
    }
})


router.post('/movies/:id/delete', async (req, res, next) => {
    try {
        await MovieModel.findByIdAndDelete(req.params.id);
        res.redirect("/movies");
        } catch(err) {
            res.redirect("/movies/new-movie");
            next(err);
    }
})

router.get('/movies/create', (req, res, next) => {
    MovieModel.find()
      .then((dbResponse) => {
        res.render("movies/new-movie", {
        celebrities : dbResponse
      });
  })
  .catch((e) => console.error(e));
  }); 

  router.get('/movies/:id/edit', (req, res, next) => {
    MovieModel.findById(req.params.id)
    .populate("cast")
      .then((dbResponse) => {
        res.render("movies/edit-movie", {
        movieToEdit : dbResponse
      });
  })
  .catch((e) => console.error(e));
  }); 


router.post('/movies/:id/edit', async (req, res, next) => {
    try {
        await MovieModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.redirect("/movies");
        } catch(err) {
            res.redirect("/movies/new-movie");
            next(err);
    }
})

router.get('/movies', (req, res, next) => {
    MovieModel.find()
      .then((dbResponse) => {
        res.render("Movies/movies", {
        movies : dbResponse
      });
  })
  .catch((e) => console.error(e));
  });

  router.get('/movies/:id',  (req, res, next) => {
         MovieModel.findById(req.params.id)
            .populate("cast")
          .then((movies) => {
            res.render("movies/movie-details", { movie : movies });
          })
          .catch((err) => console.error(err));
        });



module.exports = router;