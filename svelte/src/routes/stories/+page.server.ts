import type { PageServerLoad } from "./$types";

const featuredPosts = {
    title: 'Conversations',
    copyLineOne: 'Who she is might',
    copyLineTwo: 'change but her stories feel familiar...',

    items : [
        {
            image: '/images/conversations-1.jpg',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            image: '/images/conversations-2.jpg',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            image: '/images/conversations-3.jpg',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]
} as const;

const blogPosts = {
    posts : [
        {
            image: '/images/blog-post-1.jpg',
            title: 'A Seat at Our Table',
            author: 'Kenneth Lam',
            tags: ['event', 'photo series'],
            year: 2026,
            day: 7,
            month: 9
        },
        {
            image: '/images/blog-post-2.jpg',
            title: 'Her story: Khim & Mimi',
            author: 'Lucille',
            tags: ['conversation', 'photo series'],
            year: 2026,
            day: 7,
            month: 9
        },
        {
            image: '/images/blog-post-3.jpg',
            title: 'Conversations with my mother',
            author: 'Maria',
            tags: ['interview'],
            year: 2026,
            day: 7,
            month: 9
        },
        {
            image: '/images/blog-post-4.jpg',
            title: 'In Season',
            author: 'Younjoo',
            tags: ['recepie'],
            year: 2026,
            day: 7,
            month: 9
        },
        {
            image: '/images/blog-post-5.jpg',
            title: 'Han’s Playlist: #4',
            author: 'Kyungrim',
            tags: ['playlist', 'music'],
            year: 2026,
            day: 7,
            month: 9
        },
        {
            image: '/images/blog-post-6.jpg',
            title: 'Our Ingredient Story',
            author: 'Onyou',
            tags: ['feature'],
            year: 2026,
            day: 7,
            month: 9
        }
    ]
} as const;

export const load: PageServerLoad = async () => {
    return {
        featuredPosts,
        blogPosts
    };
};

