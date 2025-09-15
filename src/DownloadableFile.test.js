/**
 * @jest-environment jsdom
 */

import { DownloadableFile } from './DownloadableFile';

describe('`class DownloadableFile`', () => {
  beforeEach(() => {
    URL.createObjectURL = jest.fn(() => ({}));
    URL.revokeObjectURL = jest.fn();
  });

  test('`constructor()`', () => {
    // stores name property
    var file = new DownloadableFile('filename-871829472.txt');
    expect(file.name).toBe('filename-871829472.txt');

    // default file name
    var file = new DownloadableFile();
    expect(file.name).toBeTruthy();
    expect(file.name.endsWith('.txt')).toBeTruthy();

    // stores content
    var file = new DownloadableFile('asdf.txt', 'text-8917418924782');
    expect(file.content).toBe('text-8917418924782');

    // content defaults to an empty string
    var file = new DownloadableFile();
    expect(file.content).toBe('');

    // stores type
    var file = new DownloadableFile('asdf.txt', '', { type: 'image/jpeg' });
    expect(file.type).toBe('image/jpeg');
  });

  test('`get type()`', () => {
    // defaults to plain text
    var file = new DownloadableFile();
    expect(file.type).toBe('text/plain');

    // specified type overrules blob type
    var blob = new Blob([''], { type: 'text/html' });
    var file = new DownloadableFile('asdf.txt', blob, { type: 'image/png' });
    expect(file.type).toBe('image/png');

    // returns blob type if type not otherwise specified
    var blob = new Blob([''], { type: 'text/html' });
    var file = new DownloadableFile('asdf.txt', blob);
    expect(file.type).toBe('text/html');
  });

  test('`set type()`', () => {
    var file = new DownloadableFile();
    file.type = 'image/png';
    expect(file.type).toBe('image/png');

    // overrules blob type
    var blob = new Blob([''], { type: 'image/jpeg' });
    var file = new DownloadableFile('', blob);
    file.type = 'text/html';
    expect(file.type).toBe('text/html');
  });

  test('`download()`', async () => {
    var file = new DownloadableFile('name-83917.txt', 'content-81724982174', { type: 'text/html' });

    var n = document.body.childNodes.length;

    file.download();

    expect(URL.createObjectURL.mock.calls.length).toBe(1);

    expect(URL.createObjectURL.mock.calls[0][0].name).toBe('name-83917.txt');
    expect(URL.createObjectURL.mock.calls[0][0].type).toBe('text/html');

    // doesn't work on Node.js?
    //expect(await URL.createObjectURL.mock.calls[0][0].text()).toBe('content-81724982174');

    // doesn't leave behind any elements
    // (like an anchor element used for downloading files)
    expect(document.body.childNodes.length).toBe(n);

    expect(URL.revokeObjectURL.mock.calls.length).toBe(1);
  });
});
