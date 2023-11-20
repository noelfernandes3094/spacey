import ReactPaginate from 'react-paginate';
import "./pagination.style.scss";

const Pagination = (props) => {
    const { pagecount, handle } = props;
    return (
        <ReactPaginate
            pageCount={pagecount}
            pageRange={2}
            marginPagesDisplayed={2}
            onPageChange={ handle }
            containerClassName={'container flex flex-wrap items-center justify-center'}
            previousLinkClassName={'prev'}
            breakClassName={'page'}
            nextLinkClassName={'next'}
            pageClassName={'page'}
            disabledClassNae={'disabled'}
            activeClassName={'active'}
        />
    )
}

export default Pagination;