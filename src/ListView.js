import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import {
  faStar as solidStar,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regStar } from "@fortawesome/free-regular-svg-icons";

export default function ListView(props) {
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(props.list.items.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  function handleFav(id) {
    props.handleFav(id);
  }
  function handleDelete(id) {
    props.handleDelete(id);
  }
  let elements = "";
  if (props.list.searchString === "" || props.list.searchString === undefined) {
    elements = props.list.items
      .slice(offset, offset + PER_PAGE)
      .map((ele, id) => (
        <div>
          <div key={id} style={{ paddingLeft: "5px" }}>
            {ele.text}
            <br />
            <span>
              <span style={{ color: "grey" }}>is your friend</span>
              <span style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
                {props.list.items[id].isFav ? (
                  <button onClick={() => handleFav(id)}>
                    <FontAwesomeIcon icon={solidStar} />
                  </button>
                ) : (
                  <button onClick={() => handleFav(id)}>
                    <FontAwesomeIcon icon={regStar} />
                  </button>
                )}
                <button onClick={() => handleDelete(id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </span>
            </span>
          </div>
          <hr />
        </div>
      ));
  } else {
    elements = props.list.items.map((ele, id) => {
      if (
        ele.text.toLowerCase().search(props.list.searchString.toLowerCase()) !==
        -1
      ) {
        return (
          <div key={id}>
            {ele.text}
            <br />
            <span>
              <span style={{ color: "grey" }}>is your friend</span>
              <span style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
                {props.list.items[id].isFav ? (
                  <button onClick={() => handleFav(id)}>
                    <FontAwesomeIcon icon={solidStar} />
                  </button>
                ) : (
                  <button onClick={() => handleFav(id)}>
                    <FontAwesomeIcon icon={regStar} />
                  </button>
                )}
                <button onClick={() => handleDelete(id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </span>
            </span>
            <hr />
          </div>
        );
      } else return null;
    });
  }
  return (
    <React.Fragment>
      <hr />
      {elements}

      <ReactPaginate
        previousLabel={"←"}
        nextLabel={"→"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </React.Fragment>
  );
}
