/**
 * @jest-environment jsdom
 */

import { DownloadableFile } from './DownloadableFile';

describe('DownloadableFile class', () => {
  beforeEach(() => {
    URL.createObjectURL = jest.fn(() => ({}));
    URL.revokeObjectURL = jest.fn();
  });

  describe('downloadAs method', () => {
    it('removes all temporary elements from the document', () => {
      let file = new DownloadableFile('asdf');

      let n = document.body.childNodes.length;

      file.downloadAs('asdf.txt', { type: 'text/plain' });

      // is unchanged
      expect(document.body.childNodes.length).toBe(n);
    });
  });
});
