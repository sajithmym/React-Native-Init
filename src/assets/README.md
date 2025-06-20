# Assets Directory

This directory contains all static assets for the React Native application.

## Structure

- `images/` - Image files (PNG, JPG, SVG)
- `fonts/` - Custom font files
- `icons/` - Icon files and icon sets
- `data/` - Static JSON data files

## Usage

Import assets using relative paths:

```typescript
import logo from './images/logo.png';
import userData from './data/users.json';
```

## Best Practices

1. Use appropriate image formats (PNG for transparency, JPG for photos)
2. Optimize images for mobile devices
3. Use vector graphics (SVG) when possible for scalability
4. Keep file sizes minimal for better performance
5. Use descriptive file names
