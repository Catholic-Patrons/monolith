import type { Cause } from '../../models';
import staticCauses from './causes.json';

export class CaseSearchService {
    private readonly _allCauses: Cause[] = staticCauses as Cause[];

    async search(criteria?: { term: string }): Promise<Cause[]> {
        const { term } = criteria ?? {};

        if (!term) return this._allCauses;

        const normalizedTerm = term.toLowerCase();

        return [...this._allCauses].filter((cause) => 
            cause.title.toLowerCase().includes(normalizedTerm) ||
            cause.description.toLowerCase().includes(normalizedTerm) ||
            cause.tags.some(tag => tag.toLowerCase().includes(normalizedTerm))
        );
    }
}
