import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import lightStyles from "./indexLight.module.css";
import darkStyles from "./indexDark.module.css";
import { ColorMode } from "../../../models";
import { useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IPaginationProps {
  pageCount: number;
  activePage: number;
}

function Pagination({ pageCount, activePage }: IPaginationProps) {
  const { colorMode } = useColorMode();
  const [styles, setStyles] = useState(lightStyles);
  const navigate = useNavigate();
  useEffect(() => {
    if (colorMode === ColorMode.dark) {
      setStyles(darkStyles);
    } else {
      setStyles(lightStyles);
    }
  }, [colorMode]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    navigate(`/user/tasks/${selectedItem.selected + 1}`);
  };

  return (
    <ReactPaginate
      containerClassName={styles["pagination-container"]}
      pageClassName={styles["pagination-item"]}
      activeClassName={styles["selected"]}
      disabledClassName={styles["disabled"]}
      breakClassName={styles["break"]}
      previousClassName={styles["pagination-item"]}
      nextClassName={styles["pagination-item"]}
      breakLabel="..."
      nextLabel="next >"
      forcePage={activePage - 1}
      onPageChange={handlePageClick}
      pageRangeDisplayed={10}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
