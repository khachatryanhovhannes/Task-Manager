import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import lightStyles from "./indexLight.module.css";
import darkStyles from "./indexDark.module.css";
import { ColorMode } from "../../../models";
import { useColorMode } from "@chakra-ui/react";

interface IPaginationProps {
  pageCount: number;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

function Pagination({ pageCount, activePage, setActivePage }: IPaginationProps) {
  const { colorMode } = useColorMode();
  const [styles, setStyles] = useState(lightStyles);

  useEffect(() => {
    if (colorMode === ColorMode.dark) {
      setStyles(darkStyles);
    } else {
      setStyles(lightStyles);
    }
  }, [colorMode]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setActivePage(selectedItem.selected)
  };

  return (
    <ReactPaginate
      containerClassName={styles["pagination-container"]}
      pageClassName={styles["pagination-item"]}
      activeClassName={styles["pagination-item.selected"]}
      disabledClassName={styles["pagination-item.disabled"]}
      breakClassName={styles["pagination-item.break"]}
      previousClassName={styles["pagination-item"]}
      nextClassName={styles["pagination-item"]}
      activeLinkClassName={styles["pagination-item.active-link"]}
      breakLabel="..."
      nextLabel="next >"
      forcePage={activePage}
      onPageChange={handlePageClick}
      pageRangeDisplayed={10}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
