## 🎥 Demo Video

[Click here to watch the demo]([https://drive.google.com/file/d/your-file-id/view?usp=sharing](https://drive.google.com/file/d/1hjXSvUtnqT1MwL4xszxdDQdLHCZ3D7b6/view?usp=sharing))

# Medical and Travel Expense Request Form

This project implements a dynamic web-based form for submitting medical and travel expense requests, similar to the Workers Compensation Board of Manitoba's form.

## Features

- Dynamic form generation with sample data
- Ability to add/remove rows in all tables
- Responsive design that works well both on screen and in print
- Clean and professional styling matching the original form
- Support for multiple pages of expenses

## Project Structure

```
.
├── index.html          # Main HTML form structure
├── styles.css          # CSS styling for the form
├── script.js          # JavaScript for dynamic functionality
├── assets/            # Directory for images and other assets
│   └── wcb-logo.png   # WCB logo
└── README.md          # This documentation file
```

## Technical Details

### HTML
- Semantic HTML5 structure
- Accessible form elements
- Proper table structure for data presentation

### CSS
- Responsive design using CSS Grid and Flexbox
- Print-friendly styles
- Clean and professional styling
- Variables for consistent theming

### JavaScript
- Dynamic data handling
- Table row manipulation
- Form validation
- Export functionality for testing

## Dynamic Features

1. **Table Management**
   - Add new rows to any table
   - Input validation for required fields
   - Automatic calculation of totals

2. **Data Handling**
   - Sample data structure provided
   - Easy to modify for different data sources
   - Export functionality for saving form data

3. **Print Layout**
   - Optimized for printing
   - Proper page breaks
   - Header and footer on each page

## Getting Started

1. Clone the repository
2. Open `index.html` in a web browser
3. Sample data will be loaded automatically
4. Use "Add Row" buttons to add new entries
5. Print or save as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

To modify the sample data or add new features:

1. Edit `script.js` to modify the `sampleData` object
2. Add new fields to the HTML structure in `index.html`
3. Update styles in `styles.css` as needed

## Testing

The JavaScript functions are exported for testing purposes. You can import them in your test framework of choice.

## License

MIT License - Feel free to use and modify as needed. 
