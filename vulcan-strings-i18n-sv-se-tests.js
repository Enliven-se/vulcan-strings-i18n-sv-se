// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by vulcan-strings-i18n-sv-se.js.
import { name as packageName } from "meteor/klokie:vulcan-strings-i18n-sv-se";

// Write your tests here!
// Here is an example.
Tinytest.add('vulcan-strings-i18n-sv-se - example', function (test) {
  test.equal(packageName, "vulcan-strings-i18n-sv-se");
});
