export type Job = {
    _id: string;
    company: string;
    contract: string;
    position: string;
    website: string;
    apply: string;
    description: string; 
    logo: string;
    logoBackground: string;
    postedAt: string;
    location: string;
    requirements: {
        content: string,
        items: string[]
    },
    role: {
        content: string,
        items: string[],
    }
}