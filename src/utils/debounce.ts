const debounce = <T extends (params: any) => void>(func: T, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = setTimeout(func.bind(this, ...args), delay);
  };
};

export default debounce;
