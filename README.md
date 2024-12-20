# Leap Presentation

Leap Presentation is a web-based project that combines the power of Ultraleap's **TouchFree Tooling** and HTML5 Canvas to create an interactive environment where users can:

1. View a PDF document within an `<iframe>`.
2. Draw on an overlaid canvas using Leap Motion's touch-free pointer control.

This project is ideal for presentations, annotations, or educational tools, offering a futuristic way to interact with digital content.

## Features

- **PDF Display**: Embed and display PDF files using an `<iframe>`.
- **Interactive Drawing**: Draw on a canvas overlay with Leap Motion pointer controls.
- **Touch-Free Control**: Fully touch-free interaction using Leap Motion's TouchFree tooling.
- **Customizable Drawing**: Change drawing color, line width, and more.

## Prerequisites

1. **Leap Motion Controller**: Ensure you have a Leap Motion device.
2. **TouchFree Application**: Install and configure the Ultraleap TouchFree application.
   - Download: [TouchFree Application](https://developer.leapmotion.com/touchfree)
3. **Web Server**: Use a local or remote web server to serve the project files (e.g., `localhost`).

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/leap-presentation.git
   cd leap-presentation
   ```

2. Open the `index.html` file in a browser via a web server. For example, you can use Python's HTTP server:
   ```bash
   python3 -m http.server
   ```
   Then, navigate to `http://localhost:8000` in your browser.

## Usage

1. Connect your Leap Motion device and start the TouchFree application.
2. Open the web page served by your local server.
3. Replace the placeholder PDF in the `<iframe>` (`your-pdf-file.pdf`) with your own PDF file.
4. Use the Leap Motion pointer to interact with the canvas:
   - **Pointer Move**: Move the pointer across the canvas.
   - **Pointer Down**: Start drawing on the canvas.
   - **Pointer Up**: Stop drawing.

## File Structure

```
leap-presentation/
├── index.html        # Main HTML file
├── README.md         # Project documentation
└── assets/           # (Optional) Directory for PDF files or other assets
```

## Customization

### Modify Drawing Properties

You can change the drawing color, line width, and other properties in the `index.html` file:

```javascript
ctx.strokeStyle = 'blue'; // Change drawing color
ctx.lineWidth = 2;       // Change line width
```

### Replace PDF

Replace the placeholder `your-pdf-file.pdf` with the path to your own PDF file:

```html
<iframe src="path-to-your-pdf.pdf"></iframe>
```

## Dependencies

- [Ultraleap TouchFree](https://developer.leapmotion.com/touchfree)
- HTML5 Canvas

## Known Issues

- Ensure the TouchFree application is running; otherwise, pointer events will not work.
- The project requires a web server to serve the files correctly.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Credits

- [Ultraleap](https://developer.leapmotion.com/) for the TouchFree tooling.
- OpenAI's ChatGPT for initial draft and technical guidance.

---

Happy presenting with **Leap Presentation**!
