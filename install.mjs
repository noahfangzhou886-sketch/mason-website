import { execSync } from 'child_process';
import fs from 'fs';
try {
  const output = execSync('node c:\\Users\\21730\\.trae\\sdks\\workspaces\\aa74ea49\\versions\\node\\current\\node_modules\\npm\\bin\\npm-cli.js install', { encoding: 'utf-8' });
  fs.writeFileSync('install.log', output);
} catch (e) {
  fs.writeFileSync('install.log', e.toString() + '\\n' + e.stdout?.toString() + '\\n' + e.stderr?.toString());
}
