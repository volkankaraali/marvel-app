import React from 'react';

function Pagination({ totalCharacters, currentPage, setCurrentPage }) {


  {/*

  there is 1560 total characters in api. but it starts from 0 to 1560. we want to 20 character in a page. so we request page's characters from api as pagenumber*20.
  this mean that if pagenumber is 0, api return first 20 characters. 
  so when displaying page numbers, it should appear as +1 than the currentpage.

  */}

  const totalPage = (totalCharacters / 20) + 1;
  const displayCurrentPage = currentPage + 1;



  const beforePage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <div className="pagination-container">


        {/* if display current page less than 4 ,before button visible  */}
        <button className={`paginationButton ${displayCurrentPage <= 4 && 'hidden'}`} onClick={() => beforePage()}> {'<'} </button>

        {/* first page always display */}
        <a className={`paginationButton ${displayCurrentPage == 1 ? 'currentPage' : ''}`} onClick={() => setCurrentPage(0)}>1</a>

        {/* if display current page less than 4 pages ,second and third pages visible  */}
        {
          displayCurrentPage <= 4 && (
            <a className={`paginationButton ${displayCurrentPage == 2 ? 'currentPage' : ''}`} onClick={() => setCurrentPage(1)}>2</a>
          )
        }

        {
          displayCurrentPage <= 4 && (
            <a className={`paginationButton ${displayCurrentPage == 3 ? 'currentPage' : ''}`} onClick={() => setCurrentPage(2)}>3</a>
          )
        }
        {
          displayCurrentPage <= 4 && (
            <a className={`paginationButton ${displayCurrentPage == 4 ? 'currentPage' : ''}`} onClick={() => setCurrentPage(3)}>4</a>
          )
        }

        {/*   Visible if display current page 4 */}
        {
          displayCurrentPage === 4 && (
            <a className={`paginationButton ${displayCurrentPage == 5 ? 'currentPage' : ''} `} onClick={() => setCurrentPage(4)}>5</a>
          )
        }


        {/* if display current page bigger than 4 pages,dots visible */}
        {
          displayCurrentPage > 4 && (
            <div>...</div>
          )
        }


        {/* 3 pages button in middle */}
        {
          ((displayCurrentPage > 4) && (displayCurrentPage < totalPage - 3)) && (
            <>
              <a className='paginationButton ' onClick={() => setCurrentPage(currentPage - 1)}>{displayCurrentPage - 1} </a>
              <a className='paginationButton currentPage' onClick={() => setCurrentPage(currentPage)}>{displayCurrentPage}</a>
              <a className='paginationButton' onClick={() => setCurrentPage(currentPage + 1)}>{displayCurrentPage + 1}</a>
            </>
          )
        }

        {/*   Visible if display current page 76 */}
        {
          displayCurrentPage === (totalPage - 3) && (
            <a className={`paginationButton ${displayCurrentPage == 5 && 'currentPage'}`} onClick={() => setCurrentPage(74)}>75</a>
          )
        }


        {/* if display current page >= last 3 pages visible */}
        {
          displayCurrentPage >= (totalPage - 3) && (
            <a className={`paginationButton ${displayCurrentPage === (totalPage - 3) && 'currentPage'} `} onClick={() => setCurrentPage(75)}>
              {totalPage - 3}
            </a>
          )
        }

        {
          displayCurrentPage >= (totalPage - 3) && (
            <a className={`paginationButton ${displayCurrentPage === (totalPage - 2) && 'currentPage'}`} onClick={() => setCurrentPage(76)}>
              {totalPage - 2}
            </a>
          )
        }
        {
          displayCurrentPage >= (totalPage - 3) && (
            <a className={`paginationButton ${displayCurrentPage === (totalPage - 1) && 'currentPage'}`} onClick={() => setCurrentPage(77)}>
              {totalPage - 1}
            </a>
          )
        }


        {/* if display current page bigger than last 4 pages,dots visible */}
        {
          displayCurrentPage < (totalPage - 3) && (
            <div >...</div>
          )
        }

        {/* last page always visible */}
        <div className={`paginationButton ${displayCurrentPage == totalPage && 'currentPage'}`} onClick={() => setCurrentPage(totalPage - 1)}>
          {totalPage}
        </div>




        {/* if display current page is bigger than last 3 pages ,after button visible  */}
        <button className={`paginationButton ${displayCurrentPage > (totalPage - 4) && 'hidden'}`} onClick={() => nextPage()}> {'>'} </button>






      </div>
    </div>
  );
}

export default Pagination;