module.exports = function(casaApp, mountUrl, router, csrf) {
  router.get('/submit', csrf, function(req, res, next) {
    res.render('submit.njk', {
      activeContextId: req.casa.journeyContext.isDefault() ? undefined : req.casa.journeyContext.identity.id,
    });
  });

  router.post('/submit', csrf, function(req, res, next) {
    // Note, `req.casa.journeyContext` holds all the gathered data so you can manipulate
    // it however you wish at this point before submitting to final destination
    // Remember to clear the journey data once submitted
    casaApp.endSession(req).then(() => {
      res.status(302).redirect(`${mountUrl}what-happens-next`);
    }).catch((err) => {
      console.log(err);
      res.status(302).redirect(`${mountUrl}what-happens-next`);
    });
  });
};
