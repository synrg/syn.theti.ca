import AdmZip from 'adm-zip';
import glob from 'glob-promise';
import fileList from 'eleventy-plugin-file-list';

export default async function(eleventyConfig) {
	eleventyConfig.setInputDirectory('content');
	eleventyConfig.addPassthroughCopy('files');
	eleventyConfig.addPlugin(fileList, { targetFolder: 'files', doRecurse: true })
	eleventyConfig.on('eleventy.after', async () => {
		console.log('after build');
		const resource = await glob('./files/**/*');
		const zip = new AdmZip();
		resource.forEach(f => zip.addLocalFile(f));
		zip.writeZip('_site/mc/inaturalist.zip');
	});
};
