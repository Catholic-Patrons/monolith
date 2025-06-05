import type { Cause } from '../../models';
import staticCauses from './causes.json';

export class CaseSearchService {
    private readonly _allCauses: Cause[] = staticCauses as Cause[];

    async search(criteria?: { term: string }): Promise<Cause[]> {
        const { term } = criteria ?? {};

        if (!term) return this._allCauses;

        const normalizedTerm = term.trim().toLowerCase();

        return [...this._allCauses].filter((cause) => 
            cause.title.trim().toLowerCase().includes(normalizedTerm) ||
            cause.description.trim().toLowerCase().includes(normalizedTerm) ||
            cause.tags.some(tag => tag.trim().toLowerCase().includes(normalizedTerm))
        );
    }
}
