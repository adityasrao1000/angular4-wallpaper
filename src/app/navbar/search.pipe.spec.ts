import { TestBed } from '@angular/core/testing';
import { SearchPipe } from './search.pipe';

describe('Pipe: SearchPipe', () => {

    let pipe: SearchPipe;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [SearchPipe]
        });

        pipe = new SearchPipe();
    });

    it('should create pipe', () => {
        expect(pipe).toBeTruthy();
    });

    it('providing no value returns fallback', () => {
        expect(pipe.transform(['a', 'b', 'c'], '')).toEqual([]);
    });

    it('should return filtered result', () => {
        expect(pipe.transform(['a', 'b', 'c', 'ab'], 'a')).toEqual(['a', 'ab']);
    });

    it('should be case insensitive', () => {
        expect(pipe.transform(['a', 'b', 'c', 'ab'], 'A')).toEqual(['a', 'ab']);
    });

    it('should return [] for undefined search term', () => {
        expect(pipe.transform(['a', 'b', 'c', 'ab'], undefined)).toEqual([]);
    });

    it('should return [] for null search term', () => {
        expect(pipe.transform(['a', 'b', 'c', 'ab'], null)).toEqual([]);
    });
});
