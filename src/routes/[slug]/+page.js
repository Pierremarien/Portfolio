import projects from '$lib/data/projects.json';
export const ssr = false;

export async function load({ params }) {
	const { slug } = params;
	console.log('slug:', slug);
    console.log('projects:', projects);

	const project = projects.find((p) => p.title.toLowerCase() === slug.toLowerCase());
	console.log('project:', project);
	if (project) {
		return {
			props: {
				project
			}
		};
	} else {
		return {
			status: 404,
			error: new Error('Not found')
		};
	}
}
