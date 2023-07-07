import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react-swc';
import alias from '@rollup/plugin-alias';
import Path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin(),
    alias({
      entries: [
        { find: '@Pages', replacement: Path.resolve(__dirname + '/src/Pages') },
        { find: '@Components', replacement: Path.resolve(__dirname + '/src/Components') },
        { find: '@Widgets', replacement: Path.resolve(__dirname + '/src/Components/Widgets') },
        { find: '@RootService', replacement: Path.resolve(__dirname + '/src/rootService') },
        { find: '@Layout', replacement: Path.resolve(__dirname + '/src/Layout') },
        { find: '@Utils', replacement: Path.resolve(__dirname + '/src/Utils') },
      ]
    })],
  server: {
    hot: true,
  },
})
