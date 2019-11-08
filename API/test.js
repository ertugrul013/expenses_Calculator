import test from 'ava';
import index from 'index.js';

test('title', t => {
	t.is(index(), '');
});