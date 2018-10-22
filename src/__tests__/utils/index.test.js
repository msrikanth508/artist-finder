import { debounce, cache } from '../../utils/';

describe('Utils Tests', () => {

    it('cache test', () => {
        cache.setItem('key1', 'key1');
        expect(
            cache.has('key1')
        ).toBe(true);
        expect(
            cache.getItem('key1')
        ).toBe('key1');
        cache.clearItem('key1');
        expect(
            cache.getItem('key1')
        ).toBe(null);
        cache.clearAll();
    })

    it('Debounce test', () => {
        jest.useFakeTimers();
        const callback = jest.fn();
        const fn = debounce(callback, 1000);
        fn();
        expect(callback).toHaveBeenCalledTimes(0);
        jest.runAllTimers();
        fn();
        expect(callback).toHaveBeenCalledTimes(1);
    })
})