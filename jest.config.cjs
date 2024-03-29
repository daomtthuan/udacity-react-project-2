module.exports = {
  roots: ['.'],
  modulePaths: ['<rootDir>/src', '<rootDir>/test'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                  env: {},
                },
              },
            },
          ],
        },
      },
    ],
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/file.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/test/__mocks__/style.ts',

    '~components/(.*)': '<rootDir>/src/components/$1',
    '~hooks/(.*)': '<rootDir>/src/hooks/$1',
    '~plugins/(.*)': '<rootDir>/src/plugins/$1',
    '~services/(.*)': '<rootDir>/src/services/$1',
    '~styles/(.*)': '<rootDir>/src/styles/$1',
    '~types/(.*)': '<rootDir>/src/types/$1',
    '~utils/(.*)': '<rootDir>/src/utils/$1',
    '~test/(.*)': '<rootDir>/test/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  moduleFileExtensions: ['tsx', 'ts', 'jsx', 'js', 'json'],
};
