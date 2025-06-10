// .stylelintrc.cjs
module.exports = {
  // This is the core of the configuration.
  // It tells Stylelint to use the rules from the package we installed.
  extends: "stylelint-config-standard-scss",

  // You can add your own custom rules here to override the standard config.
  // For now, an empty 'rules' object is perfectly fine.
  rules: {
    // Example: If you wanted to allow CSS nesting up to 5 levels deep
    // 'max-nesting-depth': 5,
    // Example: If you don't like the rule that enforces a certain class name pattern
    // 'selector-class-pattern': null,
  },
};
