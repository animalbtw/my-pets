import {ILinks} from '../types/ILinks';

export const linksSequenceSort = (links: ILinks[]) => {
    return links.sort((a, b) => a.id - b.id);
};
