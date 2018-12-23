import client from './contentful';

export const CONTENTFUL = 'CONTENTFUL';

export const ENTRIES = 'ENTRIES';
export const ENTRY = 'ENTRY';

const nextAction = (action, data) => (
  Object.assign({}, action, data, {[CONTENTFUL]: undefined})
);

export default () => next => action => {
  if (!action[CONTENTFUL]) return next(action);

  const [requestType, successType, failureType] = action[CONTENTFUL].types;
  const {
    id,
    query = {},
    method
  } = action[CONTENTFUL];

  switch (method) {
    case ENTRIES:
      next(nextAction(action, { type: requestType }));
      return client
        .getEntries(query)
        .then(({ items }) => {
          next(nextAction(action, { type: successType, items }));
          return items;
        })
        .catch(error => {
          next(nextAction(action, { type: failureType, error }));
          return error;
        });
    
    case ENTRY:
      next(nextAction(action, { type: requestType }));
      return client
        .getEntry(id, query)
        .then((item) => {
          next(nextAction(action, { type: successType, item }));
          return item;
        })
        .catch(error => {
          next(nextAction(action, { type: failureType, error }));
          return error;
        });
    
    default:
      return next(action);
  }
};