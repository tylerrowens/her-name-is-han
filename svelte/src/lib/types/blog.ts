export type BlogTag =  
    'event' | 'photo series' | 'interview' | 'feature' | 'playlist' | 'music' | 'recepie' | 'conversation';

    export type BlogPost = {
        image: string;
		title: string;
		author: string;
		tags: readonly BlogTag[];
		year: number;
		day: number;
		month: number;
    };