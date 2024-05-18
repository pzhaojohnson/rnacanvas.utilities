/**
 * Represents a file that can be downloaded.
 */
export class DownloadableFile {
  /**
   * Creates a downloadable file with the given text content.
   */
  constructor(private textContent: string) {}

  /**
   * Offers the file to the user for download with the given name and type.
   */
  downloadAs(name: string, options: { type: string }): void {
    let file = new File([this.textContent], name, { type: options.type });
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
