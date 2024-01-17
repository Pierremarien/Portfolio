
export type Image = {
	img: string;
	alt: string;
};

export type Project = {
	title: string;
	description: string;
	code: string;
	website: string | null;
	imgs: Image[];
};
