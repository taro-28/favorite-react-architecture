module.exports = {
  prompt: ({ prompter: { prompt } }) =>
    prompt({
      type: 'select',
      name: 'category',
      message:
        'Which component category? (src/[category]/[directory_path]/[ComponentName])',
      choices: ['features', 'components', 'pages'],
      initial: 'features'
    }).then(({ category }) =>
      prompt({
        type: 'input',
        name: 'component_name',
        message: `What is the name of component? (src/${category}/[directory_path]/[ComponentName])`,
        validate: (input) => input !== ''
      }).then(({ component_name }) =>
        prompt([
          {
            type: 'input',
            name: 'dir',
            message: `Where is the directory? (src/${category}/[directory_path]/${component_name})`
          },
          {
            type: 'confirm',
            name: 'hasContainer',
            message: 'Is it have container?',
            initial: true
          },
          {
            type: 'confirm',
            name: 'hasProps',
            message: 'Is it have props?',
            initial: true
          }
        ]).then(({ dir, hasContainer, hasProps }) => ({
          component_name,
          path: `${category}${dir ? `/${dir}` : ``}/`,
          hasContainer,
          hasProps
        }))
      )
    )
};
