Hooks.once('init', async function() {

});

Hooks.once('ready', async function() {

});

Hooks.on('renderTidy5eSheet', async function(app, html, data){
  console.log(app);
  console.log(html);
  console.log(data);
});