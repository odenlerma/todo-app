module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [ 
    [ 
      'module-resolver',
      {
        'root': [
          './src'
        ],
        'alias': {
          '@assets': './src/assets',
          '@components': './src/components',
          '@custom-redux': './src/custom-redux',
          '@helper': './src/helper',
          '@styles': './src/styles',
          '@navigation': './src/navigation',
          '@pages': './src/pages',
        },
        extensions: ['.tsx', '.ts', '.js', '.json'], 
      },
    ],
  ]
};
