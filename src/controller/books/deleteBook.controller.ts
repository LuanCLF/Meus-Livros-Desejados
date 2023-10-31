import { RequestHandler } from 'express';

const deleteBook: RequestHandler = async (req, res) => {
  const { id } = req.headers;
  const { bookID } = req.params;
};

export default deleteBook;
