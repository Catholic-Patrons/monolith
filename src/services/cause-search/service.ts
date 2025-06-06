import type { Cause } from '../../models';
import staticCauses from './causes.json';

export class CaseSearchService {
    private readonly _allCauses: Cause[] = staticCauses as Cause[];

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
                causes = causes.sort((causeA, causeB) => causeA.title.localeCompare(causeB.title));
                break;

            case 'alpha-desc':
                causes = causes.sort((causeA, causeB) => causeB.title.localeCompare(causeA.title));
                break;

            case 'fund-asc':
                causes = causes.sort((causeA, causeB) => causeA.goal - causeB.goal);
                break;

            case 'fund-desc':
                causes = causes.sort((causeA, causeB) => causeB.goal - causeA.goal);
                break;

            case 'start-asc':
                causes = causes.sort((causeA, causeB) => causeA.start - causeB.start);
                break;

            case 'start-desc':
                causes = causes.sort((causeA, causeB) => causeB.start - causeA.start);
                break;

            default:
                causes = causes.sort((causeA, causeB) => causeA.title.localeCompare(causeB.title));
                break;
        }

        return Promise.resolve(causes);
    }
}
