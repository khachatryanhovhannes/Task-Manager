module.exports = {
  moduleDirectories: [
    'node_modules',
    'utils',
    __dirname,
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}', '<rootDir>/test/**/*.test.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
