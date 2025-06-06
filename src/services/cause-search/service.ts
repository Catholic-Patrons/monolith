import type { Cause } from '../../models';
import staticCauses from './causes.json';

export class CaseSearchService {
    private readonly _allCauses: Cause[] = staticCauses as Cause[];

    async search(criteria?: { 
        term: string
        tags: string[] 
    }): Promise<Cause[]> {
        const { term, tags } = criteria ?? {};

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

        return causes;
    }
}
