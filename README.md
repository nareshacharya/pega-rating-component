# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Rating Component

A flexible, accessible, and customizable star rating component for React.

---

## Features

- Customizable star count
- Supports full, half, and fractional ratings
- Custom icons and colors
- RTL (right-to-left) support
- Optional rating number display
- Tooltips/labels on hover
- Read-only/disabled mode
- Reset/clear button
- Keyboard accessible
- Unit tested

---

## Installation

```bash
npm install
```

---

## Usage

```tsx
import Rating from "./Rating";

// Basic usage
<Rating />

// Controlled usage
const [value, setValue] = useState(3);
<Rating value={value} onChange={setValue} />

// Customization
<Rating
  starCount={10}
  allowHalf
  showRatingNumber
  fullColor="orange"
  emptyColor="#eee"
  labels={["Poor", "Fair", "Good", "Very Good", "Excellent", "Superb", "Awesome", "Perfect", "Wow", "Legendary"]}
  showClear
  rtl
/>
```

---

## Props

| Prop               | Type                      | Default  | Description                            |
| ------------------ | ------------------------- | -------- | -------------------------------------- |
| `value`            | `number`                  | `0`      | Current rating value (controlled mode) |
| `onChange`         | `(value: number) => void` | `-`      | Callback when rating changes           |
| `readOnly`         | `boolean`                 | `false`  | If true, disables all interaction      |
| `allowHalf`        | `boolean`                 | `false`  | Enable half-star selection             |
| `showRatingNumber` | `boolean`                 | `true`   | Show rating number next to stars       |
| `starCount`        | `number`                  | `5`      | Number of stars                        |
| `fullIcon`         | `ReactNode`               | `-`      | Custom icon for full star              |
| `halfIcon`         | `ReactNode`               | `-`      | Custom icon for half star              |
| `emptyIcon`        | `ReactNode`               | `-`      | Custom icon for empty star             |
| `fullColor`        | `string`                  | `"gold"` | Color for full star                    |
| `halfColor`        | `string`                  | `"gold"` | Color for half star                    |
| `emptyColor`       | `string`                  | `"#ccc"` | Color for empty star                   |
| `labels`           | `string[]`                | `[]`     | Tooltip/label for each star            |
| `animationScale`   | `number`                  | `1.2`    | Scale factor for hover animation       |
| `showClear`        | `boolean`                 | `false`  | Show reset/clear button                |
| `rtl`              | `boolean`                 | `false`  | Right-to-left layout                   |

---

## Accessibility

- Fully keyboard accessible (arrow keys, Enter/Space)
- Proper ARIA roles and labels
- Read-only mode disables all interaction

---

## Testing

Unit tests are provided using React Testing Library and Jest:

```bash
npm test
```

---

## License

MIT

---
