export interface NewsData {
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content?: string | null;
    source: {
        id: string,
        name: string
        }
}
