const logger = (store: any) => (next: any) => (action: any) => {
  // tslint:disable-next-line:no-console
  console.group(action.type);
  // tslint:disable-next-line:no-console
  console.info('The action: ', action);
  const returnValue = next(action);
  // tslint:disable-next-line:no-console
  console.info('The new state: ', store.getState());
  // tslint:disable-next-line:no-console
  console.groupEnd();
  return returnValue;
};

export default logger;
