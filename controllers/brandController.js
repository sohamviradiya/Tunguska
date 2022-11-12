const Brand = require("../models/brand");
const Product = require("../models/product");

exports.brandController = {
     list: (req, res) => {
          Brand.find().exec().then((brands) => {
               res.render("brand/list", {brands, title: "Brands"});
          }).catch((err) => {
               console.log(err);
               res.render("error", { error: err });
          });
     },
     detail: (req, res) => {
          res.send("Brand Details Not Yet Implemented");
     },
     create: {
          get: (req, res) => {
               res.send("Brand Creation Get Not Yet Implemented");
          },
          post: (req, res) => {
               res.send("Brand Creation Post Not Yet Implemented");
          }
     },
     update: {
          get: (req, res) => {
               res.send("Brand Updation Get Not Yet Implemented");
          },
          post: (req, res) => {
               res.send("Brand Updation Post Not Yet Implemented");
          }
     },
     delete: {
          get: (req, res) => {
               res.send("Brand Deletion Get Not Yet Implemented");
          },
          post: (req, res) => {
               res.send("Brand Deletion Post Not Yet Implemented");
          }
     }
};
