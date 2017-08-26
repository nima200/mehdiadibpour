const assert = require('assert');
const logger = require('../services/logger').logger;
const ProjectModel = require('../models/mongo/Project');
exports.init = function (app, apiRouter) {
  logger.notice(`Initializing 'New Webpage' endpoint`);
  apiRouter.post('/projects/new', function (req, res) {
    /**
     * Construct a project out of the request body
     */
    const project = new ProjectModel({
      title: req.body.title
    });
    /**
     * Save the projects onto the database
     */
    project.save()
      .then((doc) => {
        assert.equal(doc.title, req.body.title);
        logger.info(`Saved a new page with title ${doc.title}`);
        /**
         * Log the current number of projects in the database
         */
        ProjectModel.count()
          .then((count) => {
            logger.info(`There are now ${count} pages in the collection`);
          })
          .catch((err) => {
            throw err;
          });
        res.status(200).json({message: 'Successfully created project', project: doc});
      }).catch((err) => {
      res.status(500).json({message: 'Internal Server Error; Failed to create project: Please try again'});
      throw err;
    });

  });
  apiRouter.get('/pages/:title', function (req, res) {
    const title = req.params.title;
    /**
     * Attempt to find the project information from the database and return content.
     * If not found, report back the failure with 404.
     */
    ProjectModel.findOne({title: title})
      .exec().then((doc) => {
        if (doc) {
          logger.info('Fetched the following project from db:', {project: doc.toString()});
          res.status(200).send(`<h1>Project ${doc.title} received from server</h1>`);
        } else {
          logger.info('Error fetching the page from db');
          res.status(404).send(`<h1>404: Project ${title} not found</h1>`);
        }
      }
    )
  });
};
