import fs from 'fs/promises';
import handlebars from 'handlebars';

const htmlCompiler = async (path: string, context: object): Promise<string> => {
  const html = await fs.readFile(path);
  const compiler = handlebars.compile(html.toString());
  const htmlString = compiler(context);
  return htmlString;
};

export default htmlCompiler;
