import JsZip from 'jszip';
import JsZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';

/**
 * Creates an interval of server requests with initial wait
 * @param {string} baseFilename
 * @param {string} zipName
 * @param {array} urlList
 */
export default (zipName, baseFilename, urlList) => {
  const zip = new JsZip();
  const zipFilename = `${zipName}.zip`;

  urlList.forEach((url, i, arr) => {
    const filename = `${i}-${baseFilename}`;
    JsZipUtils.getBinaryContent(url, (err, data) => {
      if (err) {
        throw err;
      }
      zip.file(filename, data, { binary: true });
      if (i === arr.length - 1) {
        zip.generateAsync({ type: 'blob' }).then(content => {
          saveAs(content, zipFilename);
        });
      }
    });
  });
};
