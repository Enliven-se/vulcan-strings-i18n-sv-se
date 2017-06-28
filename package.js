Package.describe({
  name: 'klokie:vulcan-strings-i18n-sv-se',
  version: '0.0.1',
  summary: 'Vulcan i18n sv_SE package.',
  git: 'https://github.com/Enliven-se/vulcan-strings-i18n-sv-se.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use('ecmascript');
  api.mainModule('vulcan-strings-i18n-sv-se.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('klokie:vulcan-strings-i18n-sv-se');
  api.mainModule('vulcan-strings-i18n-sv-se-tests.js');
});
