# Interactive Banner Project

This project was created as part of the Outreachy contribution task T388234. It demonstrates a highly interactive web application with real-time UI customization capabilities.

## 🌟 Features

- **Dynamic Banner**: A full-width banner with customizable content, colors, and visual effects
- **Interactive Controls**: A form with multiple controls that change banner elements without page reload
- **Real-time Updates**: All changes are applied instantly without refreshing the page
- **Responsive Design**: Works well on all device sizes
- **Animations**: Smooth transitions and animations enhance the user experience
- **Accessibility**: Proper contrast ratios and semantic HTML for better accessibility

## 🚀 Live Demo

[View the live demo](https://your-demo-url-here.vercel.app/) (Replace with your deployed URL)

## 🛠️ Technologies Used

- **Next.js**: React framework for building the application
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling components
- **Framer Motion**: For animations and transitions
- **Radix UI**: For accessible UI components
- **Jest & React Testing Library**: For unit testing

## 📋 Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Git

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/interactive-banner.git
   cd interactive-banner

   npm install
# or
yarn install

npm run dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## Usage

The application allows you to customize the banner in several ways:

### Content Tab

- **Title**: Change the main heading text
- **Subtitle**: Modify the descriptive text
- **Font Size**: Adjust the size of both title and subtitle text


### Colors Tab

- **Background Color**: Change the overlay color of the banner
- **Text Color**: Modify the color of all text elements
- **Overlay Opacity**: Adjust the transparency of the color overlay


### Image Tab

- **Background Image**: Select from different predefined background images


### Effects Tab

- **Mountains**: Toggle the decorative mountain silhouette
- **Sun**: Toggle the animated sun element
- **Animation Speed**: Control how fast the animations play


All changes are applied in real-time without requiring a page reload, providing an interactive user experience.

## 🧪 Testing

Run the tests with:

```shellscript
npm test
# or
yarn test
```

The project includes unit tests for components using Jest and React Testing Library. Tests verify that:

- Components render correctly
- Interactive elements work as expected
- Visual elements respond to prop changes


## 📁 Project Structure

```plaintext
├── __tests__/              # Test files
├── components/             # React components
│   ├── banner.tsx          # Banner component
│   ├── control-panel.tsx   # Control panel component
│   └── ui/                 # UI components
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── slider.tsx
│       ├── switch.tsx
│       └── tabs.tsx
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── lib/                    # Utility functions
│   ├── framer-motion.d.ts  # Type definitions
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
├── .gitignore              # Git ignore file
├── jest.config.js          # Jest configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🧩 Component Architecture

The application follows a component-based architecture:

- **Banner Component**: Displays the customizable banner with all visual elements
- **ControlPanel Component**: Contains all the controls for customizing the banner
- **UI Components**: Reusable UI elements like buttons, inputs, and tabs


The components communicate through props, with the main state being managed in the parent component (page.tsx).

## 🔄 State Management

The application uses React's useState hook for state management. The main state object (bannerConfig) contains all the customizable properties of the banner:

```typescript
interface BannerConfig {
  title: string;
  subtitle: string;
  backgroundColor: string;
  textColor: string;
  overlayOpacity: number;
  fontSize: number;
  imageIndex: number;
  showMountains: boolean;
  showSun: boolean;
  animationSpeed: number;
}
```

Changes to this state are immediately reflected in the banner component, providing real-time updates.

## 🌐 Browser Compatibility

The application is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Vercel](https://vercel.com/) for hosting


---

Created with ❤️ for Outreachy by [Your Name]

```plaintext

## How to Set Up Jest Configuration

To complete the testing setup, you'll need to create these files:

1. **jest.config.js**:
```js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config
module.exports = createJestConfig(customJestConfig)
```

2. **jest.setup.js**:


```javascript
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
```

3. Update your **package.json** to include test scripts:


```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "jest",
  "test:watch": "jest --watch"
}
```

With these files in place, you'll have a complete testing setup that allows you to run tests for your components.