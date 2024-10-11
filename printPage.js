import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Construct the file URL for the local HTML file
    const filePath = path.resolve(process.cwd(), 'public/Ukesoppdrag-og-forelesningsnotat/Forelesningsnotat/Forelesning.12.09.html');
    const fileUrl = `file://${filePath}`;

    // Navigate to the local HTML file
    await page.goto(fileUrl, { waitUntil: 'networkidle2' });

  // Inject CSS to hide the header
    await page.evaluate(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            .page-header { /* Adjust this selector to target your header */
                display: none !important;
            }
             .left { /* Adjust this selector to target your header */
                display: none !important;
            }
              .sidebar   { /* Adjust this selector to target your header */
                display: none !important;
            }
              .explorer   { /* Adjust this selector to target your header */
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    });

    // Get the height of the content
    const bodyHeight = await page.evaluate(() => {
        return document.body.scrollHeight;
    });

    // Define the output path for the PDF
    const outputPath = path.resolve(process.cwd(), 'C:\\Users\\andrem\\OneDrive - Universitetet i Agder\\Undervisning\\MA-183\\2024\\Forelesning.12.09.pdf');

    // Save as a single-page PDF with custom height based on content
    await page.pdf({
        path: outputPath, 
        width: '11in',                   
        height: `${bodyHeight}px`,       
        printBackground: true,           
        margin: {
            top: '0in',
            right: '0in',
            bottom: '0in',
            left: '0in'
        }
    });

    await browser.close();
})();
