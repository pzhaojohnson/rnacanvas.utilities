/**
 * A file that can be downloaded.
 */
export class DownloadableFile {
  name: string;

  content: string | Blob;

  #type?: string;

  constructor(name?: string, content?: string | Blob, options?: { type?: string }) {
    this.name = name ?? 'Unnamed.txt';

    this.content = content ?? '';

    this.#type = options?.type;
  }

  get type(): string {
    if (this.#type != undefined) {
      return this.#type;
    }

    if (this.content instanceof Blob) {
      return this.content.type;
    }

    return 'text/plain';
  }

  set type(type) {
    this.#type = type;
  }

  download(): void {
    let file = new File([this.content], this.name, { type: this.type });

    let url = URL.createObjectURL(file);

    let link = document.createElement('a');
    link.href = url;
    link.download = file.name;

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  }
}
