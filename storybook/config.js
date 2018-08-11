import { configure } from '@storybook/react';

// Automatically require all stories.
// https://webpack.js.org/guides/dependency-management/#require-context
// https://github.com/storybooks/storybook/issues/125#issuecomment-212404756
const requireContext = require.context(
  '../src/client/',
  true,
  /.*\.story\.js$/
);

function loadStories() {
  requireContext.keys().forEach(requireContext);
}

configure(loadStories, module);
