module.exports = ({ addComponents, theme, e }) => {
  const colors = theme('gutenberg.colors', {});
  const components = {};

  for (let [slug, color] of Object.entries(colors)) {
    components[`.${e(`has-${slug}-background-color`)}`] = { 'background-color': color };
    components[`.${e(`has-${slug}-color`)}`] = { color: color };
  }

  addComponents(components, {
    respectPrefix: false,
    respectImportant: true,
  });
};
