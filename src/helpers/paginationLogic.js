export const paginationLogic = (currentPage, pokemonsFilter) => {
  const pokemonsPerPage = 12;

  let pokemonsInPage = [];
  const sliceStar = (currentPage - 1) * pokemonsPerPage;
  const sliceEnd = currentPage * pokemonsPerPage;
  pokemonsInPage = pokemonsFilter.slice(sliceStar, sliceEnd);

  const arrayPages = [];
  const cuantityPages = Math.ceil(pokemonsFilter.length / pokemonsPerPage);
  for (let i = 1; i <= cuantityPages; i++) {
    arrayPages.push(i);
  }

  const lastPage = arrayPages[arrayPages.length - 1];

  let pagesInBlock = [];
  const pagesPerBlock = 5;
  let acutualBlock = 1;
  for (
    let currentBlock = 1;
    currentBlock * pagesPerBlock < currentPage;
    currentBlock++
  ) {
    acutualBlock = currentBlock + 1;
  }

  const minPage = acutualBlock * pagesPerBlock - pagesPerBlock;
  for (
    let currentPageInBlock = acutualBlock * pagesPerBlock;
    currentPageInBlock > minPage;
    currentPageInBlock--
  ) {
    pagesInBlock.unshift(currentPageInBlock);
  }
  // console.log(pagesInBlock);
  return { pagesInBlock, lastPage, pokemonsInPage };
};
