module.exports = {
  prompt: ({ prompter: { prompt } }) =>
    prompt({
      type: 'select',
      name: 'category',
      message:
        'Which custom hook category? (src/[category]/[directory_path]/[CustomHookName])',
      choices: ['features', 'hooks', 'components', 'pages'],
      initial: 'features'
    }).then(({ category }) =>
      prompt({
        type: 'input',
        name: 'hookName',
        message: `What is the name of custom hook? (src/${category}/[directory_path]/[CustomHookName])`,
        validate: (input) =>
          input.startsWith('use') || 'Hook name must be "useXXX"'
      }).then(({ hookName }) =>
        prompt({
          type: 'input',
          name: 'dir',
          message: `Where is the directory? (src/${category}/[directory_path]/${hookName})`
        }).then(({ dir }) => ({
          hookName,
          path: `${category}${dir ? `/${dir}` : ``}/`
        }))
      )
    )
};
