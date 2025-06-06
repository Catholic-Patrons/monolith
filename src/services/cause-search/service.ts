import type { Cause } from '../../models';
import staticCauses from './causes.json';

export class CaseSearchService {
    private readonly _allCauses: Cause[] = staticCauses as Cause[];

    // <option value="sort-alpha-az">Alphabetical (A-Z)</option>
    //             <option value="sort-alpha-az">Alphabetical (Z-A)</option>
    //             <option value="sort-start-az">Start Date (Newest First)</option>
    //             <option value="sort-start-az">Start Date (Oldest First)</option>
    //             <option value="sort-fund-az">Funding Goal (Lowest First)</option>
    //             <option value="sort-fund-az">Funding Goal (Highest First)</option>

    async search(criteria?: { 
        term: string
        tags: string[] 
        sortOrder: string
    }): Promise<Cause[]> {
        const { term, tags, sortOrder } = criteria ?? {};

        let causes = [...this._allCauses];

        if (term) {
            const normalizedTerm = term.trim().toLowerCase();

            causes = causes.filter((cause) => {
                return cause.title.trim().toLowerCase().includes(normalizedTerm) ||
                    cause.description.trim().toLowerCase().includes(normalizedTerm);
            });
        }

        if (tags?.length) {
            causes = causes.filter((cause) => {
                return cause.tags.some((tag) => tags.includes(tag));
            });
        }

        switch (sortOrder) {
            case 'alpha-asc':
                causes.sort((causeA, causeB) => causeA.title.localeCompare(causeB.title));

            case 'alpha-desc':
                causes.sort((causeA, causeB) => causeB.title.localeCompare(causeA.title));

            case 'fund-asc':
                causes.sort((causeA, causeB) => causeA.goal - causeB.goal);

            case 'fund-desc':
                causes.sort((causeA, causeB) => causeB.goal - causeA.goal);

            case 'start-asc':
                causes.sort((causeA, causeB) => causeA.start - causeB.start);

            case 'start-desc':
                causes.sort((causeA, causeB) => causeB.start - causeA.start);

            default:
                causes.sort((causeA, causeB) => causeA.title.localeCompare(causeB.title));
        }

        return Promise.resolve(causes);
    }
}
