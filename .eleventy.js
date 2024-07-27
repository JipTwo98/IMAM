module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./AI/css/");
    eleventyConfig.addPassthroughCopy("./AI/Media/");

	return {
        dir: {
            input: "AI",
            output: "public"
        }
    };
}