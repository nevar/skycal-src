console.log('This would be the main JS file.');

sigma.parsers.json(
  'static/main_atlas.json',
    { container: 'sigma-container'
    , settings:
      { defaultNodeColor: '#ffffff'
      }
    },
  function(s) {
  }
);
