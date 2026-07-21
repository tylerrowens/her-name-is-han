export type BlogTag =  
    'event' | 'photo series' | 'interview' | 'feature' | 'playlist' | 'music' | 'recepie';

    export type BlogPost = {
        image: string;
		title: string;
		author: string;
		tags: BlogTag[];
		year: number;
		day: number;
		month: number;
    };