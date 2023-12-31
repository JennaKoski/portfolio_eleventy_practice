module.exports = config => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');

    config.setBrowserSyncConfig({
        files: './dist/css/*.css'
    });

    // Returns about items
    config.addCollection('about', collection => {
        return collection
            .getFilteredByGlob('./src/about/*.md')
    });

    // Returns work items, sorted by display order
    config.addCollection('work', collection => {
        return collection
            .getFilteredByGlob('./src/work/*.md')
            .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1))
    });

    // Returns work items, sorted by display order then filtered by featured
    config.addCollection('featuredWork', collection => {
        return collection
            .getFilteredByGlob('./src/work/*.md')
            .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1))
            .filter(x => x.data.featured);
    });

    // Returns interests items, sorted by display order
    config.addCollection('interests', collection => {
        return collection
            .getFilteredByGlob('./src/interests/*.md')
            .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1))
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
